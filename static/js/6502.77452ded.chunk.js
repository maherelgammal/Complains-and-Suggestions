/*! For license information please see 6502.77452ded.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[6502],{76502:function(e,t,n){n.r(t),n.d(t,{CalciteNotice:function(){return q},defineCustomElement:function(){return F}});var i,a=n(74165),c=n(15861),o=n(15671),r=n(43144),s=n(97326),l=n(60136),u=n(29388),d=n(51554),m=n(29439),f=n(37762),h=n(72021),p=new Set,g={childList:!0};function v(e){e.forEach((function(e){var t=e.target;(0,d.xE)(t)}))}var k,b=n(92358),y=n(47242),x=n(46895),w=n(52655);!function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"}(k||(k={}));var z=n(57601),Z="title",D="message",_="link",C="actions-end",I="actions-end",E="notice-close",L="container",O="notice-content",M="notice-icon",R=(0,d.GH)(function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e;return(0,o.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.calciteNoticeClose=(0,d.yM)((0,s.Z)(e),"calciteNoticeClose",6),e.calciteNoticeOpen=(0,d.yM)((0,s.Z)(e),"calciteNoticeOpen",6),e.close=function(){e.open=!1,e.calciteNoticeClose.emit()},e.open=!1,e.kind="brand",e.closable=!1,e.icon=void 0,e.iconFlipRtl=!1,e.scale="m",e.width="auto",e.messages=void 0,e.messageOverrides=void 0,e.effectiveLocale=void 0,e.defaultMessages=void 0,e}return(0,r.Z)(n,[{key:"onMessagesChange",value:function(){}},{key:"updateRequestedIcon",value:function(){this.requestedIcon=(0,b.e)(k,this.icon,this.kind)}},{key:"connectedCallback",value:function(){var e;e=this,i||(i=(0,h.c)("mutation",v)),i.observe(e.el,g),(0,x.c)(this),(0,w.c)(this)}},{key:"disconnectedCallback",value:function(){!function(e){p.delete(e.el),v(i.takeRecords()),i.disconnect();var t,n=(0,f.Z)(p.entries());try{for(n.s();!(t=n.n()).done;){var a=(0,m.Z)(t.value,1)[0];i.observe(a,g)}}catch(c){n.e(c)}finally{n.f()}}(this),(0,x.d)(this),(0,w.d)(this)}},{key:"componentWillLoad",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,y.a)(this),this.requestedIcon=(0,b.e)(k,this.icon,this.kind),e.next=4,(0,w.s)(this);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){(0,y.s)(this)}},{key:"render",value:function(){var e=this,t=this.el,n=(0,d.h)("button",{"aria-label":this.messages.close,class:E,onClick:this.close,ref:function(t){return e.closeButton=t}},(0,d.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"})),i=(0,b.b)(t,C);return(0,d.h)("div",{class:L},this.requestedIcon?(0,d.h)("div",{class:M},(0,d.h)("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"l"===this.scale?"m":"s"})):null,(0,d.h)("div",{class:O},(0,d.h)("slot",{name:Z}),(0,d.h)("slot",{name:D}),(0,d.h)("slot",{name:_})),i?(0,d.h)("div",{class:I},(0,d.h)("slot",{name:C})):null,this.closable?n:null)}},{key:"setFocus",value:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,y.c)(this);case 2:if(t=this.el.querySelector("calcite-link"),this.closeButton||t){e.next=5;break}return e.abrupt("return");case 5:t?t.setFocus():this.closeButton&&this.closeButton.focus();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"effectiveLocaleChange",value:function(){(0,w.u)(this,this.effectiveLocale)}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-color:var(--calcite-ui-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-color:var(--calcite-ui-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-ui-warning)}"}}]),n}(d.mv),[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function N(){if("undefined"!==typeof customElements){["calcite-notice","calcite-icon"].forEach((function(e){switch(e){case"calcite-notice":customElements.get(e)||customElements.define(e,R);break;case"calcite-icon":customElements.get(e)||(0,z.d)()}}))}}N();var q=R,F=N},57601:function(e,t,n){n.d(t,{I:function(){return y},d:function(){return x}});var i=n(4942),a=n(74165),c=n(15671),o=n(43144),r=n(60136),s=n(29388),l=n(15861),u=n(51554),d=n(92358),m=n(72021),f="flip-rtl",h={},p={},g={s:16,m:24,l:32};function v(e){return k.apply(this,arguments)}function k(){return(k=(0,l.Z)((0,a.Z)().mark((function e(t){var n,i,c,o,r,s,l,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.icon,i=t.scale,c=g[i],o=b(n),r="F"===o.charAt(o.length-1),s=r?o.substring(0,o.length-1):o,l="".concat(s).concat(c).concat(r?"F":""),!h[l]){e.next=8;break}return e.abrupt("return",h[l]);case 8:return p[l]||(p[l]=fetch((0,u.K3)("./assets/icon/".concat(l,".json"))).then((function(e){return e.json()})).catch((function(){return console.error('"'.concat(l,'" is not a valid calcite-ui-icon name')),""}))),e.next=11,p[l];case 11:return d=e.sent,h[l]=d,e.abrupt("return",d);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){var t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){var i=/[a-z]/i;e=n.map((function(e,t){return e.replace(i,(function(e,n){return 0===t&&0===n?e:e.toUpperCase()}))})).join("")}return t?"i".concat(e):e}var y=(0,u.GH)(function(e){(0,r.Z)(n,e);var t=(0,s.Z)(n);function n(){var e;return(0,c.Z)(this,n),(e=t.call(this)).__registerHost(),e.__attachShadow(),e.icon=null,e.flipRtl=!1,e.scale="m",e.textLabel=void 0,e.pathData=void 0,e.visible=!1,e}return(0,o.Z)(n,[{key:"connectedCallback",value:function(){var e=this;this.waitUntilVisible((function(){e.visible=!0,e.loadIconPathData()}))}},{key:"disconnectedCallback",value:function(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}},{key:"componentWillLoad",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadIconPathData();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.el,n=this.flipRtl,a=this.pathData,c=this.scale,o=this.textLabel,r=(0,d.c)(t),s=g[c],l=!!o,m=[].concat(a||"");return(0,u.h)(u.AA,{"aria-hidden":(0,d.t)(!l),"aria-label":l?o:null,role:l?"img":null},(0,u.h)("svg",{"aria-hidden":"true",class:(e={},(0,i.Z)(e,f,"rtl"===r&&n),(0,i.Z)(e,"svg",!0),e),fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(s," ").concat(s),width:"100%",xmlns:"http://www.w3.org/2000/svg"},m.map((function(e){return"string"===typeof e?(0,u.h)("path",{d:e}):(0,u.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})}))))}},{key:"loadIconPathData",value:function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var t,n,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.icon,n=this.scale,i=this.visible,u.Z5.isBrowser&&t&&i){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,v({icon:t,scale:n});case 5:this.pathData=e.sent;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"waitUntilVisible",value:function(e){var t=this;this.intersectionObserver=(0,m.c)("intersection",(function(n){n.forEach((function(n){n.isIntersecting&&(t.intersectionObserver.disconnect(),t.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}},{key:"el",get:function(){return this}}],[{key:"assetsDirs",get:function(){return["assets"]}},{key:"watchers",get:function(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}},{key:"style",get:function(){return"@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){block-size:1rem;inline-size:1rem;min-inline-size:1rem;min-block-size:1rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem;min-inline-size:1.5rem;min-block-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem;min-inline-size:2rem;min-block-size:2rem}.flip-rtl{transform:scaleX(-1)}.svg{display:block}"}}]),n}(u.mv),[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function x(){if("undefined"!==typeof customElements){["calcite-icon"].forEach((function(e){if("calcite-icon"===e)customElements.get(e)||customElements.define(e,y)}))}}x()},47242:function(e,t,n){n.d(t,{a:function(){return c},c:function(){return r},s:function(){return o}});var i=new WeakMap,a=new WeakMap;function c(e){a.set(e,new Promise((function(t){return i.set(e,t)})))}function o(e){i.get(e)()}function r(e){return a.get(e)}}}]);
//# sourceMappingURL=6502.77452ded.chunk.js.map