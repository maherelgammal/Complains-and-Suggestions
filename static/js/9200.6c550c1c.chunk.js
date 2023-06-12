"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[9200],{89200:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var l,n=r(74165),o=r(15861),a=r(37762),i=r(1413),s=r(15671),u=r(43144),p=r(60136),c=r(29388),v=r(27366),y=(r(59486),r(76200)),f=r(10064),d=r(97642),h=r(643),m=r(35995),w=r(49861),b=(r(25243),r(63780),r(38511)),Z=r(69912),g=r(31201),T=r(30651),_=r(6693),C=r(6061),R=r(29598),j=r(71684),k=r(56811),x=r(83690),S=r(59068),I=r(22824),P=r(4961),U=r(53866),M=r(78952),E=r(585),W=l=function(e){(0,p.Z)(r,e);var t=(0,c.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).copyright="",e.fullExtent=new U.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,M.Z.WebMercator),e.legendEnabled=!1,e.isReference=null,e.popupEnabled=!1,e.spatialReference=M.Z.WebMercator,e.subDomains=null,e.tileInfo=new I.Z({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new E.Z({x:-20037508.342787,y:20037508.342787,spatialReference:M.Z.WebMercator}),spatialReference:M.Z.WebMercator,lods:[new S.Z({level:0,scale:591657527.591555,resolution:156543.033928}),new S.Z({level:1,scale:295828763.795777,resolution:78271.5169639999}),new S.Z({level:2,scale:147914381.897889,resolution:39135.7584820001}),new S.Z({level:3,scale:73957190.948944,resolution:19567.8792409999}),new S.Z({level:4,scale:36978595.474472,resolution:9783.93962049996}),new S.Z({level:5,scale:18489297.737236,resolution:4891.96981024998}),new S.Z({level:6,scale:9244648.868618,resolution:2445.98490512499}),new S.Z({level:7,scale:4622324.434309,resolution:1222.99245256249}),new S.Z({level:8,scale:2311162.217155,resolution:611.49622628138}),new S.Z({level:9,scale:1155581.108577,resolution:305.748113140558}),new S.Z({level:10,scale:577790.554289,resolution:152.874056570411}),new S.Z({level:11,scale:288895.277144,resolution:76.4370282850732}),new S.Z({level:12,scale:144447.638572,resolution:38.2185141425366}),new S.Z({level:13,scale:72223.819286,resolution:19.1092570712683}),new S.Z({level:14,scale:36111.909643,resolution:9.55462853563415}),new S.Z({level:15,scale:18055.954822,resolution:4.77731426794937}),new S.Z({level:16,scale:9027.977411,resolution:2.38865713397468}),new S.Z({level:17,scale:4513.988705,resolution:1.19432856685505}),new S.Z({level:18,scale:2256.994353,resolution:.597164283559817}),new S.Z({level:19,scale:1128.497176,resolution:.298582141647617}),new S.Z({level:20,scale:564.248588,resolution:.14929107082380833}),new S.Z({level:21,scale:282.124294,resolution:.07464553541190416}),new S.Z({level:22,scale:141.062147,resolution:.03732276770595208}),new S.Z({level:23,scale:70.5310735,resolution:.01866138385297604})]}),e.type="web-tile",e.urlTemplate=null,e.wmtsInfo=null,e}return(0,u.Z)(r,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,i.Z)({urlTemplate:e},t):e}},{key:"load",value:function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r,l=new m.R9(t.urlTemplate);!(t.subDomains&&t.subDomains.length>0)&&(null===(r=l.authority)||void 0===r?void 0:r.includes("{subDomain}"))&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new f.Z("web-tile-layer:load","WebTileLayer (title: '".concat(t.title,"', id: '").concat(t.id,"') ").concat(e))}));return this.addResolvingPromise(r),Promise.resolve(this)}},{key:"levelValues",get:function(){var e=[];if(!this.tileInfo)return null;var t,r=(0,a.Z)(this.tileInfo.lods);try{for(r.s();!(t=r.n()).done;){var l=t.value;e[l.level]=l.levelValue||l.level}}catch(n){r.e(n)}finally{r.f()}return e}},{key:"readSpatialReference",value:function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&M.Z.fromJSON(t.fullExtent.spatialReference)}},{key:"tileServers",get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new m.R9(t),n=l.scheme?l.scheme+"://":"//",o=n+l.authority+"/",i=l.authority;if(null!==i&&void 0!==i&&i.includes("{subDomain}")){if(r&&r.length>0&&i.split(".").length>1){var s,u=(0,a.Z)(r);try{for(u.s();!(s=u.n()).done;){var p=s.value;e.push(n+i.replace(/\{subDomain\}/gi,p)+"/")}}catch(c){u.e(c)}finally{u.f()}}}else e.push(o);return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))}},{key:"urlPath",get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new m.R9(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}},{key:"readUrlTemplate",value:function(e,t){return e||t.templateUrl}},{key:"writeUrlTemplate",value:function(e,t){e&&(0,m.oC)(e)&&(e="https:"+e),e&&(e=e.replace(/\{z\}/gi,"{level}").replace(/\{x\}/gi,"{col}").replace(/\{y\}/gi,"{row}"),e=(0,m.Fv)(e)),t.templateUrl=e}},{key:"fetchTile",value:function(e,t,r){var l=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).signal,n=this.getTileUrl(e,t,r),o={responseType:"image",signal:l,query:(0,i.Z)({},this.refreshParameters)};return(0,y.default)(n,o).then((function(e){return e.data}))}},{key:"fetchImageBitmapTile",value:function(){var e=(0,o.Z)((0,n.Z)().mark((function e(t,r,o){var a,s,u,p,c,v,d,h=arguments;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(a=h.length>3&&void 0!==h[3]?h[3]:{}).signal,this.fetchTile===l.prototype.fetchTile){e.next=13;break}return e.next=5,this.fetchTile(t,r,o,a);case 5:return u=e.sent,e.prev=6,e.abrupt("return",createImageBitmap(u));case 10:throw e.prev=10,e.t0=e.catch(6),new f.Z("request:server","Unable to load tile ".concat(t,"/").concat(r,"/").concat(o),{error:e.t0,level:t,row:r,col:o});case 13:return p=this.getTileUrl(t,r,o),c={responseType:"blob",signal:s,query:(0,i.Z)({},this.refreshParameters)},e.next=17,(0,y.default)(p,c);case 17:return v=e.sent,d=v.data,e.abrupt("return",(0,x.g)(d,p));case 20:case"end":return e.stop()}}),e,this,[[6,10]])})));return function(t,r,l){return e.apply(this,arguments)}}()},{key:"getTileUrl",value:function(e,t,r){var l=this.levelValues,n=this.tileServers,o=this.urlPath;if(!l||!n||!o)return"";var a=l[e];return n[t%n.length]+(0,h.gx)(o,{level:a,z:a,col:r,x:r,row:t,y:t})}}]),r}((0,_.h)((0,j.Q)((0,k.M)((0,C.q)((0,R.I)((0,d.R)(T.Z)))))));(0,v._)([(0,w.Cb)({type:String,value:"",json:{write:!0}})],W.prototype,"copyright",void 0),(0,v._)([(0,w.Cb)({type:U.Z,json:{write:!0},nonNullable:!0})],W.prototype,"fullExtent",void 0),(0,v._)([(0,w.Cb)({readOnly:!0,json:{read:!1,write:!1}})],W.prototype,"legendEnabled",void 0),(0,v._)([(0,w.Cb)({type:["show","hide"]})],W.prototype,"listMode",void 0),(0,v._)([(0,w.Cb)({json:{read:!0,write:!0}})],W.prototype,"blendMode",void 0),(0,v._)([(0,w.Cb)()],W.prototype,"levelValues",null),(0,v._)([(0,w.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],W.prototype,"isReference",void 0),(0,v._)([(0,w.Cb)({type:["WebTiledLayer"],value:"WebTiledLayer"})],W.prototype,"operationalLayerType",void 0),(0,v._)([(0,w.Cb)({readOnly:!0,json:{read:!1,write:!1}})],W.prototype,"popupEnabled",void 0),(0,v._)([(0,w.Cb)({type:M.Z})],W.prototype,"spatialReference",void 0),(0,v._)([(0,b.r)("spatialReference",["spatialReference","fullExtent.spatialReference"])],W.prototype,"readSpatialReference",null),(0,v._)([(0,w.Cb)({type:[String],json:{write:!0}})],W.prototype,"subDomains",void 0),(0,v._)([(0,w.Cb)({type:I.Z,json:{write:!0}})],W.prototype,"tileInfo",void 0),(0,v._)([(0,w.Cb)({readOnly:!0})],W.prototype,"tileServers",null),(0,v._)([(0,w.Cb)({json:{read:!1}})],W.prototype,"type",void 0),(0,v._)([(0,w.Cb)()],W.prototype,"urlPath",null),(0,v._)([(0,w.Cb)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],W.prototype,"urlTemplate",void 0),(0,v._)([(0,b.r)("urlTemplate",["urlTemplate","templateUrl"])],W.prototype,"readUrlTemplate",null),(0,v._)([(0,g.c)("urlTemplate",{templateUrl:{type:String}})],W.prototype,"writeUrlTemplate",null),(0,v._)([(0,w.Cb)({type:P.B,json:{write:!0}})],W.prototype,"wmtsInfo",void 0);var D=W=l=(0,v._)([(0,Z.j)("esri.layers.WebTileLayer")],W)},4961:function(e,t,r){r.d(t,{B:function(){return y}});var l,n=r(15671),o=r(43144),a=r(60136),i=r(29388),s=r(27366),u=r(46784),p=r(84652),c=r(49861),v=(r(25243),r(69912)),y=l=function(e){(0,a.Z)(r,e);var t=(0,i.Z)(r);function r(e){return(0,n.Z)(this,r),t.call(this,e)}return(0,o.Z)(r,[{key:"clone",value:function(){return new l({customLayerParameters:(0,p.d9)(this.customLayerParameters),customParameters:(0,p.d9)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}}]),r}(u.wq);(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),(0,s._)([(0,c.Cb)({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),(0,s._)([(0,c.Cb)({type:String,json:{write:!0}})],y.prototype,"url",void 0),y=l=(0,s._)([(0,v.j)("esri.layer.support.WMTSLayerInfo")],y)},83690:function(e,t,r){r.d(t,{g:function(){return a}});var l=r(74165),n=r(15861),o=r(10064);function a(e,t){return i.apply(this,arguments)}function i(){return i=(0,n.Z)((0,l.Z)().mark((function e(t,r){return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,createImageBitmap(t);case 3:return e.abrupt("return",e.sent);case 6:throw e.prev=6,e.t0=e.catch(0),new o.Z("request:server","Unable to load ".concat(r),{url:r,error:e.t0});case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),i.apply(this,arguments)}}}]);
//# sourceMappingURL=9200.6c550c1c.chunk.js.map