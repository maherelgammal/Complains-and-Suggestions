"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[9532],{9532:function(e,t,r){r.r(t),r.d(t,{default:function(){return ue}});var n=r(74165),i=r(37762),o=r(15861),a=r(93433),l=r(1413),s=r(15671),u=r(43144),d=r(60136),p=r(29388),c=r(27366),f=r(44055),y=r(76200),v=r(10064),h=r(84652),b=r(32718),g=r(92026),m=r(97642),w=r(18202),Z=r(66978),C=r(35995),_=r(49861),I=r(25243),k=r(38511),x=r(69912),S=r(31201),T=r(30651),F=r(27961),P=r(11936),R=r(6061),j=r(29598),q=r(56811),B=r(54395),V=r(27135),E=r(46784),N=(r(63780),function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).field=null,n.type=null,n}return(0,u.Z)(r,[{key:"clone",value:function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}}]),r}(E.wq));(0,c._)([(0,_.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],N.prototype,"field",void 0),(0,c._)([(0,_.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],N.prototype,"type",void 0);var L,A=N=(0,c._)([(0,x.j)("esri.layers.pointCloudFilters.PointCloudFilter")],N),O=L=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).requiredClearBits=null,n.requiredSetBits=null,n.type="bitfield",n}return(0,u.Z)(r,[{key:"clone",value:function(){return new L({field:this.field,requiredClearBits:(0,h.d9)(this.requiredClearBits),requiredSetBits:(0,h.d9)(this.requiredSetBits)})}}]),r}(A);(0,c._)([(0,_.Cb)({type:[I.z8],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],O.prototype,"requiredClearBits",void 0),(0,c._)([(0,_.Cb)({type:[I.z8],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],O.prototype,"requiredSetBits",void 0),(0,c._)([(0,V.J)({pointCloudBitfieldFilter:"bitfield"})],O.prototype,"type",void 0);var D,K=O=L=(0,c._)([(0,x.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],O),M=D=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).includedReturns=[],n.type="return",n}return(0,u.Z)(r,[{key:"clone",value:function(){return new D({field:this.field,includedReturns:(0,h.d9)(this.includedReturns)})}}]),r}(A);(0,c._)([(0,_.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],M.prototype,"includedReturns",void 0),(0,c._)([(0,V.J)({pointCloudReturnFilter:"return"})],M.prototype,"type",void 0);var G,J=M=D=(0,c._)([(0,x.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],M),z=G=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).mode="exclude",n.type="value",n.values=[],n}return(0,u.Z)(r,[{key:"clone",value:function(){return new G({field:this.field,mode:this.mode,values:(0,h.d9)(this.values)})}}]),r}(A);(0,c._)([(0,_.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"mode",void 0),(0,c._)([(0,V.J)({pointCloudValueFilter:"value"})],z.prototype,"type",void 0),(0,c._)([(0,_.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],z.prototype,"values",void 0);var U,$={key:"type",base:A,typeMap:{value:z=G=(0,c._)([(0,x.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],z),bitfield:K,return:J}},Y=r(45948),H=r(83040),Q=r(25610),W=r(89860),X=r(21134),ee=r(2632),te=U=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(e){var n;return(0,s.Z)(this,r),(n=t.call(this,e)).type="point-cloud-rgb",n.field=null,n}return(0,u.Z)(r,[{key:"clone",value:function(){return new U((0,l.Z)((0,l.Z)({},this.cloneProperties()),{},{field:(0,h.d9)(this.field)}))}}]),r}(ee.Z);(0,c._)([(0,V.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],te.prototype,"type",void 0),(0,c._)([(0,_.Cb)({type:String,json:{write:!0}})],te.prototype,"field",void 0);var re=te=U=(0,c._)([(0,x.j)("esri.renderers.PointCloudRGBRenderer")],te),ne=r(89431),ie=r(87005),oe={key:"type",base:ee.Z,typeMap:{"point-cloud-class-breaks":X.Z,"point-cloud-rgb":re,"point-cloud-stretch":ne.Z,"point-cloud-unique-value":ie.Z},errorContext:"renderer"},ae=r(81085),le=(0,Q.v)(),se=function(e){(0,d.Z)(r,e);var t=(0,p.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).operationalLayerType="PointCloudLayer",e.popupEnabled=!0,e.popupTemplate=null,e.opacity=1,e.filters=[],e.fields=null,e.fieldsIndex=null,e.outFields=null,e.path=null,e.legendEnabled=!0,e.renderer=null,e.type="point-cloud",e}return(0,u.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,l.Z)({url:e},t):e}},{key:"defaultPopupTemplate",get:function(){return this.attributeStorageInfo?this.createPopupTemplate():null}},{key:"getFieldDomain",value:function(e){var t=this.fieldsIndex.get(e);return t&&t.domain?t.domain:null}},{key:"readServiceFields",value:function(e,t,r){return Array.isArray(e)?e.map((function(e){var t=new H.Z;return"FieldTypeInteger"===e.type&&((e=(0,h.d9)(e)).type="esriFieldTypeInteger"),t.read(e,r),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((function(e){return new H.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})})):null}},{key:"elevationInfo",set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()}},{key:"writeRenderer",value:function(e,t,r,n){(0,w.RB)("layerDefinition.drawingInfo.renderer",e.write({},n),t)}},{key:"load",value:function(e){var t=this,r=(0,g.pC)(e)?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Z.r9).then((function(){return t._fetchService(r)}));return this.addResolvingPromise(n),Promise.resolve(this)}},{key:"createPopupTemplate",value:function(e){var t=(0,ae.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}},{key:"_formatPopupTemplateReturnsField",value:function(e){var t,r=this.fieldsIndex.get("RETURNS");if(r){var n=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((function(e){return e.fieldName===r.name}));if(n){var i=new W.Z({name:"pcl-returns-decoded",title:r.alias||r.name,expression:"\n        var returnValue = $feature.".concat(r.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[].concat((0,a.Z)(e.expressionInfos||[]),[i]),n.fieldName="expression/pcl-returns-decoded"}}}},{key:"_formatPopupTemplateRGBField",value:function(e){var t,r=this.fieldsIndex.get("RGB");if(r){var n=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((function(e){return e.fieldName===r.name}));if(n){var i=new W.Z({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:"\n        var rgb = $feature.".concat(r.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[].concat((0,a.Z)(e.expressionInfos||[]),[i]),n.fieldName="expression/pcl-rgb-decoded"}}}},{key:"queryCachedStatistics",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var o,a,l,s,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load(r);case 2:if(this.attributeStorageInfo){e.next=4;break}throw new v.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");case 4:if(o=this.fieldsIndex.get(t)){e.next=7;break}throw new v.Z("pointcloudlayer:field-unexisting","Field '".concat(t,"' does not exist on the layer"));case 7:a=(0,i.Z)(this.attributeStorageInfo),e.prev=8,a.s();case 10:if((l=a.n()).done){e.next=17;break}if((s=l.value).name!==o.name){e.next=15;break}return u=(0,C.v_)(this.parsedUrl.path,"./statistics/".concat(s.key)),e.abrupt("return",(0,y.default)(u,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((function(e){return e.data})));case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:throw new v.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available");case 26:case"end":return e.stop()}}),e,this,[[8,19,22,25]])})));return function(t,r){return e.apply(this,arguments)}}()},{key:"saveAs",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r){var i=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(B.xp.SAVE_AS,(0,l.Z)((0,l.Z)({},r),{},{getTypeKeywords:function(){return i._getTypeKeywords()},portalItemLayerType:"point-cloud"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var t,r=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"point-cloud"},e.abrupt("return",this._debouncedSaveOperations(B.xp.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new v.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new v.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new v.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}},{key:"hasCachedStatistics",value:function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((function(t){return t.name===e}))}},{key:"_getTypeKeywords",value:function(){return["PointCloud"]}},{key:"_validateElevationInfo",value:function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&b.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&b.Z.getLogger(this.declaredClass).warn(".elevationInfo=","Point cloud layers do not support featureExpressionInfo"))}}]),r}((0,B.Vt)((0,P.Y)((0,R.q)((0,j.I)((0,q.M)((0,m.R)((0,F.V)(T.Z))))))));(0,c._)([(0,_.Cb)({type:["PointCloudLayer"]})],se.prototype,"operationalLayerType",void 0),(0,c._)([(0,_.Cb)(Y.C_)],se.prototype,"popupEnabled",void 0),(0,c._)([(0,_.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],se.prototype,"popupTemplate",void 0),(0,c._)([(0,_.Cb)({readOnly:!0,json:{read:!1}})],se.prototype,"defaultPopupTemplate",null),(0,c._)([(0,_.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],se.prototype,"opacity",void 0),(0,c._)([(0,_.Cb)({type:["show","hide"]})],se.prototype,"listMode",void 0),(0,c._)([(0,_.Cb)({types:[$],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],se.prototype,"filters",void 0),(0,c._)([(0,_.Cb)({type:[H.Z]})],se.prototype,"fields",void 0),(0,c._)([(0,_.Cb)(le.fieldsIndex)],se.prototype,"fieldsIndex",void 0),(0,c._)([(0,k.r)("service","fields",["fields","attributeStorageInfo"])],se.prototype,"readServiceFields",null),(0,c._)([(0,_.Cb)(le.outFields)],se.prototype,"outFields",void 0),(0,c._)([(0,_.Cb)({readOnly:!0})],se.prototype,"attributeStorageInfo",void 0),(0,c._)([(0,_.Cb)(Y.PV)],se.prototype,"elevationInfo",null),(0,c._)([(0,_.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],se.prototype,"path",void 0),(0,c._)([(0,_.Cb)(Y.rn)],se.prototype,"legendEnabled",void 0),(0,c._)([(0,_.Cb)({types:oe,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:oe},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],se.prototype,"renderer",void 0),(0,c._)([(0,S.c)("renderer")],se.prototype,"writeRenderer",null),(0,c._)([(0,_.Cb)({json:{read:!1},readOnly:!0})],se.prototype,"type",void 0);var ue=se=(0,c._)([(0,x.j)("esri.layers.PointCloudLayer")],se)}}]);
//# sourceMappingURL=9532.e055f227.chunk.js.map