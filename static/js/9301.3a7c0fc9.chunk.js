"use strict";(self.webpackChunkmaptest=self.webpackChunkmaptest||[]).push([[9301],{59301:function(t,e,n){n.r(e),n.d(e,{executeAttachmentQuery:function(){return d},fetchAttachments:function(){return y},processAttachmentQueryResult:function(){return l}});var a=n(74165),r=n(15861),c=n(1413),u=n(37762),o=n(19545),s=n(76200),f=n(35995),i=n(22585),h=n(11812);function p(t){var e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function l(t,e){var n,a={},r=(0,u.Z)(e);try{for(r.s();!(n=r.n()).done;){var c,s=n.value,i=s.parentObjectId,p=s.parentGlobalId,l=s.attachmentInfos,d=(0,u.Z)(l);try{for(d.s();!(c=d.n()).done;){var y=c.value,m=y.id,b=(0,f.qg)((0,o.Dp)("".concat(t.path,"/").concat(i,"/attachments/").concat(m))),I=h.Z.fromJSON(y);I.set({url:b,parentObjectId:i,parentGlobalId:p}),a[i]?a[i].push(I):a[i]=[I]}}catch(Z){d.e(Z)}finally{d.f()}}}catch(Z){r.e(Z)}finally{r.f()}return a}function d(t,e,n){var a={query:(0,i.A)((0,c.Z)((0,c.Z)({},t.query),{},{f:"json"},p(e)))};return n&&(a=(0,c.Z)((0,c.Z)((0,c.Z)({},n),a),{},{query:(0,c.Z)((0,c.Z)({},n.query),a.query)})),(0,s.default)(t.path+"/queryAttachments",a).then((function(t){return t.data.attachmentGroups}))}function y(t,e,n){return m.apply(this,arguments)}function m(){return m=(0,r.Z)((0,a.Z)().mark((function t(e,n,r){var c,o,f,i,h;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.objectIds,o=[],f=(0,u.Z)(c);try{for(f.s();!(i=f.n()).done;)h=i.value,o.push((0,s.default)(e.path+"/"+h+"/attachments",r))}catch(a){f.e(a)}finally{f.f()}return t.abrupt("return",Promise.all(o).then((function(t){return c.map((function(e,n){return{parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos}}))})));case 4:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}}}]);
//# sourceMappingURL=9301.3a7c0fc9.chunk.js.map