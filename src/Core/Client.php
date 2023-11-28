<?php

/*
 * This file is part of the Yabe package.
 *
 * (c) Joshua Gugun Siagian <suabahasa@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
declare (strict_types=1);
namespace Yabe\Ukiyo\Core;

use Bricks\Api as BricksApi;
use Bricks\Capabilities as BricksCapabilities;
use Bricks\Helpers as BricksHelpers;
use Bricks\Templates as BricksTemplates;
use _YabeUkiyo\YABE_UKIYO;
use wpdb;
/**
 * The client-side runtime.
 *
 * @version 1.8.6
 */
class Client
{
    public function __construct()
    {
        \add_action('wp_ajax_bricks_get_remote_templates_data', fn() => $this->ajax_get_remote_templates_data(), 1);
    }
    /**
     * Verify nonce used in AJAX call
     *
     * @since 1.5.4
     *
     * @return void
     * 
     * @see \Bricks\Ajax::verify_nonce()
     */
    public function verify_nonce()
    {
        if (!\check_ajax_referer('bricks-nonce', 'nonce', \false)) {
            \wp_send_json_error('verify_nonce: "bricks-nonce" is invalid.');
        }
    }
    /**
     * Verify request: nonce and user access
     *
     * Check for builder in order to not trigger on wp_auth_check
     *
     * @since 1.0
     * 
     * @see \Bricks\Ajax::verify_request()
     * @api \Bricks\Capabilities::current_user_can_use_builder()
     */
    public function verify_request()
    {
        $this->verify_nonce();
        // Verfiy user access (NOTE: get_the_ID() returns 0 in AJAX call)
        $post_id = !empty($_POST['postId']) ? $_POST['postId'] : \get_the_ID();
        if (!BricksCapabilities::current_user_can_use_builder($post_id)) {
            \wp_send_json_error('verify_request: User can not use builder (' . \get_current_user_id() . ')');
        }
    }
    /**
     * Get the remote templates data.
     * This ajax handler is overriden the Bricks' handler.
     *
     * @see \Bricks\Ajax::get_remote_templates_data()
     */
    public function ajax_get_remote_templates_data()
    {
        $this->verify_request();
        $look_in_db_first = (bool) ($_POST['db'] ?? \false);
        $templates_data = ['timestamp' => \current_time('timestamp'), 'date' => \current_time(\get_option('date_format') . ' (' . \get_option('time_format') . ')'), 'templates' => [], 'authors' => [], 'bundles' => [], 'tags' => []];
        $remotes = $this->get_remotes();
        foreach ($remotes as $remote) {
            $remote_templates_data = $this->get_remote_templates_data($remote);
            $templates_data['templates'] = \array_merge($templates_data['templates'], $remote_templates_data['templates']);
            $templates_data['authors'] = \array_merge($templates_data['authors'], $remote_templates_data['authors']);
            $templates_data['bundles'] = \array_merge($templates_data['bundles'], $remote_templates_data['bundles']);
            $templates_data['tags'] = \array_merge($templates_data['tags'], $remote_templates_data['tags']);
        }
        $bricks_remote_template_data = BricksTemplates::get_remote_templates_data($look_in_db_first);
        $templates_data['templates'] = \array_merge($templates_data['templates'], $bricks_remote_template_data['templates']);
        $templates_data['authors'] = \array_merge($templates_data['authors'], $bricks_remote_template_data['authors']);
        $templates_data['bundles'] = \array_merge($templates_data['bundles'], $bricks_remote_template_data['bundles']);
        $templates_data['tags'] = \array_merge($templates_data['tags'], $bricks_remote_template_data['tags']);
        \wp_send_json_success($templates_data);
    }
    private function get_remotes()
    {
        /** @var wpdb $wpdb */
        global $wpdb;
        $items = [];
        $result = $wpdb->get_results("\n            SELECT *\n            FROM {$wpdb->prefix}{$wpdb->yabe_ukiyo_prefix}_remotes r\n            WHERE r.status = 1\n        ");
        foreach ($result as $row) {
            $items[] = ['id' => $row->id, 'uid' => $row->uid, 'title' => $row->title, 'remote_url' => \rtrim($row->remote_url, '/'), 'license_key' => $row->license_key];
        }
        return $items;
    }
    /**
     * Get all remote templates data (templates, authors, bundles, tags)
     *
     * @see \Bricks\Templates::get_remote_templates_data()
     */
    private function get_remote_templates_data(array $remote)
    {
        $cache_key = YABE_UKIYO::WP_OPTION . '_remote_' . $remote['uid'];
        // Use in PopupTemplates.vue mounted() to get remote templates initially without sending a remote get request
        $look_in_db_first = (bool) ($_POST['db'] ?? \false);
        if (\filter_var($look_in_db_first, \FILTER_VALIDATE_BOOLEAN)) {
            $remote_templates = \get_transient($cache_key);
            if ($remote_templates) {
                return $remote_templates;
            }
        }
        // Remote templates data
        $remote_templates_data = ['templates' => [], 'authors' => [], 'bundles' => [], 'tags' => []];
        $remote_templates_url = \trailingslashit($remote['remote_url']) . \trailingslashit(\rest_get_url_prefix()) . \trailingslashit(BricksApi::API_NAMESPACE) . 'get-templates-data';
        // Required: Pass 'site' to remote templates request to check 'myTemplatesWhitelist'
        $remote_templates_url = \add_query_arg(['site' => \get_site_url()], $remote_templates_url);
        if ($remote['license_key']) {
            $remote_templates_url = \add_query_arg(['password' => \urlencode($remote['license_key'])], $remote_templates_url);
        }
        // To purge remote template caching
        $remote_templates_url = \add_query_arg(['time' => \time()], $remote_templates_url);
        $remote_templates_response = BricksHelpers::remote_get($remote_templates_url);
        // Error handling
        if (\is_wp_error($remote_templates_response)) {
            $remote_templates_data['error'] = \wp_strip_all_tags($remote_templates_response->get_error_message());
            // Store error data and return
            \set_transient($cache_key, $remote_templates_data, 60 * 60 * 24);
            return $remote_templates_data;
        }
        $remote_templates_data = \json_decode(\wp_remote_retrieve_body($remote_templates_response), \true, 512, \JSON_THROW_ON_ERROR);
        // organize remote templates data
        $remote_templates_data['authors'] = [$remote['title']];
        // get site favicon
        $favicon = 'https://www.google.com/s2/favicons?domain=' . \parse_url($remote['remote_url'], \PHP_URL_HOST);
        if (\array_key_exists('templates', $remote_templates_data)) {
            $itemsCount = \is_countable($remote_templates_data['templates']) ? \count($remote_templates_data['templates']) : 0;
            for ($i = 0; $i < $itemsCount; ++$i) {
                $remote_templates_data['templates'][$i]['author'] = ['name' => $remote['title'] . ' — Ukiyo', 'url' => $remote['remote_url'], 'avatar' => $favicon];
            }
        } else {
            $remote_templates_data['templates'] = [];
        }
        if (\array_key_exists('bundles', $remote_templates_data)) {
            foreach ($remote_templates_data['bundles'] as $k => $v) {
                $remote_templates_data['bundles'][$k] = \sprintf('%s [%s]', $v, $remote['title']);
            }
        } else {
            $remote_templates_data['bundles'] = [];
        }
        if (!\array_key_exists('tags', $remote_templates_data)) {
            $remote_templates_data['tags'] = [];
        }
        // Filter remote templates data
        $remote_templates_data = \apply_filters('f!yabe/ukiyo/core/runtime:get_remote_templates_data', $remote_templates_data);
        // Store remote templates data in db
        \set_transient($cache_key, $remote_templates_data, 60 * 60 * 24);
        // Success: Return remote_templates_data
        return $remote_templates_data;
    }
}
