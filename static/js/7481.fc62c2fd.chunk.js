"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[7481],{77095:function(e,t,r){r.d(t,{hN:function(){return T},P0:function(){return Z},cW:function(){return k}});var n=r(74165),i=r(37762),s=r(15861),a=r(10064),u=r(34066),o=r(66504);var l=r(77981),c=r(92975);function f(e,t){return e?t?4:3:t?3:2}function p(e,t,r,n,i,s){var a=f(i,s),u=n.coords,o=n.lengths;if(!o)return!1;for(var l=0,c=0;l<o.length;l++,c+=a)if(!h(e,t,r,u[c],u[c+1]))return!1;return!0}function h(e,t,r,n,s){if(!e)return!1;var a,u=f(t,r),o=e.coords,l=e.lengths,c=!1,p=0,h=(0,i.Z)(l);try{for(h.s();!(a=h.n()).done;){var d=a.value;c=y(c,o,u,p,d,n,s),p+=d*u}}catch(v){h.e(v)}finally{h.f()}return c}function y(e,t,r,n,i,s,a){for(var u=e,o=n,l=n,c=n+i*r;l<c;l+=r){(o=l+r)===c&&(o=n);var f=t[l],p=t[l+1],h=t[o],y=t[o+1];(p<a&&y>=a||y<a&&p>=a)&&f+(a-p)/(y-p)*(h-f)<s&&(u=!u)}return u}var d=r(83406),v=r(80457),m=r(19995),b=r(31904),w="feature-store:unsupported-query",x={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},_={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function g(e){return null!=e&&!0===_.spatialRelationship[e]}function R(e){return null!=e&&!0===_.queryGeometry[(0,l.Ji)(e)]}function S(e){return null!=e&&!0===_.layerGeometry[e]}function k(e,t,n,i,s){if((0,l.oU)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var a=(0,d.Uy)(new v.Z,t,!1,!1);return Promise.resolve((function(e){return function(e,t,r,n){return h(e,t,r,n.coords[0],n.coords[1])}(a,!1,!1,e)}))}if((0,l.oU)(t)&&"esriGeometryMultipoint"===n){var c=(0,d.Uy)(new v.Z,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((function(e){return p(c,!1,!1,e,i,s)}))}if((0,l.YX)(t)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((function(e){return(0,u.aV)(t,(0,b.Op)(n,i,s,e))}));if((0,l.YX)(t)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===e)return Promise.resolve((function(e){return(0,u.lQ)(t,(0,b.Op)(n,i,s,e))}));if((0,l.YX)(t)&&"esriSpatialRelIntersects"===e){var f=function(e){return"mesh"===e?o.h_:(0,o.IY)(e)}(n);return Promise.resolve((function(e){return f(t,(0,b.Op)(n,i,s,e))}))}return Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309)).then((function(r){var a=r[x[e]].bind(null,t.spatialReference,t);return function(e){return a((0,b.Op)(n,i,s,e))}}))}function Z(e,t,r){return I.apply(this,arguments)}function I(){return I=(0,s.Z)((0,n.Z)().mark((function e(t,r,i){var s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.spatialRel,!(u=t.geometry)){e.next=11;break}if(g(s)){e.next=4;break}throw new a.Z(w,"Unsupported query spatial relationship",{query:t});case 4:if(!(0,c.JY)(u.spatialReference)||!(0,c.JY)(i)){e.next=11;break}if(R(u)){e.next=7;break}throw new a.Z(w,"Unsupported query geometry type",{query:t});case 7:if(S(r)){e.next=9;break}throw new a.Z(w,"Unsupported layer geometry type",{query:t});case 9:if(!t.outSR){e.next=11;break}return e.abrupt("return",(0,m._W)(t.geometry&&t.geometry.spatialReference,t.outSR));case 11:case"end":return e.stop()}}),e)}))),I.apply(this,arguments)}function T(e){if((0,l.YX)(e))return!0;if((0,l.oU)(e)){var t,r=(0,i.Z)(e.rings);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(5!==n.length)return!1;if(n[0][0]!==n[1][0]||n[0][0]!==n[4][0]||n[2][0]!==n[3][0]||n[0][1]!==n[3][1]||n[0][1]!==n[4][1]||n[1][1]!==n[2][1])return!1}}catch(s){r.e(s)}finally{r.f()}return!0}return!1}},20311:function(e,t,r){r.d(t,{R:function(){return s},y:function(){return u}});var n=r(74165),i=r(15861);function s(e,t){return a.apply(this,arguments)}function a(){return a=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,s,a,u,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(i=r.featureAdapter,s=t.startTimeField,a=t.endTimeField,u=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,!s||!a){e.next=9;break}return e.next=7,r.forEach((function(e){var t=i.getAttribute(e,s),r=i.getAttribute(e,a);null==t||isNaN(t)||(u=Math.min(u,t)),null==r||isNaN(r)||(o=Math.max(o,r))}));case 7:e.next=12;break;case 9:return l=s||a,e.next=12,r.forEach((function(e){var t=i.getAttribute(e,l);null==t||isNaN(t)||(u=Math.min(u,t),o=Math.max(o,t))}));case 12:return e.abrupt("return",{start:u,end:o});case 13:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function u(e,t,r){if(!t||!e)return null;var n=e.startTimeField,i=e.endTimeField;if(!n&&!i)return null;var s=t.start,a=t.end;return null===s&&null===a?null:void 0===s&&void 0===a?function(){return!1}:n&&i?function(e,t,r,n,i){return null!=n&&null!=i?function(s){var a=e.getAttribute(s,t),u=e.getAttribute(s,r);return(null==a||a<=i)&&(null==u||u>=n)}:null!=n?function(t){var i=e.getAttribute(t,r);return null==i||i>=n}:null!=i?function(r){var n=e.getAttribute(r,t);return null==n||n<=i}:void 0}(r,n,i,s,a):function(e,t,r,n){return null!=r&&null!=n&&r===n?function(n){return e.getAttribute(n,t)===r}:null!=r&&null!=n?function(i){var s=e.getAttribute(i,t);return s>=r&&s<=n}:null!=r?function(n){return e.getAttribute(n,t)>=r}:null!=n?function(r){return e.getAttribute(r,t)<=n}:void 0}(r,n||i,s,a)}},31904:function(e,t,r){r.d(t,{EG:function(){return g},Op:function(){return R},S2:function(){return P},Up:function(){return S},j6:function(){return Z},vF:function(){return m}});var n=r(74165),i=r(15861),s=r(43404),a=r(92026),u=r(68860),o=r(79803),l=r(94446),c=r(77981),f=r(91340),p=r(92975),h=r(83406),y=r(80457),d=r(19995),v=new s.X({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),m=Object.freeze({}),b=new y.Z,w=new y.Z,x=new y.Z,_={esriGeometryPoint:h.fQ,esriGeometryPolyline:h.J6,esriGeometryPolygon:h.eG,esriGeometryMultipoint:h.Iv};function g(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if((0,a.Wi)(t))return null;var s=e.hasZ&&n,u=e.hasM&&i;if(r){var o=(0,h.Nh)(x,t,e.hasZ,e.hasM,"esriGeometryPoint",r,n,i);return(0,h.fQ)(o,s,u)}return(0,h.fQ)(t,s,u)}function R(e,t,r,n,i,s){var u,o,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:r,f=t&&l,p=r&&c,y=(0,a.pC)(n)?"coords"in n?n:n.geometry:null;if((0,a.Wi)(y))return null;if(i){var d,v,m=(0,h.zj)(w,y,t,r,e,i,l,c);return s&&(m=(0,h.Nh)(x,m,f,p,e,s)),null!==(d=null===(v=_[e])||void 0===v?void 0:v.call(_,m,f,p))&&void 0!==d?d:null}if(s){var g,R,S=(0,h.Nh)(x,y,t,r,e,s,l,c);return null!==(g=null===(R=_[e])||void 0===R?void 0:R.call(_,S,f,p))&&void 0!==g?g:null}return(0,h.hY)(b,y,t,r,l,c),null!==(u=null===(o=_[e])||void 0===o?void 0:o.call(_,b,f,p))&&void 0!==u?u:null}function S(e,t,r){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var s,a,u,o,l,c,f,p;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.outFields,a=t.orderByFields,u=t.groupByFieldsForStatistics,o=t.outStatistics,s)for(l=0;l<s.length;l++)s[l]=s[l].trim();if(a)for(c=0;c<a.length;c++)a[c]=a[c].trim();if(u)for(f=0;f<u.length;f++)u[f]=u[f].trim();if(o)for(p=0;p<o.length;p++)o[p].onStatisticField&&(o[p].onStatisticField=o[p].onStatisticField.trim());return e.abrupt("return",(t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),Z(t,r,i)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t,r){return I.apply(this,arguments)}function I(){return(I=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){var s,u,o,p,h,y,v,b,w;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if(s=t.where,t.where=s=s&&s.trim(),(!s||/^1 *= *1$/.test(s)||r&&r===s)&&(t.where=null),t.geometry){e.next=5;break}return e.abrupt("return",t);case 5:return e.next=7,F(t);case 7:if(u=e.sent,t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel&&(o=t.geometry.spatialReference,(u=(0,l.aO)(u)).spatialReference=o),!u){e.next=27;break}return e.next=12,(0,d._W)(u.spatialReference,i);case 12:return u=G(u,i),e.next=15,(0,f.aX)((0,c.im)(u));case 15:if(h=e.sent[0],!(0,a.Wi)(h)){e.next=18;break}throw m;case 18:return y="quantizationParameters"in t&&(null===(p=t.quantizationParameters)||void 0===p?void 0:p.tolerance)||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,v=y&&T(u,i)?{densificationStep:8*y}:void 0,b=h.toJSON(),e.next=23,(0,d.iV)(b,b.spatialReference,i,v);case 23:if(w=e.sent){e.next=26;break}throw m;case 26:w.spatialReference=i,t.geometry=w;case 27:return e.abrupt("return",t);case 28:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){if(!e)return!1;var r=e.spatialReference;return((0,c.YX)(e)||(0,c.oU)(e)||(0,c.l9)(e))&&!(0,p.fS)(r,t)&&!(0,o.Up)(r,t)}function G(e,t){var r=e.spatialReference;return T(e,t)&&(0,c.YX)(e)?{spatialReference:r,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}function F(e){return O.apply(this,arguments)}function O(){return(O=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,s,a,o,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.distance,i=t.units,s=t.geometry,null!=r&&!("vertexAttributes"in s)){e.next=3;break}return e.abrupt("return",s);case 3:if(a=s.spatialReference,o=i?v.fromJSON(i):(0,u.qE)(a),!a||!(0,p.sT)(a)&&!(0,p.sS)(a)){e.next=9;break}e.t0=s,e.next=12;break;case 9:return e.next=11,(0,d._W)(a,p.Zn).then((function(){return(0,d.iV)(s,p.Zn)}));case 11:e.t0=e.sent;case 12:return l=e.t0,e.next=15,E();case 15:return e.t1=e.sent,e.abrupt("return",(0,e.t1)(l.spatialReference,l,r,o));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return N.apply(this,arguments)}function N(){return(N=(0,i.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(9058),r.e(3645)]).then(r.bind(r,50309));case 2:return e.abrupt("return",e.sent.geodesicBuffer);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return e&&A in e?JSON.parse(JSON.stringify(e,U)):e}var A="_geVersion",U=function(e,t){return e!==A?t:void 0}},37481:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(74165),i=r(15861),s=r(37762),a=r(15671),u=r(43144),o=r(10064),l=r(32718),c=r(92026),f=r(65156),p=r(376),h=r(77095),y=r(20311),d=r(31904),v=r(86638),m=r(36876),b=l.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),w={getAttribute:function(e,t){return e.field(t)}};function x(e,t){return _.apply(this,arguments)}function _(){return _=(0,i.Z)((0,n.Z)().mark((function e(t,i){var s,a,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(8562).then(r.bind(r,48562));case 2:return s=e.sent,e.prev=3,(a=s.WhereClause.create(t,i)).isStandardized||(u=new o.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",a),b.error(u)),e.abrupt("return",(function(e){var t=e.readArcadeFeature();return a.testFeature(t,w)}));case 9:return e.prev=9,e.t0=e.catch(3),e.abrupt("return",(b.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",t),function(e){return!0}));case 12:case"end":return e.stop()}}),e,null,[[3,9]])}))),_.apply(this,arguments)}var g=function(){function e(t){(0,a.Z)(this,e),this._geometryBounds=(0,f.Ue)(),this._idToVisibility=new Map,this._serviceInfo=t}return(0,u.Z)(e,[{key:"hash",get:function(){return this._hash}},{key:"check",value:function(e){return this._applyFilter(e)}},{key:"clear",value:function(){var e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}},{key:"invalidate",value:function(){var e=this;this._idToVisibility.forEach((function(t,r){e._idToVisibility.set(r,0)}))}},{key:"setKnownIds",value:function(e){var t,r=(0,s.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._idToVisibility.set(n,1)}}catch(i){r.e(i)}finally{r.f()}}},{key:"setTrue",value:function(e){var t=this,r=[],n=[],i=new Set(e);return this._idToVisibility.forEach((function(e,s){var a=!!(1&t._idToVisibility.get(s)),u=i.has(s);!a&&u?r.push(s):a&&!u&&n.push(s),t._idToVisibility.set(s,u?3:0)})),{show:r,hide:n}}},{key:"createQuery",value:function(){var e=this.geometry,t=this.spatialRel,r=this.where,n=this.timeExtent,i=this.objectIds;return v.Z.fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:n,objectIds:i})}},{key:"update",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._hash=JSON.stringify(t),e.next=3,(0,d.j6)(t,null,r);case 3:return i=e.sent,e.next=6,Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)]);case 6:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"_setAttributeFilter",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.where){e.next=2;break}return e.abrupt("return",(this._clause=null,void(this.where=null)));case 2:return e.next=4,x(t.where,this._serviceInfo.fieldsIndex);case 4:this._clause=e.sent,this.where=t.where;case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setIdFilter",value:function(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}},{key:"_setGeometryFilter",value:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.geometry){e.next=2;break}return e.abrupt("return",(this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null)));case 2:return r=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",e.next=6,(0,h.cW)(i,r,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);case 6:s=e.sent,(0,p.$P)(this._geometryBounds,r),this._spatialQueryOperator=s,this.geometry=r,this.spatialRel=i;case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_setTimeFilter",value:function(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,y.y)(this._serviceInfo.timeInfo,e.timeExtent,m.k);else{var t=new o.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);l.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}},{key:"_applyFilter",value:function(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}},{key:"_filterByExpression",value:function(e){return!this.where||this._clause(e)}},{key:"_filterById",value:function(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}},{key:"_filterByGeometry",value:function(e){if(!this.geometry)return!0;var t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}},{key:"_filterByTime",value:function(e){return!!(0,c.Wi)(this._timeOperator)||this._timeOperator(e)}},{key:"_resetAllHiddenIds",value:function(){var e=this,t=[];return this._idToVisibility.forEach((function(r,n){1&r||(e._idToVisibility.set(n,1),t.push(n))})),t}}]),e}()}}]);
//# sourceMappingURL=7481.fc62c2fd.chunk.js.map