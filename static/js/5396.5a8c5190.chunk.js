"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[5396],{42388:function(e,t,r){r.d(t,{j:function(){return c}});var a=r(15671),i=r(43144),n=r(60136),s=r(29388),o=r(27366),u=r(85015),l=r(41691),p=r(49861),h=(r(25243),r(63780),r(69912)),y={visible:"visibleSublayers"},c=function(e){(0,n.Z)(r,e);var t=(0,s.Z)(r);function r(e){var i;return(0,a.Z)(this,r),(i=t.call(this,e)).scale=0,i}return(0,i.Z)(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(y[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join()}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null===e||void 0===e?void 0:e.sublayers,a=[];return null!==r&&void 0!==r&&r.forEach((function e(r){var i=r.minScale,n=r.maxScale,s=r.sublayers;r.visible&&(0===t||(0===i||t<=i)&&(0===n||t>=n))&&(s?s.forEach(e):a.push(r))})),a}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency?"TRUE":"FALSE",version:e.version,layers:t}}}]),r}((0,l.p)(u.Z));(0,o._)([(0,p.Cb)()],c.prototype,"layer",null),(0,o._)([(0,p.Cb)({readOnly:!0})],c.prototype,"layers",null),(0,o._)([(0,p.Cb)({type:Number})],c.prototype,"scale",void 0),(0,o._)([(0,p.Cb)({readOnly:!0})],c.prototype,"version",null),(0,o._)([(0,p.Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,o._)([(0,h.j)("esri.layers.support.ExportWMSImageParameters")],c)},15396:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var a=r(1413),i=r(74165),n=r(15861),s=r(15671),o=r(43144),u=r(60136),l=r(29388),p=r(27366),h=r(32718),y=r(92026),c=r(66978),m=r(94172),v=r(49861),f=(r(25243),r(63780),r(69912)),d=r(53866),g=r(90110),b=r(95986),x=r(9229),w=r(67581),C=r(13107),k=r(10064),Z=r(45948),S=r(42388),P=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,s.Z)(this,r),(e=t.apply(this,arguments)).bitmapContainer=new g.c,e}return(0,o.Z)(r,[{key:"supportsSpatialReference",value:function(e){return this.layer.serviceSupportsSpatialReference(e)}},{key:"update",value:function(e){var t=this;this.strategy.update(e).catch((function(e){(0,c.D_)(e)||h.Z.getLogger(t.declaredClass).error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,r=t.imageMaxHeight,a=t.imageMaxWidth;this.bitmapContainer=new g.c,this.container.addChild(this.bitmapContainer),this.strategy=new x.Z({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles((0,m.YP)((function(){return e.exportImageVersion}),(function(){return e.requestUpdate()})))}},{key:"detach",value:function(){this.strategy=(0,y.SC)(this.strategy),this.container.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t,r=this.view,a=this.bitmapContainer,i=e.x,n=e.y,s=r.spatialReference,o=0,u=0;if(a.children.some((function(e){var r=e.width,a=e.height,l=e.resolution,p=e.x,h=e.y,y=p+l*r,c=h-l*a;return i>=p&&i<=y&&n<=h&&n>=c&&(t=new d.Z({xmin:p,ymin:c,xmax:y,ymax:h,spatialReference:s}),o=r,u=a,!0)})),!t)return null;var l=t.width/o,p=Math.round((i-t.xmin)/l),h=Math.round((t.ymax-n)/l);return{extent:t,width:o,height:u,x:p,y:h}}},{key:"doRefresh",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.requestUpdate();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,(0,a.Z)({timeExtent:this.timeExtent},i))}}]),r}(function(e){var t=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){return(0,s.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"initialize",value:function(){this.exportImageParameters=new S.j({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters=(0,y.SC)(this.exportImageParameters)}},{key:"exportImageVersion",get:function(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new k.Z("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var r=t.popupEnabled;if(!r)return Promise.reject(new k.Z("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));var a=this.createFetchPopupFeaturesQuery(e);if(!a)return Promise.resolve([]);var i=a.extent,n=a.width,s=a.height,o=a.x,u=a.y;if(!(i&&n&&s))throw new k.Z("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:n,height:s});return t.fetchFeatureInfo(i,n,s,o,u)}}]),r}(e);return(0,p._)([(0,v.Cb)()],t.prototype,"exportImageParameters",void 0),(0,p._)([(0,v.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,p._)([(0,v.Cb)()],t.prototype,"layer",void 0),(0,p._)([(0,v.Cb)(Z.qG)],t.prototype,"timeExtent",void 0),t=(0,p._)([(0,f.j)("esri.layers.mixins.WMSLayerView")],t)}((0,C.Z)((0,b.y)(w.Z))));(0,p._)([(0,v.Cb)()],P.prototype,"strategy",void 0),(0,p._)([(0,v.Cb)()],P.prototype,"updating",void 0);var _=P=(0,p._)([(0,f.j)("esri.views.2d.layers.WMSLayerView2D")],P)}}]);
//# sourceMappingURL=5396.5a8c5190.chunk.js.map