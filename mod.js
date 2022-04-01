// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(r){return!1}},o=Object.defineProperty,u=Object.prototype,i=u.toString,c=u.__defineGetter__,a=u.__defineSetter__,f=u.__lookupGetter__,l=u.__lookupSetter__;var y=function(r,t,e){var n,o,y,p;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(f.call(r,t)||l.call(r,t)?(n=r.__proto__,r.__proto__=u,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),y="get"in e,p="set"in e,o&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&c&&c.call(r,t,e.get),p&&a&&a.call(r,t,e.set),r},p=o,v=y,b=n()?p:v;var s=function(r,t,e){b(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},_=s;var d=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var m=function(){return j&&"symbol"==typeof Symbol.toStringTag},g=Object.prototype.toString,w=g;var h=function(r){return w.call(r)},O=Object.prototype.hasOwnProperty;var S=function(r,t){return null!=r&&O.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",P=S,A=E,B=g;var T=h,x=function(r){var t,e,n;if(null==r)return B.call(r);e=r[A],t=P(r,A);try{r[A]=void 0}catch(t){return B.call(r)}return n=B.call(r),t?r[A]=e:delete r[A],n},k=m()?x:T,G=Boolean.prototype.toString;var M=k,V=function(r){try{return G.call(r),!0}catch(r){return!1}},C=m();var L=function(r){return"object"==typeof r&&(r instanceof Boolean||(C?V(r):"[object Boolean]"===M(r)))},F=d,R=L;var X=_,z=function(r){return F(r)||R(r)},D=L;X(z,"isPrimitive",d),X(z,"isObject",D);var I="object"==typeof self?self:null,N="object"==typeof window?window:null,U=z.isPrimitive,q=function(){return new Function("return this;")()},H=I,J=N,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!U(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},W=Q(),Y=W.document&&W.document.childNodes,Z=Int8Array,$=t,rr=Y,tr=Z;var er=function(){return"function"==typeof $||"object"==typeof tr||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},or=nr;_(or,"REGEXP",nr());var ur=or,ir=k;var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};var ar=function(r){return null!==r&&"object"==typeof r};_(ar,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!cr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ar));var fr=ar;var lr=k,yr=ur.REGEXP,pr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var vr=function(r){var t,e,n;if(("Object"===(e=lr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=yr.exec(n.toString()))return t[1]}return pr(r)?"Buffer":e},br=vr;var sr=vr;var _r=function(r){var t;return null===r?"null":"object"===(t=typeof r)?br(r).toLowerCase():t},dr=function(r){return sr(r).toLowerCase()},jr=er()?dr:_r;var mr=function(r){return"function"===jr(r)};var gr=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&mr(r.next)};export{gr as default};
//# sourceMappingURL=mod.js.map
