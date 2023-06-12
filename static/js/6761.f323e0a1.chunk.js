"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[6761],{6761:function(e,n,t){t.r(n),t.d(n,{destroyContext:function(){return C},dracoDecompressPointCloudData:function(){return v},filterObbsForModifications:function(){return L},filterObbsForModificationsSync:function(){return T},initialize:function(){return S},interpretObbModificationResults:function(){return R},process:function(){return w},setLegacySchema:function(){return I},setModifications:function(){return x},setModificationsSync:function(){return F},test:function(){return N}});var r,o,i=t(74165),a=t(15861),u=t(92026);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(r||(r={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(o||(o={}));var s,f=t(65905);function c(e){return(0,f.V)("esri/libs/i3s/".concat(e))}var l,d,p,h,y;t(23470);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(l||(l={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(d||(d={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(p||(p={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(h||(h={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(y||(y={}));var b,m;function w(e){return E.apply(this,arguments)}function E(){return E=(0,a.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return t=[n.geometryBuffer],e.abrupt("return",{result:P(n,t),transferList:t});case 4:case"end":return e.stop()}}),e)}))),E.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=(0,a.Z)((0,i.Z)().mark((function e(n){var t,r,o,a,u,s,f,c,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:if(r=[n.geometryBuffer],o=n.geometryBuffer,a=o.byteLength,u=m._malloc(a),(s=new Uint8Array(m.HEAPU8.buffer,u,a)).set(new Uint8Array(o)),f=m.dracoDecompressPointCloudData(u,s.byteLength),m._free(u),!(f.error.length>0)){e.next=7;break}throw new Error("i3s.wasm: ".concat(f.error));case 7:return c=(null===(t=f.featureIds)||void 0===t?void 0:t.length)>0?f.featureIds.slice():null,l=f.positions.slice(),e.abrupt("return",(c&&r.push(c.buffer),r.push(l.buffer),{result:{positions:l,featureIds:c},transferList:r}));case 9:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function L(e){return U.apply(this,arguments)}function U(){return U=(0,a.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return T(n),t={buffer:n.buffer},e.abrupt("return",{result:t,transferList:[t.buffer]});case 5:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}function x(e){return A.apply(this,arguments)}function A(){return(A=(0,a.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:F(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)((0,i.Z)().mark((function e(n){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:m.setLegacySchema(n.context,n.jsonSchema);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){M(e)}function F(e){for(var n=e.modifications,t=m._malloc(8*n.length),r=new Float64Array(m.HEAPU8.buffer,t,n.length),o=0;o<n.length;++o)r[o]=n[o];m.setModifications(e.context,t,n.length,e.isGeodetic),m._free(t)}function P(e,n){if(!m)return null;var t=e.context,o=e.localOrigin,i=e.globalTrafo,a=e.mbs,s=e.obb,f=e.elevationOffset,c=e.geometryBuffer,l=e.geometryDescriptor,d=e.indexToVertexProjector,p=e.vertexToRenderProjector,h=m._malloc(c.byteLength),y=m._malloc(33*Float64Array.BYTES_PER_ELEMENT),b=new Uint8Array(m.HEAPU8.buffer,h,c.byteLength);b.set(new Uint8Array(c));var w=new Float64Array(m.HEAPU8.buffer,y,33);k(w,o);var E=w.byteOffset+3*w.BYTES_PER_ELEMENT,v=new Float64Array(w.buffer,E);k(v,i),E+=16*w.BYTES_PER_ELEMENT,k(v=new Float64Array(w.buffer,E),a),E+=4*w.BYTES_PER_ELEMENT,(0,u.pC)(s)&&(k(v=new Float64Array(w.buffer,E),s.center),E+=3*w.BYTES_PER_ELEMENT,k(v=new Float64Array(w.buffer,E),s.halfSize),E+=3*w.BYTES_PER_ELEMENT,k(v=new Float64Array(w.buffer,E),s.quaternion));var g=l,L={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:g.featureIndex},U=m.process(t,!!e.obb,h,b.byteLength,g,L,y,f,d,p,e.normalReferenceFrame);if(m._free(y),m._free(h),U.error.length>0)throw new Error("i3s.wasm: ".concat(U.error));if(U.discarded)return null;var x=U.componentOffsets.length>0?U.componentOffsets.slice():null,A=U.featureIds.length>0?U.featureIds.slice():null,I=U.interleavedVertedData.slice().buffer,_=U.indicesType===r.Int16?new Uint16Array(U.indices.buffer,U.indices.byteOffset,U.indices.byteLength/2).slice():new Uint32Array(U.indices.buffer,U.indices.byteOffset,U.indices.byteLength/4).slice(),C=U.positions.slice(),F=U.positionIndicesType===r.Int16?new Uint16Array(U.positionIndices.buffer,U.positionIndices.byteOffset,U.positionIndices.byteLength/2).slice():new Uint32Array(U.positionIndices.buffer,U.positionIndices.byteOffset,U.positionIndices.byteLength/4).slice(),P={layout:e.layouts[0],interleavedVertexData:I,indices:_,hasColors:U.hasColors,hasModifications:U.hasModifications,positionData:{data:C,indices:F}};return A&&n.push(A.buffer),x&&n.push(x.buffer),n.push(I),n.push(_.buffer),n.push(C.buffer),n.push(F.buffer),{componentOffsets:x,featureIds:A,transformedGeometry:P,obb:U.obb}}function R(e){return 0===e?d.Unmodified:1===e?d.PotentiallyModified:2===e?d.Culled:d.Unknown}function T(e){var n=e.context,t=e.buffer,r=m._malloc(t.byteLength),o=t.byteLength/Float64Array.BYTES_PER_ELEMENT,i=new Float64Array(m.HEAPU8.buffer,r,o),a=new Float64Array(t);i.set(a),m.filterOBBs(n,r,o),a.set(i),m._free(r)}function M(e){m&&m.destroy(e)}function k(e,n){for(var t=0;t<n.length;++t)e[t]=n[t]}function S(){return m?Promise.resolve():(b||(b=(s||(s=new Promise((function(e){return t.e(7552).then(t.bind(t,57552)).then((function(e){return e.i})).then((function(n){var t=(0,n.default)({locateFile:c,onRuntimeInitialized:function(){return e(t)}});delete t.then}))})).catch((function(e){throw e}))),s).then((function(e){m=e,b=null}))),b)}var N={transform:P,destroy:M}}}]);
//# sourceMappingURL=6761.f323e0a1.chunk.js.map