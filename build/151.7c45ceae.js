"use strict";(self.webpackChunkyabe_ukiyo_src=self.webpackChunkyabe_ukiyo_src||[]).push([[151],{1960:(e,o,t)=>{t.r(o),t.d(o,{default:()=>E});t(533),t(6468);var c=t(5414),a=t(437),n=t(7127),l=t(7339),r=t(5390),i=t(5949),_=t(8598),m={class:"form-table",role:"presentation"},u={scope:"row"},s={for:"enable_integration"},p={class:""},d=["checked","value"],h={for:"enable_integration"},w={class:"description"},b={scope:"row"},y={for:"print_purchase_page"},v={class:""},k=["checked","value"],S={for:"print_purchase_page"},g={class:"description"},U={scope:"row"},f={for:"print_receipt_email"},Z={class:""},z=["checked","value"],V={for:"print_receipt_email"},C={class:"description"},T={scope:"row"},x={for:"payment_status_deactivate"},I={class:"description"},P={scope:"row"},W={for:"payment_status_activate"},D={class:"description"};const E={__name:"WooCommerce",setup:function(e){var o=(0,i.V)(),t=(0,_.Jk)(o).setting,E=["failed","on-hold","pending","processing","refunded","expired","pending-cancel","cancelled"],L=function(e){return!(0,r.Z)(t.value,"ecommerce.woocommerce.deactivate_when_payment_status",[]).includes(e)&&!(0,r.Z)(t.value,"ecommerce.woocommerce.revoke_when_payment_status",[]).includes(e)};return function(e,o){var i=(0,c.up)("VueSelect");return(0,c.wg)(),(0,c.iD)("table",m,[(0,c._)("tbody",null,[(0,c._)("tr",null,[(0,c._)("th",u,[(0,c._)("label",s,(0,a.zw)(e.__("Enable Integration","yabe-ukiyo")),1)]),(0,c._)("td",null,[(0,c._)("div",p,[(0,c._)("input",{type:"checkbox",name:"enable_integration",id:"enable_integration",checked:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.enable_integration",!1),value:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.enable_integration",!1),onInput:o[0]||(o[0]=function(e){var o;return(0,n.SU)(l.Z)((0,n.SU)(t),"ecommerce.woocommerce.enable_integration",!(null!==(o=(0,n.SU)(t))&&void 0!==o&&null!==(o=o.ecommerce)&&void 0!==o&&null!==(o=o.woocommerce)&&void 0!==o&&o.enable_integration))}),class:"mr:8"},null,40,d),(0,c._)("label",h,(0,a.zw)(e.__("To enable integration, please tick this box.","yabe-ukiyo")),1)]),(0,c._)("p",w,(0,a.zw)(e.__("The WooCommerce integration module will be loaded.","yabe-ukiyo")),1)])]),(0,c._)("tr",null,[(0,c._)("th",b,[(0,c._)("label",y,(0,a.zw)(e.__("Purchase Page","yabe-ukiyo")),1)]),(0,c._)("td",null,[(0,c._)("div",v,[(0,c._)("input",{type:"checkbox",name:"print_purchase_page",id:"print_purchase_page",checked:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.print_purchase_page",!1),value:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.print_purchase_page",!1),onInput:o[1]||(o[1]=function(e){var o;return(0,n.SU)(l.Z)((0,n.SU)(t),"ecommerce.woocommerce.print_purchase_page",!(null!==(o=(0,n.SU)(t))&&void 0!==o&&null!==(o=o.ecommerce)&&void 0!==o&&null!==(o=o.woocommerce)&&void 0!==o&&o.print_purchase_page))}),class:"mr:8"},null,40,k),(0,c._)("label",S,(0,a.zw)(e.__("License detail on the purchase page.","yabe-ukiyo")),1)]),(0,c._)("p",g,(0,a.zw)(e.__("The license will be shown on the user's purchase history page.")),1)])]),(0,c._)("tr",null,[(0,c._)("th",U,[(0,c._)("label",f,(0,a.zw)(e.__("Receipt Email","yabe-ukiyo")),1)]),(0,c._)("td",null,[(0,c._)("div",Z,[(0,c._)("input",{type:"checkbox",name:"print_receipt_email",id:"print_receipt_email",checked:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.print_receipt_email",!1),value:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.print_receipt_email",!1),onInput:o[2]||(o[2]=function(e){var o;return(0,n.SU)(l.Z)((0,n.SU)(t),"ecommerce.woocommerce.print_receipt_email",!(null!==(o=(0,n.SU)(t))&&void 0!==o&&null!==(o=o.ecommerce)&&void 0!==o&&null!==(o=o.woocommerce)&&void 0!==o&&o.print_receipt_email))}),class:"mr:8"},null,40,z),(0,c._)("label",V,(0,a.zw)(e.__("License detail on the receipt email.","yabe-ukiyo")),1)]),(0,c._)("p",C,(0,a.zw)(e.__("The license will be included in the receipt email for each successful purchase.")),1)])]),(0,c._)("tr",null,[(0,c._)("th",T,[(0,c._)("label",x,(0,a.zw)(e.__("Deactivate when Payment Status :","yabe-ukiyo")),1)]),(0,c._)("td",null,[(0,c.Wm)(i,{multiple:"",options:E,selectable:L,modelValue:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.deactivate_when_payment_status",[]),"onUpdate:modelValue":o[3]||(o[3]=function(e){return(0,n.SU)(l.Z)((0,n.SU)(t),"ecommerce.woocommerce.deactivate_when_payment_status",e)}),class:"w:25em"},null,8,["modelValue"]),(0,c._)("p",I,(0,a.zw)(e.__('The license will be deactivated when the payment status changes from "Completed" to the following status.',"yabe-ukiyo")),1)])]),(0,c._)("tr",null,[(0,c._)("th",P,[(0,c._)("label",W,(0,a.zw)(e.__("Revoke when Payment Status :","yabe-ukiyo")),1)]),(0,c._)("td",null,[(0,c.Wm)(i,{multiple:"",options:E,selectable:L,modelValue:(0,n.SU)(r.Z)((0,n.SU)(t),"ecommerce.woocommerce.revoke_when_payment_status",[]),"onUpdate:modelValue":o[4]||(o[4]=function(e){return(0,n.SU)(l.Z)((0,n.SU)(t),"ecommerce.woocommerce.revoke_when_payment_status",e)}),class:"w:25em"},null,8,["modelValue"]),(0,c._)("p",D,(0,a.zw)(e.__('The license will be revoked or deleted when the payment status changes from "Completed" to the following status.',"yabe-ukiyo")),1)])])])])}}}}}]);