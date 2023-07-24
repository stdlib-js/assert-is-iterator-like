// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isIteratorLike=t()}(this,(function(){"use strict";var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,r){var n,a,y,p;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(e,t)||l.call(e,t)?(n=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=n):e[t]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,t,r.get),p&&f&&f.call(e,t,r.set),e};var a=r;function y(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(e){return"boolean"==typeof e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(e){var t,r,n,o,i;if(null==e)return d.call(e);r=e[_],i=_,t=null!=(o=e)&&v.call(o,i);try{e[_]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[_]=r:delete e[_],n}:function(e){return d.call(e)},m=Boolean.prototype.toString;var w=b();function g(e){return"object"==typeof e&&(e instanceof Boolean||(w?function(e){try{return m.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===j(e)))}function h(e){return p(e)||g(e)}function S(){return new Function("return this;")()}y(h,"isPrimitive",p),y(h,"isObject",g);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof E?E:null;var B=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return S()}if(O)return O;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,x=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var L=/^\s*function\s*([^(]*)/i;y(k,"REGEXP",L);var V=Array.isArray?Array.isArray:function(e){return"[object Array]"===j(e)};function C(e){return null!==e&&"object"==typeof e}function G(e){var t,r,n,o;if(("Object"===(r=j(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=L.exec(n.toString()))return t[1]}return C(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(C,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!V(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(C));var F="function"==typeof e||"object"==typeof x||"function"==typeof P?function(e){return G(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?G(e).toLowerCase():t};return function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)&&function(e){return"function"===F(e)}(e.next)}}));
//# sourceMappingURL=browser.js.map