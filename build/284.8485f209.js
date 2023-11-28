/*! For license information please see 284.8485f209.js.LICENSE.txt */
"use strict";(self.webpackChunkyabe_ukiyo_src=self.webpackChunkyabe_ukiyo_src||[]).push([[284],{772:(e,t,n)=>{n.d(t,{h:()=>a});n(5893);var r=n(3596);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.create(Object.assign({baseURL:ukiyo.rest_api.url,headers:{"content-type":"application/json",accept:"application/json","X-WP-Nonce":ukiyo.rest_api.nonce}},e))}},7059:(e,t,n)=>{n.d(t,{k:()=>l});n(5893);var r=n(2602),a=n.n(r),i=n(6034),o=n(7693);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(a())(Object.assign({icons:{prefix:"",suffix:"",tip:'<div class="icon-tip">'.concat((0,i.qv)(o.FDd).html,"</div>"),async:'<div class="icon-async">'.concat((0,i.qv)(o.gr5).html,"</div>"),info:'<div class="icon-info">'.concat((0,i.qv)(o.DBf).html,"</div>"),success:'<div class="icon-success">'.concat((0,i.qv)(o.fV7).html,"</div>"),warning:'<div class="icon-warning">'.concat((0,i.qv)(o.xHz).html,"</div>"),alert:'<div class="icon-alert">'.concat((0,i.qv)(o.ik8).html,"</div>")}},e))}},3187:(e,t,n)=>{n.d(t,{c:()=>o});n(9504),n(4229),n(7424),n(815),n(3143);var r=n(8598),a=n(7127),i=n(5414),o=(0,r.Q_)("busy",(function(){var e=(0,a.iH)([]),t=(0,i.Fl)((function(){return e.value.length>0})),n=(0,i.Fl)((function(){return function(t){return e.value.some((function(e){return e.task===t}))}}));return{tasks:e,isBusy:t,hasTask:n,add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.value.unshift({timestamp:Date.now(),task:t})},remove:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=!1;e.value=e.value.filter((function(e){return!!n||(e.task!==t||(n=!0,!1))}))},reset:function(){e.value=[]}}}))},1452:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(5414),a=n(7127),i=n(437),o=n(7663),l=n(3187),s=n(7197),c={class:"alignleft actions bulkactions"},u=["id","disabled"],f={value:"-1"},d=["value"],p=["disabled"];const g={__name:"TheBulkAction",props:{actions:{type:Array,default:function(){return[]}},modelValue:{type:String,default:"-1"}},emits:["bulkActions","update:modelValue"],setup:function(e,t){var n=t.emit,g=e,y=(0,l.c)(),v=n,m=(0,r.Fl)({get:function(){return g.modelValue},set:function(e){v("update:modelValue",e)}});return function(t,n){var l=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.iD)("div",c,[(0,r.wy)((0,r._)("select",{id:"bulk-action-selector-"+(0,a.SU)(s.x0)(3),"onUpdate:modelValue":n[0]||(n[0]=function(e){return m.value=e}),name:"action",disabled:(0,a.SU)(y).isBusy,title:"Bulk Action"},[(0,r._)("option",f,(0,i.zw)(t.__("Bulk actions","yabe-ukiyo")),1),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.actions,(function(e){return(0,r.wg)(),(0,r.iD)("option",{key:e.key,value:e.key},(0,i.zw)(e.label),9,d)})),128))],8,u),[[o.bM,m.value]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"submit",class:"button action",disabled:(0,a.SU)(y).isBusy,onClick:n[1]||(n[1]=function(e){return t.$emit("bulkActions",m.value)})},[(0,r.Uk)((0,i.zw)(t.__("Apply","yabe-ukiyo")),1)],8,p)),[[l]])])}}}},996:(e,t,n)=>{n.d(t,{Z:()=>m});n(8445);var r=n(5414),a=n(7127),i=n(7663),o=n(437),l=n(3187),s={class:"pagination-links"},c=["disabled"],u=["disabled"],f={class:"paging-input mx:2"},d=["disabled","max"],p={class:"tablenav-paging-text mx:2"},g={class:"total-pages"},y=["disabled"],v=["disabled"];const m={__name:"ThePagination",props:{isEnableGoto:{type:Boolean,default:!1,required:!1},firstPage:{type:Boolean,default:!1,required:!1},previousPage:{type:Boolean,default:!1,required:!1},nextPage:{type:Boolean,default:!1,required:!1},lastPage:{type:Boolean,default:!1,required:!1},totalPage:{type:Number,default:0,required:!1},currentPage:{type:Number,default:0,required:!1}},emits:["changePage"],setup:function(e,t){var n=t.emit,m=e,h=(0,l.c)(),b=n,w=(0,a.iH)(m.currentPage);return(0,r.YP)(w,(function(e,t){e>0&&e<=m.totalPage&&e!==t&&e!==m.currentPage&&b("changePage",e)})),(0,r.YP)((function(){return m.currentPage}),(function(e,t){e!==t&&(w.value=m.currentPage)})),function(t,n){var l=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.iD)("span",s,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",disabled:(0,a.SU)(h).isBusy||!e.firstPage,class:"tablenav-pages-navspan button mx:2",onClick:n[0]||(n[0]=function(e){return t.$emit("changePage",1)})},[(0,r.Uk)(" « ")],8,c)),[[l]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",disabled:(0,a.SU)(h).isBusy||!e.previousPage,class:"tablenav-pages-navspan button mx:2",onClick:n[1]||(n[1]=function(n){return t.$emit("changePage",e.currentPage-1)})},[(0,r.Uk)(" ‹ ")],8,u)),[[l]]),(0,r._)("span",f,[e.isEnableGoto?(0,r.wy)(((0,r.wg)(),(0,r.iD)("input",{key:0,"onUpdate:modelValue":n[2]||(n[2]=function(e){return w.value=e}),class:"current-page tw-w-14",type:"number",disabled:(0,a.SU)(h).isBusy,min:"1",max:e.totalPage},null,8,d)),[[i.nr,w.value,void 0,{number:!0}]]):(0,r.kq)("v-if",!0),(0,r._)("span",p,[(0,r.Uk)((0,o.zw)(!1===e.isEnableGoto?e.currentPage:"")+" of ",1),(0,r._)("span",g,(0,o.zw)(e.totalPage),1)])]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",disabled:(0,a.SU)(h).isBusy||!e.nextPage,class:"next-page button mx:2",onClick:n[3]||(n[3]=function(n){return t.$emit("changePage",e.currentPage+1)})},[(0,r.Uk)(" › ")],8,y)),[[l]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",disabled:(0,a.SU)(h).isBusy||!e.lastPage,class:"tablenav-pages-navspan button mx:2",onClick:n[4]||(n[4]=function(n){return t.$emit("changePage",e.totalPage)})},[(0,r.Uk)(" » ")],8,v)),[[l]])])}}}},4284:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ve});n(8445),n(8515),n(7465),n(3903),n(4229),n(7352),n(7023),n(5462),n(3468),n(5848),n(533),n(6468),n(9313),n(8222),n(3447),n(3625),n(4705),n(2316),n(8498),n(2815),n(9180),n(3318),n(3143),n(7589),n(7132),n(6111),n(9174),n(815),n(8433),n(6201),n(6748),n(871),n(2085),n(2190),n(3491),n(306),n(5708),n(816),n(4490),n(3704),n(3547),n(7142);var r=n(5414),a=n(437),i=n(7127),o=n(7663),l=n(2906),s=n(5073),c=n(772),u=n(3187),f=n(1452),d=n(996),p=(n(4403),n(6931),n(4675)),g=n(7059),y={key:0,class:"plugin-deleted-tr inactive deleted"},v={colspan:"5",class:"plugin-update colspanchange"},m=["value","disabled"],h={class:"manage-column vertical-align:middle w:44"},b={class:"vertical-align:middle rel w:1/5"},w={class:"flex align-items:center"},_={class:"invisible ml:4 .yabe-ukiyo-license-row:hover_{visible} fg:gray-60 font:normal"},k={class:"row-actions visible"},x={class:"vertical-align:middle rel w:1/5"},S={class:"flex align-items:center"},U={class:"flex align-items:center fg:gray-60"},P={class:"vertical-align:middle w:1/5"},j={key:0,class:"flex align-items:center"},D={class:"ml:4 fg:gray-60 font:normal"},q={class:"vertical-align:middle w:1/5"},z={class:"vertical-align:middle"},O={class:"flex align-items:center"},E={key:0,class:"pl:4"};const L={__name:"TheLicenseIndexRow",props:{item:{type:Object,required:!0}},emits:["delete","updateStatus"],setup:function(e,t){var n=t.emit,l=(0,u.c)(),s=(0,g.k)(),c=e,f=(0,i.iH)(!1),d=(0,r.Fl)((function(){return new Date(1e3*c.item.expired_at)})),L=new Date,A=(0,r.Fl)((function(){return f.value?c.item.license_key:c.item.license_key.replace(/./g,"●")})),B=n,C=(0,r.f3)("selectedItems");function T(e){"Space"===e.code&&(e.preventDefault(),B("updateStatus"))}function $(){var e=btoa("".concat(ukiyo.site_meta.site_url,"\n").concat(ukiyo.site_meta.name,"\n").concat(c.item.license_key));navigator.clipboard.writeText(e).then((function(){s.success("Token copied to clipboard")}),(function(){s.error("Failed to copy the Token to clipboard")}))}return function(t,n){var s=(0,r.up)("font-awesome-icon"),c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)(o.uT,{mode:"out-in"},{default:(0,r.w5)((function(){return[e.item.isDeleted?((0,r.wg)(),(0,r.iD)("tr",y,[(0,r._)("td",v,[(0,r._)("strong",null,(0,a.zw)(e.item.title),1),(0,r.Uk)(" was successfully deleted. ")])])):((0,r.wg)(),(0,r.iD)("tr",{key:1,class:(0,a.C_)([{active:e.item.status,inactive:!e.item.status},"yabe-ukiyo-license-row"])},[(0,r._)("th",{scope:"row",class:(0,a.C_)([{"pl:6":!e.item.status},"vertical-align:middle py:8 yabe-ukiyo-check-column"])},[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,i.dq)(C)?C.value=e:null}),type:"checkbox",value:e.item.id,disabled:(0,i.SU)(l).isBusy,class:"ml:14"},null,8,m),[[o.e8,(0,i.SU)(C)]])],2),(0,r._)("td",h,[(0,r.Wm)((0,i.SU)(p.rs),{"aria-disabled":(0,i.SU)(l).isBusy,checked:e.item.status,onClick:n[1]||(n[1]=function(e){return t.$emit("updateStatus")}),onKeyup:T,class:(0,a.C_)([[e.item.status?"bg:sky-55":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:(0,r.w5)((function(){return[(0,r._)("span",{class:(0,a.C_)([[e.item.status?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[(0,r._)("span",{"aria-hidden":"true",class:(0,a.C_)([[e.item.status?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[e.item.isUpdatingStatus?((0,r.wg)(),(0,r.j4)(s,{key:1,icon:["fas","spinner"],class:"animation:rotate|linear|1s|infinite fg:gray-60"})):((0,r.wg)(),(0,r.j4)(s,{key:0,icon:["fas","xmark"],class:"fg:gray-60"}))],2),(0,r._)("span",{"aria-hidden":"true",class:(0,a.C_)([[e.item.status?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[e.item.isUpdatingStatus?((0,r.wg)(),(0,r.j4)(s,{key:1,icon:["fas","spinner"],class:"animation:rotate|linear|1s|infinite fg:sky-55"})):((0,r.wg)(),(0,r.j4)(s,{key:0,icon:["fas","check"],class:"fg:sky-55"}))],2)],2)]})),_:1},8,["aria-disabled","checked","class"])]),(0,r._)("td",b,[(0,r._)("div",w,[(0,r.Wm)(c,{to:{name:"licenses.show",params:{id:e.item.id}},class:(0,a.C_)({"font:semibold":e.item.status})},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(e.item.title),1)]})),_:1},8,["to","class"]),(0,r._)("span",_,"ID: "+(0,a.zw)(e.item.id),1)]),(0,r._)("div",k,[(0,r.Wm)(c,{to:{name:"licenses.edit",params:{id:e.item.id}}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(t.__("Edit","yabe-webfont")),1)]})),_:1},8,["to"]),(0,r.Uk)(" | "),(0,r._)("a",{class:(0,a.C_)([{"cursor:wait":(0,i.SU)(l).isBusy},"fg:red-40 cursor:pointer fg:red-30:hover"]),onClick:n[2]||(n[2]=function(e){return t.$emit("delete")})},(0,a.zw)(e.item.isDeleting?"Deleting...":"Delete"),3)])]),(0,r._)("td",x,[(0,r._)("div",S,[(0,r.Uk)((0,a.zw)(e.item.site)+" ",1),(0,r._)("div",U,[(0,r._)("code",{onDblclick:n[3]||(n[3]=function(e){return f.value=!f.value}),class:"fg:black"},(0,a.zw)(A.value),33),(0,r.Wm)(s,{onClick:$,icon:["far","clipboard"],class:"pl:4 font:18 cursor:pointer"})])])]),(0,r._)("td",P,[e.item.user?((0,r.wg)(),(0,r.iD)("div",j,[(0,r.Uk)((0,a.zw)("".concat(e.item.user.name," (").concat(e.item.user.email,")"))+" ",1),(0,r._)("span",D,"#"+(0,a.zw)(e.item.user.id),1)])):(0,r.kq)("v-if",!0)]),(0,r._)("td",q,[e.item.expired_at?((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,a.C_)([d.value.getTime()>(0,i.SU)(L).getTime()?"fg:green-50":"fg:red-40","flex align-items:center"])},(0,a.zw)(d.value.toISOString().split("T")[0]),3)):(0,r.kq)("v-if",!0)]),(0,r._)("td",z,[(0,r._)("div",O,[(0,r.Uk)((0,a.zw)(e.item.sites_count)+" / ",1),e.item.max_sites?((0,r.wg)(),(0,r.iD)("span",E,(0,a.zw)(e.item.max_sites),1)):((0,r.wg)(),(0,r.j4)(s,{key:1,icon:["fas","infinity"],class:"pl:4 font:14 align-self:flex-end"}))])])],2))]})),_:1})}}};const A=(0,n(6197).Z)(L,[["__scopeId","data-v-2a38673f"]]);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function C(){C=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,o=Object.create(i.prototype),l=new z(r||[]);return a(o,"_invoke",{value:P(e,n,l)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",g="executing",y="completed",v={};function m(){}function h(){}function b(){}var w={};c(w,o,(function(){return this}));var _=Object.getPrototypeOf,k=_&&_(_(O([])));k&&k!==n&&r.call(k,o)&&(w=k);var x=b.prototype=m.prototype=Object.create(w);function S(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function U(e,t){function n(a,i,o,l){var s=f(e[a],e,i);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==B(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){n("next",e,o,l)}),(function(e){n("throw",e,o,l)})):t.resolve(u).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,l)}))}l(s.arg)}var i;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return i=i?i.then(a,a):a()}})}function P(t,n,r){var a=d;return function(i,o){if(a===g)throw new Error("Generator is already running");if(a===y){if("throw"===i)throw o;return{value:e,done:!0}}for(r.method=i,r.arg=o;;){var l=r.delegate;if(l){var s=j(l,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=g;var c=f(t,n,r);if("normal"===c.type){if(a=r.done?y:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=y,r.method="throw",r.arg=c.arg)}}}function j(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(a,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function O(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(B(t)+" is not iterable")}return h.prototype=b,a(x,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:h,configurable:!0}),h.displayName=c(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},S(U.prototype),c(U.prototype,l,(function(){return this})),t.AsyncIterator=U,t.async=function(e,n,r,a,i){void 0===i&&(i=Promise);var o=new U(u(e,n,r,a),i);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(x),c(x,s,"Generator"),c(x,o,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return l.type="throw",l.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),q(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;q(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function T(e,t,n,r,a,i,o){try{var l=e[i](o),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function $(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function o(e){T(i,r,a,o,l,"next",e)}function l(e){T(i,r,a,o,l,"throw",e)}o(void 0)}))}}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i,o,l=[],s=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=i.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return l}}(e,t)||N(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===B(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var G={key:0,class:"subtitle"},Y=["disabled"],Z=(0,r._)("hr",{class:"invisible m:0 mt:-2"},null,-1),K={class:"subsubsub"},M={class:"all"},Q={class:"count"},R={class:"search-box rel"},X=["disabled"],J=["disabled"],ee={class:"tablenav top"},te={class:"tablenav-pages pb:12"},ne={class:"displaying-num"},re=(0,r._)("br",{class:"clear"},null,-1),ae={class:"wp-list-table widefat table-auto min-w:100% plugins"},ie={class:"manage-column column-cb yabe-ukiyo-check-column px:8 vertical-align:middle"},oe=(0,r._)("td",{class:"manage-column w:44"},null,-1),le={scope:"col",class:"w:1/5"},se={scope:"col",class:"w:1/5"},ce={scope:"col",class:"w:1/5"},ue={scope:"col",class:"w:1/5"},fe={scope:"col"},de={key:0},pe={key:1},ge={class:"inactive animation:tw-pulse|cubic-bezier(0.4,0,0.6,1)|2s|infinite"},ye=(0,r._)("th",{scope:"row",class:"py:8 vertical-align:middle yabe-ukiyo-check-column"},[(0,r._)("input",{type:"checkbox",value:"0",class:"ml:14",disabled:""})],-1),ve={class:"manage-column vertical-align:middle w:44"},me={class:"translateX(0) pointer-events:none rel inline-block h:20 w:20 rounded bg:white box-shadow:0|0"},he={"aria-hidden":"true",class:"abs inset:0 flex h:full w:full align-items:center justify-content:center opacity:1"},be={class:"w:1/5"},we=(0,r._)("div",{class:"h:12 bg:slate-60 rounded w:1/2"},null,-1),_e={class:"row-actions visible mt:4 align-items:center flex"},ke={class:"px:4 cursor:pointer"},xe={class:"px:4 fg:red-45 cursor:wait fg:red-35:hover"},Se=(0,r._)("td",{class:"align-items:center vertical-align:middle w:1/5"},[(0,r._)("div",{class:"h:12 bg:slate-60 rounded w:1/2"})],-1),Ue=(0,r._)("td",{class:"align-items:center vertical-align:middle w:1/5"},[(0,r._)("div",{class:"h:12 bg:slate-60 rounded w:1/2"})],-1),Pe=(0,r._)("td",{class:"align-items:center vertical-align:middle w:1/5"},[(0,r._)("div",{class:"h:12 bg:slate-60 rounded w:1/2"})],-1),je=(0,r._)("td",{class:"align-items:center vertical-align:middle"},[(0,r._)("div",{class:"h:12 bg:slate-60 rounded w:1/2"})],-1),De={key:2},qe={colspan:"5"},ze={class:"manage-column column-cb yabe-ukiyo-check-column px:8 vertical-align:middle"},Oe=(0,r._)("td",{class:"manage-column w:44"},null,-1),Ee={scope:"col",class:"w:1/5"},Le={scope:"col",class:"w:1/5"},Ae={scope:"col",class:"w:1/5"},Be={scope:"col",class:"w:1/5"},Ce={scope:"col"},Te={class:"tablenav bottom"},$e={class:"tablenav-pages"},Ie={class:"displaying-num"},Ne=(0,r._)("br",{class:"clear"},null,-1);const Ve={__name:"Index",setup:function(e){var t=(0,l.yj)(),n=(0,l.tv)(),y=(0,c.h)(),v=(0,u.c)(),m=(0,i.iH)(null),h=(0,g.k)(),b=(0,i.qj)({page:t.query.page?Number(t.query.page):1,search:t.query.search||"",per_page:t.query.per_page?Number(t.query.per_page):20}),w=(0,i.qj)({current_page:0,from:0,last_page:0,to:0,total_filtered:0,total_exists:0}),_=(0,r.Fl)((function(){return k.value.length>0?k.value.length:1})),k=(0,i.iH)([]),x=(0,i.iH)([]);(0,r.JJ)("selectedItems",x);var S=v.hasTask;function U(){n.push({name:"licenses.index",query:H(H({},t.query),b)})}function P(e){b.page=e,U()}function j(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];b.page=1,e&&(b.search=""),U()}function D(){v.add("licenses.index:fetch-items"),y.request({method:"GET",url:"/admin/licenses/index",params:{page:b.page,search:b.search,per_page:b.per_page}}).then((function(e){return e.data})).then((function(e){k.value=e.data.map((function(e){return e.isDeleted=!1,e.isDeleting=!1,e.isUpdatingStatus=!1,e})),w.total_exists=e.meta.total_exists,w.total_filtered=e.meta.total_filtered,w.current_page=e.meta.page,w.from=e.meta.from,w.to=e.meta.to,w.last_page=e.meta.total_pages,E()})).catch((function(e){h.alert(e.message)})).finally((function(){v.remove("licenses.index:fetch-items"),E()}))}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;t!==e.status&&(v.add("licenses.index:update-status"),e.isUpdatingStatus=!0,y.request({method:"PATCH",url:"/admin/licenses/update-status/".concat(e.id),data:{status:null!==t?t:!e.status}}).then((function(e){return e.data})).then((function(t){e.status=t.status})).catch((function(e){h.alert(e.message)})).finally((function(){e.isUpdatingStatus=!1,v.remove("licenses.index:update-status")})))}function z(e){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&!confirm((0,s.__)("Are you sure you want to delete this license?","yabe-ukiyo"))||(e.isDeleting=!0,v.add("licenses.index:delete"),y.request({method:"POST",url:"/admin/licenses/delete/".concat(e.id)}).then((function(t){e.isDeleted=!0})).catch((function(e){h.alert(e.message)})).finally((function(){e.isDeleting=!1,v.remove("licenses.index:delete")})))}(0,r.bv)((function(){v.reset(),D()})),(0,r.YP)((function(){return b.search}),(function(e,n){""===e&&t.query.search.trim()!==e&&j(!0)})),(0,l.ao)((function(e,t){e.query.page!==t.query.page&&(b.page=e.query.page?Number(e.query.page):1),e.query.per_page!==t.query.per_page&&(b.per_page=e.query.per_page?Number(e.query.per_page):20),D()}));var O=(0,r.Fl)({get:function(){if(k.value.length>0){var e,t=!0,n=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=N(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}(k.value.entries());try{for(n.s();!(e=n.n()).done;){var r=I(e.value,2),a=(r[0],r[1]);if(x.value.includes(a.id)||(t=!1),!t)break}}catch(e){n.e(e)}finally{n.f()}return t}return!1},set:function(e){var t=[];e&&k.value.forEach((function(e){t.push(e.id)})),x.value=t}});function E(){x.value=[]}var L=(0,i.iH)("-1"),B=(0,i.iH)([{key:"activate",label:"Activate"},{key:"deactivate",label:"Deactivate"},{key:"delete",label:"Delete"}]);function T(e){if("-1"!==e)switch(e){case"delete":confirm((0,s.__)("Are you sure you want to delete the selected license(s)?","yabe-ukiyo"))&&(x.value.forEach(function(){var e=$(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(k.value.find((function(e){return e.id===t})),!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E());break;case"deactivate":confirm((0,s.__)("Are you sure you want to deactivate the selected license(s)?","yabe-ukiyo"))&&(x.value.forEach(function(){var e=$(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(k.value.find((function(e){return e.id===t})),!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E());break;case"activate":confirm((0,s.__)("Are you sure you want to activate the selected license(s)?","yabe-ukiyo"))&&(x.value.forEach(function(){var e=$(C().mark((function e(t){return C().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q(k.value.find((function(e){return e.id===t})),!0);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E())}}return function(e,n){var l=(0,r.up)("router-link"),c=(0,r.up)("font-awesome-icon"),u=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{to:{name:"licenses.create"},class:"page-title-action"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("Add New","yabe-ukiyo")),1)]})),_:1},8,["to"]),(0,i.SU)(t).query.search?((0,r.wg)(),(0,r.iD)("span",G,[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("Search results for","yabe-ukiyo"))+": ",1),(0,r._)("strong",null,(0,a.zw)((0,i.SU)(t).query.search),1)])):(0,r.kq)("v-if",!0),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",disabled:(0,i.SU)(v).isBusy,onClick:D,class:"button float:right flex! align-items:center gap-x:5"},[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("refresh","yabe-ukiyo"))+" ",1),(0,r.Wm)(c,{icon:["far","arrows-rotate"],class:(0,a.C_)([{"animation:rotate|1s|infinite":(0,i.SU)(v).isBusy&&(0,i.SU)(S)("licenses.index:fetch-items")},"font:15"])},null,8,["class"])],8,Y)),[[u]]),Z,(0,r._)("ul",K,[(0,r._)("li",M,[(0,r.Wm)(l,{to:{name:"licenses.index",query:H(H({},(0,i.SU)(t).query),{},{page:1})},class:"current"},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("All","yabe-ukiyo"))+" ",1),(0,r._)("span",Q," ("+(0,a.zw)(w.total_exists)+") ",1)]})),_:1},8,["to"])])]),(0,r._)("p",R,[(0,r.wy)((0,r._)("input",{type:"search",id:"searchInput",name:"s","onUpdate:modelValue":n[0]||(n[0]=function(e){return b.search=e}),onKeyup:n[1]||(n[1]=(0,o.D2)((function(t){return e.$refs.searchBtn.click()}),["enter"])),disabled:(0,i.SU)(v).isBusy},null,40,X),[[o.nr,b.search,void 0,{trim:!0,lazy:!0}]]),(0,r.wy)(((0,r.wg)(),(0,r.iD)("button",{type:"button",class:"button flex! align-items:center gap-x:5",disabled:(0,i.SU)(v).isBusy,ref_key:"searchBtn",ref:m,onClick:n[2]||(n[2]=function(e){return j()})},[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("search","yabe-ukiyo"))+" ",1),(0,r.Wm)(c,{icon:["fas","magnifying-glass"],class:"font:15"})],8,J)),[[u]])]),(0,r._)("div",ee,[(0,r.Wm)(f.Z,{modelValue:L.value,"onUpdate:modelValue":n[3]||(n[3]=function(e){return L.value=e}),actions:B.value,onBulkActions:T},null,8,["modelValue","actions"]),(0,r._)("div",te,[(0,r._)("span",ne,(0,a.zw)("".concat(w.total_filtered," ").concat((0,i.SU)(s.__)("items","yabe-ukiyo"))),1),w.last_page>1?((0,r.wg)(),(0,r.j4)(d.Z,{key:0,"is-enable-goto":!0,"current-page":w.current_page,"first-page":w.current_page-1>1,"previous-page":w.current_page>1,"next-page":w.current_page<w.last_page,"last-page":w.current_page+1<w.last_page,"total-page":w.last_page,onChangePage:P},null,8,["current-page","first-page","previous-page","next-page","last-page","total-page"])):(0,r.kq)("v-if",!0)]),re]),(0,r._)("table",ae,[(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("td",ie,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[4]||(n[4]=function(e){return O.value=e}),class:"ml:12",type:"checkbox"},null,512),[[o.e8,O.value]])]),oe,(0,r._)("th",le,(0,a.zw)((0,i.SU)(s.__)("Title","yabe-ukiyo")),1),(0,r._)("th",se,(0,a.zw)((0,i.SU)(s.__)("License Key","yabe-ukiyo")),1),(0,r._)("th",ce,(0,a.zw)((0,i.SU)(s.__)("User","yabe-ukiyo")),1),(0,r._)("th",ue,(0,a.zw)((0,i.SU)(s.__)("Expire","yabe-ukiyo")),1),(0,r._)("th",fe,(0,a.zw)((0,i.SU)(s.__)("Activation","yabe-ukiyo")),1)])]),k.value.length>0&&!(0,i.SU)(S)("licenses.index:fetch-items")?((0,r.wg)(),(0,r.iD)("tbody",de,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(k.value,(function(e){return(0,r.wg)(),(0,r.j4)(A,{key:e.id,item:e,onDelete:function(t){return z(e)},onUpdateStatus:function(t){return q(e,null)}},null,8,["item","onDelete","onUpdateStatus"])})),128))])):(0,i.SU)(S)("licenses.index:fetch-items")?((0,r.wg)(),(0,r.iD)("tbody",pe,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.value,(function(e){return(0,r.wg)(),(0,r.iD)("tr",ge,[ye,(0,r._)("td",ve,[(0,r.Wm)((0,i.SU)(p.rs),{checked:!1,class:"opacity:.5 bg:gray-85 rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent"},{default:(0,r.w5)((function(){return[(0,r._)("span",me,[(0,r._)("span",he,[(0,r.Wm)(c,{icon:["fas","spinner"],class:"animation:rotate|linear|1s|infinite font:12 fg:gray-60"})])])]})),_:1})]),(0,r._)("td",be,[we,(0,r._)("div",_e,[(0,r._)("a",ke,(0,a.zw)((0,i.SU)(s.__)("Edit","yabe-ukiyo")),1),(0,r.Uk)(" | "),(0,r._)("a",xe,(0,a.zw)((0,i.SU)(s.__)("Delete","yabe-ukiyo")),1)])]),Se,Ue,Pe,je])})),256))])):((0,r.wg)(),(0,r.iD)("tbody",De,[(0,r._)("tr",null,[(0,r._)("td",qe,[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("It looks like you don't have any licenses.","yabe-ukiyo"))+" ",1),(0,r.Wm)(l,{to:{name:"licenses.create"}},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)((0,i.SU)(s.__)("Perhaps you would like to add a new one?","yabe-ukiyo")),1)]})),_:1},8,["to"])])])])),(0,r._)("tfoot",null,[(0,r._)("tr",null,[(0,r._)("td",ze,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":n[5]||(n[5]=function(e){return O.value=e}),class:"ml:12",type:"checkbox"},null,512),[[o.e8,O.value]])]),Oe,(0,r._)("th",Ee,(0,a.zw)((0,i.SU)(s.__)("Title","yabe-ukiyo")),1),(0,r._)("th",Le,(0,a.zw)((0,i.SU)(s.__)("License Key","yabe-ukiyo")),1),(0,r._)("th",Ae,(0,a.zw)((0,i.SU)(s.__)("User","yabe-ukiyo")),1),(0,r._)("th",Be,(0,a.zw)((0,i.SU)(s.__)("Expire","yabe-ukiyo")),1),(0,r._)("th",Ce,(0,a.zw)((0,i.SU)(s.__)("Activation","yabe-ukiyo")),1)])])]),(0,r._)("div",Te,[(0,r.Wm)(f.Z,{modelValue:L.value,"onUpdate:modelValue":n[6]||(n[6]=function(e){return L.value=e}),actions:B.value,onBulkActions:T},null,8,["modelValue","actions"]),(0,r._)("div",$e,[(0,r._)("span",Ie,(0,a.zw)("".concat(w.total_filtered," ").concat((0,i.SU)(s.__)("items","yabe-ukiyo"))),1),w.last_page>1?((0,r.wg)(),(0,r.j4)(d.Z,{key:0,"current-page":w.current_page,"first-page":w.current_page-1>1,"previous-page":w.current_page>1,"next-page":w.current_page<w.last_page,"last-page":w.current_page+1<w.last_page,"total-page":w.last_page,onChangePage:P},null,8,["current-page","first-page","previous-page","next-page","last-page","total-page"])):(0,r.kq)("v-if",!0)]),Ne])],64)}}}},4194:(e,t,n)=>{var r=n(1987).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},6294:(e,t,n)=>{var r=n(2460),a=n(2150),i=Math.floor,o=r("".charAt),l=r("".replace),s=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,d){var p=n+e.length,g=r.length,y=u;return void 0!==f&&(f=a(f),y=c),l(d,y,(function(a,l){var c;switch(o(l,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,p);case"<":c=f[s(l,1,-1)];break;default:var u=+l;if(0===u)return a;if(u>g){var d=i(u/10);return 0===d?a:d<=g?void 0===r[d-1]?o(l,1):r[d-1]+o(l,1):a}c=r[u-1]}return void 0===c?"":c}))}},9617:(e,t,n)=>{var r=n(5004).PROPER,a=n(8442),i=n(7910);e.exports=function(e){return a((function(){return!!i[e]()||"​᠎"!=="​᠎"[e]()||r&&i[e].name!==e}))}},4403:(e,t,n)=>{var r=n(1717),a=n(5654),i=n(2460),o=n(7833),l=n(8442),s=n(5887),c=n(1645),u=n(6965),f=n(5362),d=n(9515),p=n(9949),g=n(8828),y=n(4194),v=n(9402),m=n(6294),h=n(4002),b=n(5941)("replace"),w=Math.max,_=Math.min,k=i([].concat),x=i([].push),S=i("".indexOf),U=i("".slice),P="$0"==="a".replace(/./,"$0"),j=!!/./[b]&&""===/./[b]("a","$0");o("replace",(function(e,t,n){var i=j?"$":"$0";return[function(e,n){var r=g(this),i=u(e)?void 0:v(e,b);return i?a(i,e,r,n):a(t,p(r),e,n)},function(e,a){var o=s(this),l=p(e);if("string"==typeof a&&-1===S(a,i)&&-1===S(a,"$<")){var u=n(t,o,l,a);if(u.done)return u.value}var g=c(a);g||(a=p(a));var v,b=o.global;b&&(v=o.unicode,o.lastIndex=0);for(var P,j=[];null!==(P=h(o,l))&&(x(j,P),b);){""===p(P[0])&&(o.lastIndex=y(l,d(o.lastIndex),v))}for(var D,q="",z=0,O=0;O<j.length;O++){for(var E,L=p((P=j[O])[0]),A=w(_(f(P.index),l.length),0),B=[],C=1;C<P.length;C++)x(B,void 0===(D=P[C])?D:String(D));var T=P.groups;if(g){var $=k([L],B,A,l);void 0!==T&&x($,T),E=p(r(a,void 0,$))}else E=m(L,l,A,B,T,a);A>=z&&(q+=U(l,z,A)+E,z=A+L.length)}return q+U(l,z)}]}),!!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!P||j)},3903:(e,t,n)=>{var r=n(8841),a=n(9564).trim;r({target:"String",proto:!0,forced:n(9617)("trim")},{trim:function(){return a(this)}})}}]);