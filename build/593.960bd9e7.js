"use strict";(self.webpackChunkyabe_ukiyo_src=self.webpackChunkyabe_ukiyo_src||[]).push([[593],{772:(e,t,n)=>{n.d(t,{h:()=>a});n(5893);var r=n(3596);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.create(Object.assign({baseURL:ukiyo.rest_api.url,headers:{"content-type":"application/json",accept:"application/json","X-WP-Nonce":ukiyo.rest_api.nonce}},e))}},7059:(e,t,n)=>{n.d(t,{k:()=>l});n(5893);var r=n(2602),a=n.n(r),o=n(6034),i=n(7693);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new(a())(Object.assign({icons:{prefix:"",suffix:"",tip:'<div class="icon-tip">'.concat((0,o.qv)(i.FDd).html,"</div>"),async:'<div class="icon-async">'.concat((0,o.qv)(i.gr5).html,"</div>"),info:'<div class="icon-info">'.concat((0,o.qv)(i.DBf).html,"</div>"),success:'<div class="icon-success">'.concat((0,o.qv)(i.fV7).html,"</div>"),warning:'<div class="icon-warning">'.concat((0,o.qv)(i.xHz).html,"</div>"),alert:'<div class="icon-alert">'.concat((0,o.qv)(i.ik8).html,"</div>")}},e))}},3187:(e,t,n)=>{n.d(t,{c:()=>i});n(9504),n(4229),n(7424),n(815),n(3143);var r=n(8598),a=n(7127),o=n(5414),i=(0,r.Q_)("busy",(function(){var e=(0,a.iH)([]),t=(0,o.Fl)((function(){return e.value.length>0})),n=(0,o.Fl)((function(){return function(t){return e.value.some((function(e){return e.task===t}))}}));return{tasks:e,isBusy:t,hasTask:n,add:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e.value.unshift({timestamp:Date.now(),task:t})},remove:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=!1;e.value=e.value.filter((function(e){return!!n||(e.task!==t||(n=!0,!1))}))},reset:function(){e.value=[]}}}))},7593:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});n(8515),n(4403),n(3903),n(3447),n(4229),n(7352),n(7023),n(4705),n(2316),n(8498),n(2815),n(8445),n(9180),n(3318),n(3143),n(7589),n(9313),n(8222),n(7132),n(6111),n(2085),n(3468),n(871),n(5848);var r=n(5414),a=n(437),o=n(7127),i=n(7663),l=n(2906),u=n(3801),c=n(772),s=n(3187),f=n(7059),d=n(319),v=n(5073),p=n(4675);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={class:"mr:8 font:24"},h={class:"form-table",role:"presentation"},k={scope:"row"},w={class:"flex"},S=(0,r._)("span",{class:"text"},"Paste Token",-1),x=(0,r._)("p",{class:"description"}," Paste the Token produced by Yabe Ukiyo to fill the below fields automatically. ",-1),U={scope:"row"},j=(0,r._)("span",{class:"fg:red-35"},"*",-1),O={scope:"row"},D=(0,r._)("span",{class:"fg:red-35"},"*",-1),Z={key:0,class:"description"},P={key:0},T={class:"font:semibold"},$=(0,r._)("br",null,null,-1),z=(0,r._)("span",{class:"font:semibold"},"Bricks: ",-1),C=(0,r._)("br",null,null,-1),q=(0,r._)("span",{class:"font:semibold"},"Yabe Ukiyo: ",-1),H={scope:"row"},N=(0,r._)("span",{class:"fg:red-35"},"*",-1),W={class:"flex"},R={class:"rel flex mr:8 align-items:center"},V=["type"],E=(0,r._)("p",{class:"description"},' You also can use the "My Templates Access" password provided by the remote site here. ',-1),F={scope:"row"},M=["disabled"];const Y={__name:"Create",setup:function(e){var t=(0,c.h)(),n=(0,l.tv)(),y=(0,f.k)(),b=(0,s.c)(),g=(0,d.G)(),Y=(0,o.iH)(!0),A=(0,o.iH)(""),B=(0,o.iH)(""),I=(0,o.iH)(!0),L=(0,o.iH)(""),X=(0,o.iH)(null),Q={status:null,connected:!1,yabeUkiyoDetected:!1,bricksDetected:!1},G=(0,o.iH)(m({},Q));function K(){B.value="",L.value="",A.value="",I.value=!0}function J(e){e.preventDefault(),b.add("remote.create:send-form");var r=t.request({method:"POST",url:"/admin/remotes/store",data:{title:B.value,license_key:A.value,status:I.value,remote_url:L.value}}).then((function(e){var t=n.resolve({name:"remotes.edit",params:{id:e.data.id}}).href;g.add({type:"success",message:'<p>Remote saved successfully. <a href="'.concat(t,'">Edit Remote</a></p>')}),K()})).finally((function(){b.remove("remote.create:send-form")}));y.async(r,"Remote stored successfully.",void 0,"Storing remote...")}return(0,r.YP)(L,(0,u.Z)((function(e,n){e!==n&&(G.value=m({},Q),""!==e&&X.value.checkValidity()&&(G.value.status="loading",t.request({method:"POST",url:"/admin/remotes/check-connection",data:{remote_url:e.trim().replace(/\/$/,"")}}).then((function(e){200===e.status?(G.value=m(m({},G.value),{},{status:!0,connected:!0}),G.value.yabeUkiyoDetected=void 0!==e.data.namespaces.find((function(e){return"yabe-ukiyo/v1"===e})),G.value.bricksDetected=void 0!==e.data.namespaces.find((function(e){return"bricks/v1"===e}))):G.value.status=!1})).catch((function(e){G.value=m(m({},Q),{},{status:!1})}))))}),100)),(0,r.wF)((function(){K()})),function(e,t){var n=(0,r.up)("font-awesome-icon"),l=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("span",_,"» "+(0,a.zw)((0,o.SU)(v.__)("New","yabe-ukiyo")),1),(0,r._)("form",{onSubmit:J},[(0,r._)("div",null,[(0,r._)("table",h,[(0,r._)("tbody",null,[(0,r._)("tr",null,[(0,r._)("th",k,[(0,r._)("label",null,(0,a.zw)((0,o.SU)(v.__)("Token","yabe-ukiyo")),1)]),(0,r._)("td",null,[(0,r._)("div",w,[(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",{onClick:t[0]||(t[0]=function(e){navigator.clipboard.readText().then((function(e){try{var t=atob(e).split("\n");3===t.length&&(L.value=t[0],B.value=t[1],A.value=t[2])}catch(e){}}))}),class:"button flex align-items:center"},[(0,r.Wm)(n,{icon:["fas","paste"],class:"font:15 mr:6"}),S])),[[l]])]),x])]),(0,r._)("tr",null,[(0,r._)("th",U,[(0,r._)("label",null,[(0,r.Uk)((0,a.zw)((0,o.SU)(v.__)("Title","yabe-ukiyo"))+" ",1),j])]),(0,r._)("td",null,[(0,r.wy)((0,r._)("input",{type:"text",name:"title","onUpdate:modelValue":t[1]||(t[1]=function(e){return B.value=e}),required:""},null,512),[[i.nr,B.value,void 0,{trim:!0,lazy:!0}]])])]),(0,r._)("tr",null,[(0,r._)("th",O,[(0,r._)("label",null,[(0,r.Uk)((0,a.zw)((0,o.SU)(v.__)("Remote URL","yabe-ukiyo"))+" ",1),D])]),(0,r._)("td",null,[(0,r.wy)((0,r._)("input",{type:"url",ref_key:"remoteUrlField",ref:X,name:"remote_url","onUpdate:modelValue":t[2]||(t[2]=function(e){return L.value=e}),required:""},null,512),[[i.nr,L.value,void 0,{trim:!0,lazy:!0}]]),null!==G.value.status?((0,r.wg)(),(0,r.iD)("p",Z,["loading"===G.value.status?((0,r.wg)(),(0,r.iD)("span",P,[(0,r.Wm)(n,{icon:["fas","spinner"],class:"mr:4 fg:gray-60 animation:rotate|linear|1s|infinite"}),(0,r.Uk)(" "+(0,a.zw)((0,o.SU)(v.__)("Connecting","yabe-ukiyo"))+"... ",1)])):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r._)("span",T,(0,a.zw)((0,o.SU)(v.__)("Server","yabe-ukiyo"))+": ",1),(0,r._)("span",{class:(0,a.C_)(G.value.connected?"fg:green-50":"fg:red-40")},(0,a.zw)(G.value.connected?(0,o.SU)(v.__)("Connected","yabe-ukiyo"):(0,o.SU)(v.__)("Failed to connect","yabe-ukiyo")),3),$,z,(0,r._)("span",{class:(0,a.C_)(G.value.bricksDetected?"fg:green-50":"fg:red-40")},(0,a.zw)(G.value.bricksDetected?(0,o.SU)(v.__)("Detected","yabe-ukiyo"):(0,o.SU)(v.__)("Not detected","yabe-ukiyo")),3),C,q,(0,r._)("span",{class:(0,a.C_)(G.value.yabeUkiyoDetected?"fg:green-50":"fg:yellow-60")},(0,a.zw)(G.value.yabeUkiyoDetected?(0,o.SU)(v.__)("Detected","yabe-ukiyo"):(0,o.SU)(v.__)("Not detected","yabe-ukiyo")),3)],64))])):(0,r.kq)("v-if",!0)])]),(0,r._)("tr",null,[(0,r._)("th",H,[(0,r._)("label",null,[(0,r.Uk)((0,a.zw)((0,o.SU)(v.__)("License Key","yabe-ukiyo"))+" ",1),N])]),(0,r._)("td",null,[(0,r._)("div",W,[(0,r._)("div",R,[(0,r.wy)((0,r._)("input",{type:Y.value?"text":"password",name:"secret_license_key","onUpdate:modelValue":t[3]||(t[3]=function(e){return A.value=e}),autocomplete:"current-password",class:"min-w:300 hide::-ms-reveal"},null,8,V),[[i.YZ,A.value]]),(0,r._)("span",{onClick:t[4]||(t[4]=function(e){return Y.value=!Y.value}),class:"flex align-items:center ml:-24 fg:gray-60 fg:gray-40:hover cursor:pointer"},[Y.value?((0,r.wg)(),(0,r.j4)(n,{key:1,icon:["fas","eye-slash"],class:"font:15"})):((0,r.wg)(),(0,r.j4)(n,{key:0,icon:["fas","eye"],class:"font:15"}))])])]),E])]),(0,r._)("tr",null,[(0,r._)("th",F,[(0,r._)("label",null,(0,a.zw)((0,o.SU)(v.__)("Status","yabe-ukiyo")),1)]),(0,r._)("td",null,[(0,r.Wm)((0,o.SU)(p.Mv),{as:"div",class:"flex align-items:center"},{default:(0,r.w5)((function(){return[(0,r.Wm)((0,o.SU)(p.rs),{modelValue:I.value,"onUpdate:modelValue":t[5]||(t[5]=function(e){return I.value=e}),class:(0,a.C_)([[I.value?"bg:sky-55":"opacity:.5 bg:gray-85"],"rel inline-flex p:0 h:24 w:44 flex-shrink:0 cursor:pointer rounded b:2 b:transparent transition-property:color,background-color,border-color,text-decoration-color,fill,stroke transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|2,rgb(14,165,233)|0|0|0|4,rgba(0,0,0,0)|0|0|0|0:focus outline:2|solid|transparent:focus"])},{default:(0,r.w5)((function(){return[(0,r._)("span",{class:(0,a.C_)([[I.value?"translateX(20)":"translateX(0)"],"pointer-events:none rel inline-block font:12 h:20 w:20 rounded bg:white transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter transition-duration:200 transition-timing-function:cubic-bezier(0.4,0,0.2,1) box-shadow:rgb(255,255,255)|0|0|0|0,rgba(59,130,246,0.5)|0|0|0|0,rgba(0,0,0,0.1)|0|1|3|0,rgba(0,0,0,0.1)|0|1|2|-1"])},[(0,r._)("span",{"aria-hidden":"true",class:(0,a.C_)([[I.value?"opacity:0 transition-timing-function:ease-out transition-duration:100":"opacity:1 transition-timing-function:ease-in transition-duration:200"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[(0,r.Wm)(n,{icon:["fas","xmark"],class:"fg:gray-60"})],2),(0,r._)("span",{"aria-hidden":"true",class:(0,a.C_)([[I.value?"opacity:1 transition-timing-function:ease-in transition-duration:200":"opacity:0 transition-timing-function:ease-out transition-duration:100"],"abs inset:0 flex h:full w:full align-items:center justify-content:center tw-transition-opacity"])},[(0,r.Wm)(n,{icon:["fas","check"],class:"fg:sky-55"})],2)],2)]})),_:1},8,["modelValue","class"]),(0,r.Wm)((0,o.SU)(p.$A),{as:"span",class:(0,a.C_)([[I.value?"fg:black":"fg:gray-60"],"ml:8 font:medium tw-cursor-pointer"])},{default:(0,r.w5)((function(){return[(0,r.Uk)((0,a.zw)(I.value?"enabled":"disabled"),1)]})),_:1},8,["class"])]})),_:1})])])])]),(0,r._)("button",{type:"submit",name:"save",id:"save",disabled:(0,o.SU)(b).isBusy,class:"button button-primary button-large",value:"save"},"Save",8,M)])],32)],64)}}}},4194:(e,t,n)=>{var r=n(1987).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},6294:(e,t,n)=>{var r=n(2460),a=n(2150),o=Math.floor,i=r("".charAt),l=r("".replace),u=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,d){var v=n+e.length,p=r.length,y=s;return void 0!==f&&(f=a(f),y=c),l(d,y,(function(a,l){var c;switch(i(l,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,n);case"'":return u(t,v);case"<":c=f[u(l,1,-1)];break;default:var s=+l;if(0===s)return a;if(s>p){var d=o(s/10);return 0===d?a:d<=p?void 0===r[d-1]?i(l,1):r[d-1]+i(l,1):a}c=r[s-1]}return void 0===c?"":c}))}},9617:(e,t,n)=>{var r=n(5004).PROPER,a=n(8442),o=n(7910);e.exports=function(e){return a((function(){return!!o[e]()||"​᠎"!=="​᠎"[e]()||r&&o[e].name!==e}))}},4403:(e,t,n)=>{var r=n(1717),a=n(5654),o=n(2460),i=n(7833),l=n(8442),u=n(5887),c=n(1645),s=n(6965),f=n(5362),d=n(9515),v=n(9949),p=n(8828),y=n(4194),b=n(9402),m=n(6294),g=n(4002),_=n(5941)("replace"),h=Math.max,k=Math.min,w=o([].concat),S=o([].push),x=o("".indexOf),U=o("".slice),j="$0"==="a".replace(/./,"$0"),O=!!/./[_]&&""===/./[_]("a","$0");i("replace",(function(e,t,n){var o=O?"$":"$0";return[function(e,n){var r=p(this),o=s(e)?void 0:b(e,_);return o?a(o,e,r,n):a(t,v(r),e,n)},function(e,a){var i=u(this),l=v(e);if("string"==typeof a&&-1===x(a,o)&&-1===x(a,"$<")){var s=n(t,i,l,a);if(s.done)return s.value}var p=c(a);p||(a=v(a));var b,_=i.global;_&&(b=i.unicode,i.lastIndex=0);for(var j,O=[];null!==(j=g(i,l))&&(S(O,j),_);){""===v(j[0])&&(i.lastIndex=y(l,d(i.lastIndex),b))}for(var D,Z="",P=0,T=0;T<O.length;T++){for(var $,z=v((j=O[T])[0]),C=h(k(f(j.index),l.length),0),q=[],H=1;H<j.length;H++)S(q,void 0===(D=j[H])?D:String(D));var N=j.groups;if(p){var W=w([z],q,C,l);void 0!==N&&S(W,N),$=v(r(a,void 0,W))}else $=m(z,l,C,q,N,a);C>=P&&(Z+=U(l,P,C)+$,P=C+z.length)}return Z+U(l,P)}]}),!!l((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!j||O)},3903:(e,t,n)=>{var r=n(8841),a=n(9564).trim;r({target:"String",proto:!0,forced:n(9617)("trim")},{trim:function(){return a(this)}})},6711:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(9615).Z.Symbol},9572:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(6711),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=r.Z?r.Z.toStringTag:void 0;const u=function(e){var t=o.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var a=i.call(e);return r&&(t?e[l]=n:delete e[l]),a};var c=Object.prototype.toString;const s=function(e){return c.call(e)};var f=r.Z?r.Z.toStringTag:void 0;const d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":f&&f in Object(e)?u(e):s(e)}},7889:(e,t,n)=>{n.d(t,{Z:()=>r});const r="object"==typeof global&&global&&global.Object===Object&&global},9615:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7889),a="object"==typeof self&&self&&self.Object===Object&&self;const o=r.Z||a||Function("return this")()},3801:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(2433),a=n(9615);const o=function(){return a.Z.Date.now()};var i=/\s/;const l=function(e){for(var t=e.length;t--&&i.test(e.charAt(t)););return t};var u=/^\s+/;const c=function(e){return e?e.slice(0,l(e)+1).replace(u,""):e};var s=n(8111),f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,v=/^0o[0-7]+$/i,p=parseInt;const y=function(e){if("number"==typeof e)return e;if((0,s.Z)(e))return NaN;if((0,r.Z)(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=(0,r.Z)(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=c(e);var n=d.test(e);return n||v.test(e)?p(e.slice(2),n?2:8):f.test(e)?NaN:+e};var b=Math.max,m=Math.min;const g=function(e,t,n){var a,i,l,u,c,s,f=0,d=!1,v=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=a,r=i;return a=i=void 0,f=t,u=e.apply(r,n)}function _(e){var n=e-s;return void 0===s||n>=t||n<0||v&&e-f>=l}function h(){var e=o();if(_(e))return k(e);c=setTimeout(h,function(e){var n=t-(e-s);return v?m(n,l-(e-f)):n}(e))}function k(e){return c=void 0,p&&a?g(e):(a=i=void 0,u)}function w(){var e=o(),n=_(e);if(a=arguments,i=this,s=e,n){if(void 0===c)return function(e){return f=e,c=setTimeout(h,t),d?g(e):u}(s);if(v)return clearTimeout(c),c=setTimeout(h,t),g(s)}return void 0===c&&(c=setTimeout(h,t)),u}return t=y(t)||0,(0,r.Z)(n)&&(d=!!n.leading,l=(v="maxWait"in n)?b(y(n.maxWait)||0,t):l,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,a=s=i=c=void 0},w.flush=function(){return void 0===c?u:k(o())},w}},2433:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},3795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=function(e){return null!=e&&"object"==typeof e}},8111:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(9572),a=n(3795);const o=function(e){return"symbol"==typeof e||(0,a.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}}}]);