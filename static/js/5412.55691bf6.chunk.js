"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[5412],{4582:function(e,t,r){function n(){var e=new Float32Array(4);return e[3]=1,e}function o(e){var t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}r.d(t,{b:function(){return o},c:function(){return n}});Object.freeze(Object.defineProperty({__proto__:null,clone:o,create:n,createView:function(e,t){return new Float32Array(e,t,4)},fromValues:function(e,t,r,n){var o=new Float32Array(4);return o[0]=e,o[1]=t,o[2]=r,o[3]=n,o}},Symbol.toStringTag,{value:"Module"}))},8229:function(e,t,r){function n(){return new Float32Array(3)}function o(e){var t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function i(e,t,r){var n=new Float32Array(3);return n[0]=e,n[1]=t,n[2]=r,n}function a(){return n()}function u(){return i(1,1,1)}function c(){return i(1,0,0)}function f(){return i(0,1,0)}function s(){return i(0,0,1)}r.d(t,{b:function(){return o},c:function(){return n},f:function(){return i}});var l=a(),d=u(),y=c(),g=f(),w=s();Object.freeze(Object.defineProperty({__proto__:null,ONES:d,UNIT_X:y,UNIT_Y:g,UNIT_Z:w,ZEROS:l,clone:o,create:n,createView:function(e,t){return new Float32Array(e,t,3)},fromValues:i,ones:u,unitX:c,unitY:f,unitZ:s,zeros:a},Symbol.toStringTag,{value:"Module"}))},28278:function(e,t,r){r.d(t,{I_:function(){return g},W7:function(){return b},qM:function(){return O}});var n=r(1413),o=r(37762),i=r(10064),a=r(84652),u=r(32718),c=r(2821),f=r(4760),s=u.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function l(e,t,r){for(var n="",o=0;o<r;){var a=e[t+o];if(a<128)n+=String.fromCharCode(a),o++;else if(a>=192&&a<224){if(o+1>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");var u=(31&a)<<6|63&e[t+o+1];n+=String.fromCharCode(u),o+=2}else if(a>=224&&a<240){if(o+2>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var c=(15&a)<<12|(63&e[t+o+1])<<6|63&e[t+o+2];n+=String.fromCharCode(c),o+=3}else{if(!(a>=240&&a<248))throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");if(o+3>=r)throw new i.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");var f=(7&a)<<18|(63&e[t+o+1])<<12|(63&e[t+o+2])<<6|63&e[t+o+3];if(f>=65536){var s=55296+(f-65536>>10),l=56320+(1023&f);n+=String.fromCharCode(s,l)}else n+=String.fromCharCode(f);o+=4}}return n}function d(e,t){for(var r={byteOffset:0,byteCount:0,fields:Object.create(null)},n=0,o=0;o<t.length;o++){var i=t[o],a=i.valueType||i.type,u=A[a];r.fields[i.property]=u(e,n),n+=h[a].BYTES_PER_ELEMENT}return r.byteCount=n,r}function y(e,t,r){var n,o,a=[],u=0;for(o=0;o<e;o+=1){if((n=t[o])>0){if(a.push(l(r,u,n-1)),0!==r[u+n-1])throw new i.Z("string-array-error","Invalid string array: missing null termination.")}else a.push(null);u+=n}return a}function g(e,t){return new(0,h[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function w(e,t,r){for(var n=null!=t.header?d(e,t.header):{byteOffset:0,byteCount:0,fields:{count:r}},o={header:n,byteOffset:n.byteCount,byteCount:0,entries:Object.create(null)},u=n.byteCount,c=0;c<t.ordering.length;c++){var f,s,l=t.ordering[c],y=(0,a.d9)(t[l]);if(y.count=null!==(f=n.fields.count)&&void 0!==f?f:0,"String"===y.valueType){if(y.byteOffset=u,y.byteCount=n.fields[l+"ByteCount"],"UTF-8"!==y.encoding)throw new i.Z("unsupported-encoding","Unsupported String encoding.",{encoding:y.encoding});if(y.timeEncoding&&"ECMA_ISO8601"!==y.timeEncoding)throw new i.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:y.timeEncoding})}else{if(!T(y.valueType))throw new i.Z("unsupported-value-type","Unsupported binary valueType",{valueType:y.valueType});var g=U(y.valueType);u+=u%g!=0?g-u%g:0,y.byteOffset=u,y.byteCount=g*y.valuesPerElement*y.count}u+=null!==(s=y.byteCount)&&void 0!==s?s:0,o.entries[l]=y}return o.byteCount=u-o.byteOffset,o}function v(e,t,r){if(t!==e&&s.error("Invalid ".concat(r," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new i.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function b(e,t){var r,i=d(e,t&&t.header),a=i.byteCount,u={isDraco:!1,header:i,byteOffset:i.byteCount,byteCount:0,vertexAttributes:{}},c=i.fields,f=null!=c.vertexCount?c.vertexCount:c.count,s=(0,o.Z)(t.ordering);try{for(s.s();!(r=s.n()).done;){var l=r.value;if(t.vertexAttributes[l]){var y=(0,n.Z)((0,n.Z)({},t.vertexAttributes[l]),{},{byteOffset:a,count:f}),g=p[l]?p[l]:"_"+l;u.vertexAttributes[g]=y,a+=U(y.valueType)*y.valuesPerElement*f}}}catch(L){s.e(L)}finally{s.f()}var w=c.faceCount;if(t.faces&&w){u.faces={};var b,O=(0,o.Z)(t.ordering);try{for(O.s();!(b=O.n()).done;){var h=b.value;if(t.faces[h]){var A=(0,n.Z)((0,n.Z)({},t.faces[h]),{},{byteOffset:a,count:w});u.faces[h]=A,a+=U(A.valueType)*A.valuesPerElement*w}}}catch(L){O.e(L)}finally{O.f()}}var T=c.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&T){u.featureAttributes={};var C,m=(0,o.Z)(t.featureAttributeOrder);try{for(m.s();!(C=m.n()).done;){var E=C.value;if(t.featureAttributes[E]){var I=(0,n.Z)((0,n.Z)({},t.featureAttributes[E]),{},{byteOffset:a,count:T});u.featureAttributes[E]=I,a+=("UInt64"===I.valueType?8:U(I.valueType))*I.valuesPerElement*T}}}catch(L){m.e(L)}finally{m.f()}}return v(a,e.byteLength,"geometry"),u.byteCount=a-u.byteOffset,u}var p={position:f.T.POSITION,normal:f.T.NORMAL,color:f.T.COLOR,uv0:f.T.UV0,region:f.T.UVREGION};function O(e,t,r){if("lepcc-rgb"===e.encoding)return(0,c.IT)(t);if("lepcc-intensity"===e.encoding)return(0,c.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new i.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(s.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(s.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");var n=w(t,e,r);v(n.byteOffset+n.byteCount,t.byteLength,"attribute");var o=n.entries.attributeValues||n.entries.objectIds;if(o){if("String"===o.valueType){var a=n.entries.attributeByteCounts,u=g(t,a),f=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,o);return o.timeEncoding?function(e,t,r){return y(e,t,r).map((function(e){var t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(a.count,u,f):y(a.count,u,f)}return g(t,o)}throw new i.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}var h={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:function(e,t){return new DataView(e,0).getFloat32(t,!0)},Float64:function(e,t){return new DataView(e,0).getFloat64(t,!0)},UInt8:function(e,t){return new DataView(e,0).getUint8(t)},Int8:function(e,t){return new DataView(e,0).getInt8(t)},UInt16:function(e,t){return new DataView(e,0).getUint16(t,!0)},Int16:function(e,t){return new DataView(e,0).getInt16(t,!0)},UInt32:function(e,t){return new DataView(e,0).getUint32(t,!0)},Int32:function(e,t){return new DataView(e,0).getInt32(t,!0)}};function T(e){return h.hasOwnProperty(e)}function U(e){return T(e)?h[e].BYTES_PER_ELEMENT:0}},2821:function(e,t,r){r.d(t,{Gi:function(){return f},IT:function(){return g},ti:function(){return b}});var n=r(10064),o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function a(e,t,r){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,r+i.identifierOffset,i.identifierLength)),version:t.getUint16(r+i.versionOffset,o),checksum:t.getUint32(r+i.checksumOffset,o)}}var u={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(e,t){return{sizeLo:e.getUint32(t+u.sizeLo,o),sizeHi:e.getUint32(t+u.sizeHi,o),minX:e.getFloat64(t+u.minX,o),minY:e.getFloat64(t+u.minY,o),minZ:e.getFloat64(t+u.minZ,o),maxX:e.getFloat64(t+u.maxX,o),maxY:e.getFloat64(t+u.maxY,o),maxZ:e.getFloat64(t+u.maxZ,o),errorX:e.getFloat64(t+u.errorX,o),errorY:e.getFloat64(t+u.errorY,o),errorZ:e.getFloat64(t+u.errorZ,o),count:e.getUint32(t+u.count,o),reserved:e.getUint32(t+u.reserved,o)}}function f(e){var t=new DataView(e,0),r=0,o=a(e,t,r),f=o.identifier,l=o.version;if(r+=i.byteCount,"LEPCC     "!==f)throw new n.Z("lepcc-decode-error","Bad identifier");if(l>1)throw new n.Z("lepcc-decode-error","Unknown version");var d=c(t,r);if(r+=u.byteCount,d.sizeHi*Math.pow(2,32)+d.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var y=new Float64Array(3*d.count),g=[],w=[],v=[],b=[];if(r=s(e,r,g),r=s(e,r,w),r=s(e,r,v),(r=s(e,r,b))!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad length");for(var p=0,O=0,h=0;h<g.length;h++){O+=g[h];for(var A=0,T=0;T<w[h];T++){A+=v[p];var U=b[p];y[3*p]=Math.min(d.maxX,d.minX+2*d.errorX*A),y[3*p+1]=Math.min(d.maxY,d.minY+2*d.errorY*O),y[3*p+2]=Math.min(d.maxZ,d.minZ+2*d.errorZ*U),p++}}return{errorX:d.errorX,errorY:d.errorY,errorZ:d.errorZ,result:y}}function s(e,t,r){var n=[];t=l(e,t,n);for(var o=[],i=0;i<n.length;i++){o.length=0,t=l(e,t,o);for(var a=0;a<o.length;a++)r.push(o[a]+n[i])}return t}function l(e,t,r){var i=new DataView(e,t),a=i.getUint8(0),u=31&a,c=!!(32&a),f=(192&a)>>6,s=0;if(0===f)s=i.getUint32(1,o),t+=5;else if(1===f)s=i.getUint16(1,o),t+=3;else{if(2!==f)throw new n.Z("lepcc-decode-error","Bad count type");s=i.getUint8(1),t+=2}if(c)throw new n.Z("lepcc-decode-error","LUT not implemented");for(var l=Math.ceil(s*u/8),d=new Uint8Array(e,t,l),y=0,g=0,w=0,v=-1>>>32-u,b=0;b<s;b++){for(;g<u;)y|=d[w]<<g,g+=8,w+=1;r[b]=y&v,y>>>=u,(g-=u)+u>32&&(y|=d[w-1]>>8-g)}return t+w}var d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function y(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function g(e){var t=new DataView(e,0),r=0,o=a(e,t,r),u=o.identifier,c=o.version;if(r+=i.byteCount,"ClusterRGB"!==u)throw new n.Z("lepcc-decode-error","Bad identifier");if(c>1)throw new n.Z("lepcc-decode-error","Unknown version");var f=y(t,r);if(r+=d.byteCount,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");if((2===f.lookupMethod||1===f.lookupMethod)&&0===f.compressionMethod){if(3*f.colorMapCount+f.count+r!==e.byteLength||f.colorMapCount>256)throw new n.Z("lepcc-decode-error","Bad count");for(var s=new Uint8Array(e,r,3*f.colorMapCount),l=new Uint8Array(e,r+3*f.colorMapCount,f.count),g=new Uint8Array(3*f.count),w=0;w<f.count;w++){var v=l[w];g[3*w]=s[3*v],g[3*w+1]=s[3*v+1],g[3*w+2]=s[3*v+2]}return g}if(0===f.lookupMethod&&0===f.compressionMethod){if(3*f.count+r!==e.byteLength||0!==f.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,r).slice()}if(f.lookupMethod<=2&&1===f.compressionMethod){if(r+3!==e.byteLength||1!==f.colorMapCount)throw new n.Z("lepcc-decode-error","Bad count");for(var b=t.getUint8(r),p=t.getUint8(r+1),O=t.getUint8(r+2),h=new Uint8Array(3*f.count),A=0;A<f.count;A++)h[3*A]=b,h[3*A+1]=p,h[3*A+2]=O;return h}throw new n.Z("lepcc-decode-error","Bad method "+f.lookupMethod+","+f.compressionMethod)}var w={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function v(e,t){return{sizeLo:e.getUint32(t+w.sizeLo,o),sizeHi:e.getUint32(t+w.sizeHi,o),count:e.getUint32(t+w.count,o),scaleFactor:e.getUint16(t+w.scaleFactor,o),bitsPerPoint:e.getUint8(t+w.bitsPerPoint),reserved:e.getUint8(t+w.reserved)}}function b(e){var t=new DataView(e,0),r=0,o=a(e,t,r),u=o.identifier,c=o.version;if(r+=i.byteCount,"Intensity "!==u)throw new n.Z("lepcc-decode-error","Bad identifier");if(c>1)throw new n.Z("lepcc-decode-error","Unknown version");var f=v(t,r);if(r+=w.byteCount,f.sizeHi*Math.pow(2,32)+f.sizeLo!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");var s=new Uint16Array(f.count);if(8===f.bitsPerPoint){if(f.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var d=new Uint8Array(e,r,f.count),y=0;y<f.count;y++)s[y]=d[y]*f.scaleFactor}else if(16===f.bitsPerPoint){if(2*f.count+r!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var g=new Uint16Array(e,r,f.count),b=0;b<f.count;b++)s[b]=g[b]*f.scaleFactor}else{var p=[];if(l(e,r,p)!==e.byteLength)throw new n.Z("lepcc-decode-error","Bad size");for(var O=0;O<f.count;O++)s[O]=p[O]*f.scaleFactor}return s}},4760:function(e,t,r){var n;r.d(t,{T:function(){return n}}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(n||(n={}))}}]);
//# sourceMappingURL=5412.55691bf6.chunk.js.map