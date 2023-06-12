"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[3220],{81735:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(15671),i=r(43144),a=r(60136),s=r(29388),o=r(27366),u=r(41691),l=r(49861),c=(r(25243),r(63780),r(69912)),d=function(e){(0,a.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,i.Z)(r,[{key:"initialize",value:function(){}},{key:"destroy",value:function(){}},{key:"supportsTileUpdates",get:function(){return!1}},{key:"spatialReference",get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}}]),r}(u.r);(0,o._)([(0,l.Cb)({readOnly:!0})],d.prototype,"supportsTileUpdates",null),(0,o._)([(0,l.Cb)({constructOnly:!0})],d.prototype,"remoteClient",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],d.prototype,"service",void 0),(0,o._)([(0,l.Cb)()],d.prototype,"spatialReference",null),(0,o._)([(0,l.Cb)({constructOnly:!0})],d.prototype,"tileInfo",void 0),(0,o._)([(0,l.Cb)({constructOnly:!0})],d.prototype,"tileStore",void 0);var p=d=(0,o._)([(0,c.j)("esri.views.2d.layers.features.processors.BaseProcessor")],d)},63220:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(1413),i=r(29439),a=r(37762),s=r(74165),o=r(15861),u=r(60136),l=r(29388),c=r(43144),d=r(15671),p=r(27366),f=(r(93169),r(92026)),y=(r(32718),r(25243),r(63780),r(10064),r(69912)),h=r(48732),v=r(27811),k=r(94109),w=r(81735),Z=r(35092),m=(0,c.Z)((function e(t,r){(0,d.Z)(this,e),this.offset=t,this.extent=r}));function _(e){var t=e.key,r=new Map,n=256,i=k.I_,a=e.tileInfoView.tileInfo.isWrappable;return r.set((0,Z.M)(t,-1,-1,a).id,new m([-i,-i],[i-n,i-n,i,i])),r.set((0,Z.M)(t,0,-1,a).id,new m([0,-i],[0,i-n,i,i])),r.set((0,Z.M)(t,1,-1,a).id,new m([i,-i],[0,i-n,n,i])),r.set((0,Z.M)(t,-1,0,a).id,new m([-i,0],[i-n,0,i,i])),r.set((0,Z.M)(t,1,0,a).id,new m([i,0],[0,0,n,i])),r.set((0,Z.M)(t,-1,1,a).id,new m([-i,i],[i-n,0,i,n])),r.set((0,Z.M)(t,0,1,a).id,new m([0,i],[0,0,i,n])),r.set((0,Z.M)(t,1,1,a).id,new m([i,i],[0,0,n,n])),r}var T=function(e){(0,u.Z)(r,e);var t=(0,l.Z)(r);function r(){var e;return(0,d.Z)(this,r),(e=t.apply(this,arguments)).type="heatmap",e._tileKeyToFeatureSets=new Map,e}return(0,c.Z)(r,[{key:"initialize",value:function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}},{key:"update",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("heatmap"===(n=r.schema.processors[0]).type){e.next=3;break}return e.abrupt("return");case 3:(0,h.Hg)(this._schema,n)&&(t.mesh=!0,this._schema=n);case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onTileUpdate",value:function(e){var t,r=(0,a.Z)(e.removed);try{for(r.s();!(t=r.n()).done;){var n=t.value;this._tileKeyToFeatureSets.delete(n.key.id)}}catch(i){r.e(i)}finally{r.f()}}},{key:"onTileClear",value:function(e){return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:{clear:!0}})}},{key:"onTileMessage",value:function(){var e=(0,o.Z)((0,s.Z)().mark((function e(t,r,a){var o,u,l,c,d,p;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._tileKeyToFeatureSets.has(t.key.id)||this._tileKeyToFeatureSets.set(t.key.id,new Map),(o=this._tileKeyToFeatureSets.get(t.key.id))&&(0,f.pC)(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&o.set(r.addOrUpdate.instance,r),!r.end){e.next=7;break}return u=[],l=_(t),this._tileKeyToFeatureSets.forEach((function(e,r){if(r===t.key.id)e.forEach((function(e){return(0,f.yw)(e.addOrUpdate,(function(e){return u.push(e)}))}));else if(l.has(r)){var n=l.get(r),a=(0,i.Z)(n.offset,2),s=a[0],o=a[1];e.forEach((function(e){return(0,f.yw)(e.addOrUpdate,(function(e){var t=e.transform(s,o,1,1);u.push(t)}))}))}})),c=(0,v.QM)(u,this._schema.mesh,512,512),d={tileKey:t.key.id,intensityInfo:c},p=[c.matrix],e.abrupt("return",this.remoteClient.invoke("tileRenderer.onTileData",d,(0,n.Z)((0,n.Z)({},a),{},{transferList:p})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"onTileError",value:function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}}]),r}(w.Z),b=T=(0,p._)([(0,y.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],T)},35092:function(e,t,r){function n(e,t,r,n){var i=e.clone(),a=1<<i.level,s=i.col+t,o=i.row+r;return n&&s<0?(i.col=s+a,i.world-=1):s>=a?(i.col=s-a,i.world+=1):i.col=s,i.row=o,i}r.d(t,{M:function(){return n}})}}]);
//# sourceMappingURL=3220.550b8b72.chunk.js.map