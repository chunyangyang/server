!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ImgProcess=e():t.ImgProcess=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=18)}([function(t,e,r){"use strict";var n=r(4);t.exports=function(t){if(!n(t))throw new TypeError("Cannot use null or undefined");return t}},function(t,e,r){"use strict";t.exports=function(t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}},function(t,e,r){"use strict";t.exports=r(39)()?Symbol:r(40)},function(t,e,r){"use strict";var n=r(8),o=r(16),i=r(35),c=r(9);(t.exports=function(t,e){var r,i,s,u,a;return arguments.length<2||"string"!=typeof t?(u=e,e=t,t=null):u=arguments[2],null==t?(r=s=!0,i=!1):(r=c.call(t,"c"),i=c.call(t,"e"),s=c.call(t,"w")),a={value:e,configurable:r,enumerable:i,writable:s},u?n(o(u),a):a}).gs=function(t,e,r){var s,u,a,l;return"string"!=typeof t?(a=r,r=e,e=t,t=null):a=arguments[3],null==e?e=void 0:i(e)?null==r?r=void 0:i(r)||(a=r,r=void 0):(a=e,e=r=void 0),null==t?(s=!0,u=!1):(s=c.call(t,"c"),u=c.call(t,"e")),l={get:e,set:r,configurable:s,enumerable:u},a?n(o(a),l):l}},function(t,e,r){"use strict";var n=r(12)();t.exports=function(t){return t!==n&&null!==t}},function(t,e,r){"use strict";t.exports=r(14)()?Object.setPrototypeOf:r(15)},function(t,e,r){"use strict";var n=Object.prototype.toString,o=n.call(function(){return arguments}());t.exports=function(t){return n.call(t)===o}},function(t,e,r){"use strict";var n=Object.prototype.toString,o=n.call("");t.exports=function(t){return"string"==typeof t||t&&"object"==typeof t&&(t instanceof String||n.call(t)===o)||!1}},function(t,e,r){"use strict";t.exports=r(30)()?Object.assign:r(31)},function(t,e,r){"use strict";t.exports=r(36)()?String.prototype.contains:r(37)},function(t,e,r){"use strict";var n,o=r(11),i=r(8),c=r(1),s=r(0),u=r(3),a=r(47),l=r(2),_=Object.defineProperty,f=Object.defineProperties;t.exports=n=function(t,e){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");f(this,{__list__:u("w",s(t)),__context__:u("w",e),__nextIndex__:u("w",0)}),e&&(c(e.on),e.on("_add",this._onAdd),e.on("_delete",this._onDelete),e.on("_clear",this._onClear))},delete n.prototype.constructor,f(n.prototype,i({_next:u(function(){var t;if(this.__list__)return this.__redo__&&void 0!==(t=this.__redo__.shift())?t:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()}),next:u(function(){return this._createResult(this._next())}),_createResult:u(function(t){return void 0===t?{done:!0,value:void 0}:{done:!1,value:this._resolve(t)}}),_resolve:u(function(t){return this.__list__[t]}),_unBind:u(function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd),this.__context__.off("_delete",this._onDelete),this.__context__.off("_clear",this._onClear),this.__context__=null)}),toString:u(function(){return"[object "+(this[l.toStringTag]||"Object")+"]"})},a({_onAdd:u(function(t){t>=this.__nextIndex__||(++this.__nextIndex__,this.__redo__?(this.__redo__.forEach(function(e,r){e>=t&&(this.__redo__[r]=++e)},this),this.__redo__.push(t)):_(this,"__redo__",u("c",[t])))}),_onDelete:u(function(t){var e;t>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(-1!==(e=this.__redo__.indexOf(t))&&this.__redo__.splice(e,1),this.__redo__.forEach(function(e,r){e>t&&(this.__redo__[r]=--e)},this)))}),_onClear:u(function(){this.__redo__&&o.call(this.__redo__),this.__nextIndex__=0})}))),_(n.prototype,l.iterator,u(function(){return this}))},function(t,e,r){"use strict";var n=r(0);t.exports=function(){return n(this).length=0,this}},function(t,e,r){"use strict";t.exports=function(){}},function(t,e,r){"use strict";var n=r(24),o=Math.max;t.exports=function(t){return o(0,n(t))}},function(t,e,r){"use strict";var n=Object.create,o=Object.getPrototypeOf,i={};t.exports=function(){var t=Object.setPrototypeOf,e=arguments[0]||n;return"function"==typeof t&&o(t(e(null),i))===i}},function(t,e,r){"use strict";var n,o=r(28),i=r(0),c=Object.prototype.isPrototypeOf,s=Object.defineProperty,u={configurable:!0,enumerable:!1,writable:!0,value:void 0};n=function(t,e){if(i(t),null===e||o(e))return t;throw new TypeError("Prototype must be null or an object")},t.exports=function(t){var e,r;return t?(2===t.level?t.set?(r=t.set,e=function(t,e){return r.call(n(t,e),e),t}):e=function(t,e){return n(t,e).__proto__=e,t}:e=function t(e,r){var o;return n(e,r),(o=c.call(t.nullPolyfill,e))&&delete t.nullPolyfill.__proto__,null===r&&(r=t.nullPolyfill),e.__proto__=r,o&&s(t.nullPolyfill,"__proto__",u),e},Object.defineProperty(e,"level",{configurable:!1,enumerable:!1,writable:!1,value:t.level})):null}(function(){var t,e=Object.create(null),r={},n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");if(n){try{(t=n.set).call(e,r)}catch(t){}if(Object.getPrototypeOf(e)===r)return{set:t,level:2}}return e.__proto__=r,Object.getPrototypeOf(e)===r?{level:2}:(e={},e.__proto__=r,Object.getPrototypeOf(e)===r&&{level:1})}()),r(29)},function(t,e,r){"use strict";var n=r(4),o=Array.prototype.forEach,i=Object.create;t.exports=function(t){var e=i(null);return o.call(arguments,function(t){n(t)&&function(t,e){var r;for(r in t)e[r]=t[r]}(Object(t),e)}),e}},function(t,e,r){"use strict";var n=r(43);t.exports=function(t){if(!n(t))throw new TypeError(t+" is not iterable");return t}},function(t,e,r){window.Set=r(19)},function(t,e,r){"use strict";var n,o,i,c=r(11),s=r(20),u=r(5),a=r(1),l=r(3),_=r(38),f=r(2),p=r(17),h=r(44),y=r(57),v=r(58),b=Function.prototype.call,d=Object.defineProperty,x=Object.getPrototypeOf;v&&(i=Set),t.exports=n=function(){var t,e=arguments[0];if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");return t=v&&u?u(new i,x(this)):this,null!=e&&p(e),d(t,"__setData__",l("c",[])),e?(h(e,function(t){-1===s.call(this,t)&&this.push(t)},t.__setData__),t):t},v&&(u&&u(n,i),n.prototype=Object.create(i.prototype,{constructor:l(n)})),_(Object.defineProperties(n.prototype,{add:l(function(t){return this.has(t)?this:(this.emit("_add",this.__setData__.push(t)-1,t),this)}),clear:l(function(){this.__setData__.length&&(c.call(this.__setData__),this.emit("_clear"))}),delete:l(function(t){var e=s.call(this.__setData__,t);return-1!==e&&(this.__setData__.splice(e,1),this.emit("_delete",e,t),!0)}),entries:l(function(){return new y(this,"key+value")}),forEach:l(function(t){var e,r,n,o=arguments[1];for(a(t),r=(e=this.values())._next();void 0!==r;)n=e._resolve(r),b.call(t,o,n,n,this),r=e._next()}),has:l(function(t){return-1!==s.call(this.__setData__,t)}),keys:l(o=function(){return this.values()}),size:l.gs(function(){return this.__setData__.length}),values:l(function(){return new y(this)}),toString:l(function(){return"[object Set]"})})),d(n.prototype,f.iterator,l(o)),d(n.prototype,f.toStringTag,l("c","Set"))},function(t,e,r){"use strict";var n=r(21),o=r(13),i=r(0),c=Array.prototype.indexOf,s=Object.prototype.hasOwnProperty,u=Math.abs,a=Math.floor;t.exports=function(t){var e,r,l,_;if(!n(t))return c.apply(this,arguments);for(r=o(i(this).length),l=arguments[1],e=l=isNaN(l)?0:l>=0?a(l):o(this.length)-a(u(l));e<r;++e)if(s.call(this,e)&&(_=this[e],n(_)))return e;return-1}},function(t,e,r){"use strict";t.exports=r(22)()?Number.isNaN:r(23)},function(t,e,r){"use strict";t.exports=function(){var t=Number.isNaN;return"function"==typeof t&&(!t({})&&t(NaN)&&!t(34))}},function(t,e,r){"use strict";t.exports=function(t){return t!=t}},function(t,e,r){"use strict";var n=r(25),o=Math.abs,i=Math.floor;t.exports=function(t){return isNaN(t)?0:0!==(t=Number(t))&&isFinite(t)?n(t)*i(o(t)):t}},function(t,e,r){"use strict";t.exports=r(26)()?Math.sign:r(27)},function(t,e,r){"use strict";t.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&-1===t(-20))}},function(t,e,r){"use strict";t.exports=function(t){return t=Number(t),isNaN(t)||0===t?t:t>0?1:-1}},function(t,e,r){"use strict";var n=r(4),o={function:!0,object:!0};t.exports=function(t){return n(t)&&o[typeof t]||!1}},function(t,e,r){"use strict";var n,o=Object.create;r(14)()||(n=r(15)),t.exports=function(){var t,e,r;return n?1!==n.level?o:(t={},e={},r={configurable:!1,enumerable:!1,writable:!0,value:void 0},Object.getOwnPropertyNames(Object.prototype).forEach(function(t){e[t]="__proto__"!==t?r:{configurable:!0,enumerable:!1,writable:!0,value:void 0}}),Object.defineProperties(t,e),Object.defineProperty(n,"nullPolyfill",{configurable:!1,enumerable:!1,writable:!1,value:t}),function(e,r){return o(null===e?t:e,r)}):o}()},function(t,e,r){"use strict";t.exports=function(){var t,e=Object.assign;return"function"==typeof e&&(t={foo:"raz"},e(t,{bar:"dwa"},{trzy:"trzy"}),t.foo+t.bar+t.trzy==="razdwatrzy")}},function(t,e,r){"use strict";var n=r(32),o=r(0),i=Math.max;t.exports=function(t,e){var r,c,s,u=i(arguments.length,2);for(t=Object(o(t)),s=function(n){try{t[n]=e[n]}catch(t){r||(r=t)}},c=1;c<u;++c)e=arguments[c],n(e).forEach(s);if(void 0!==r)throw r;return t}},function(t,e,r){"use strict";t.exports=r(33)()?Object.keys:r(34)},function(t,e,r){"use strict";t.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}}},function(t,e,r){"use strict";var n=r(4),o=Object.keys;t.exports=function(t){return o(n(t)?Object(t):t)}},function(t,e,r){"use strict";t.exports=function(t){return"function"==typeof t}},function(t,e,r){"use strict";var n="razdwatrzy";t.exports=function(){return"function"==typeof n.contains&&(!0===n.contains("dwa")&&!1===n.contains("foo"))}},function(t,e,r){"use strict";var n=String.prototype.indexOf;t.exports=function(t){return n.call(this,t,arguments[1])>-1}},function(t,e,r){"use strict";var n,o,i,c,s,u,a,l=r(3),_=r(1),f=Function.prototype.apply,p=Function.prototype.call,h=Object.create,y=Object.defineProperty,v=Object.defineProperties,b=Object.prototype.hasOwnProperty,d={configurable:!0,enumerable:!1,writable:!0};s={on:n=function(t,e){var r;return _(e),b.call(this,"__ee__")?r=this.__ee__:(r=d.value=h(null),y(this,"__ee__",d),d.value=null),r[t]?"object"==typeof r[t]?r[t].push(e):r[t]=[r[t],e]:r[t]=e,this},once:o=function(t,e){var r,o;return _(e),o=this,n.call(this,t,r=function(){i.call(o,t,r),f.call(e,this,arguments)}),r.__eeOnceListener__=e,this},off:i=function(t,e){var r,n,o,i;if(_(e),!b.call(this,"__ee__"))return this;if(!(r=this.__ee__)[t])return this;if("object"==typeof(n=r[t]))for(i=0;o=n[i];++i)o!==e&&o.__eeOnceListener__!==e||(2===n.length?r[t]=n[i?0:1]:n.splice(i,1));else n!==e&&n.__eeOnceListener__!==e||delete r[t];return this},emit:c=function(t){var e,r,n,o,i;if(b.call(this,"__ee__")&&(o=this.__ee__[t]))if("object"==typeof o){for(r=arguments.length,i=new Array(r-1),e=1;e<r;++e)i[e-1]=arguments[e];for(o=o.slice(),e=0;n=o[e];++e)f.call(n,this,i)}else switch(arguments.length){case 1:p.call(o,this);break;case 2:p.call(o,this,arguments[1]);break;case 3:p.call(o,this,arguments[1],arguments[2]);break;default:for(r=arguments.length,i=new Array(r-1),e=1;e<r;++e)i[e-1]=arguments[e];f.call(o,this,i)}}},u={on:l(n),once:l(o),off:l(i),emit:l(c)},a=v({},u),t.exports=e=function(t){return null==t?h(a):v(Object(t),u)},e.methods=s},function(t,e,r){"use strict";var n={object:!0,symbol:!0};t.exports=function(){var t;if("function"!=typeof Symbol)return!1;t=Symbol("test symbol");try{String(t)}catch(t){return!1}return!!n[typeof Symbol.iterator]&&(!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag])}},function(t,e,r){"use strict";var n,o,i,c,s=r(3),u=r(41),a=Object.create,l=Object.defineProperties,_=Object.defineProperty,f=Object.prototype,p=a(null);if("function"==typeof Symbol){n=Symbol;try{String(n()),c=!0}catch(t){}}var h=function(){var t=a(null);return function(e){for(var r,n,o=0;t[e+(o||"")];)++o;return e+=o||"",t[e]=!0,r="@@"+e,_(f,r,s.gs(null,function(t){n||(n=!0,_(this,r,s(t)),n=!1)})),r}}();i=function(t){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return o(t)},t.exports=o=function t(e){var r;if(this instanceof t)throw new TypeError("Symbol is not a constructor");return c?n(e):(r=a(i.prototype),e=void 0===e?"":String(e),l(r,{__description__:s("",e),__name__:s("",h(e))}))},l(o,{for:s(function(t){return p[t]?p[t]:p[t]=o(String(t))}),keyFor:s(function(t){var e;u(t);for(e in p)if(p[e]===t)return e}),hasInstance:s("",n&&n.hasInstance||o("hasInstance")),isConcatSpreadable:s("",n&&n.isConcatSpreadable||o("isConcatSpreadable")),iterator:s("",n&&n.iterator||o("iterator")),match:s("",n&&n.match||o("match")),replace:s("",n&&n.replace||o("replace")),search:s("",n&&n.search||o("search")),species:s("",n&&n.species||o("species")),split:s("",n&&n.split||o("split")),toPrimitive:s("",n&&n.toPrimitive||o("toPrimitive")),toStringTag:s("",n&&n.toStringTag||o("toStringTag")),unscopables:s("",n&&n.unscopables||o("unscopables"))}),l(i.prototype,{constructor:s(o),toString:s("",function(){return this.__name__})}),l(o.prototype,{toString:s(function(){return"Symbol ("+u(this).__description__+")"}),valueOf:s(function(){return u(this)})}),_(o.prototype,o.toPrimitive,s("",function(){var t=u(this);return"symbol"==typeof t?t:t.toString()})),_(o.prototype,o.toStringTag,s("c","Symbol")),_(i.prototype,o.toStringTag,s("c",o.prototype[o.toStringTag])),_(i.prototype,o.toPrimitive,s("c",o.prototype[o.toPrimitive]))},function(t,e,r){"use strict";var n=r(42);t.exports=function(t){if(!n(t))throw new TypeError(t+" is not a symbol");return t}},function(t,e,r){"use strict";t.exports=function(t){return!!t&&("symbol"==typeof t||!!t.constructor&&("Symbol"===t.constructor.name&&"Symbol"===t[t.constructor.toStringTag]))}},function(t,e,r){"use strict";var n=r(6),o=r(4),i=r(7),c=r(2).iterator,s=Array.isArray;t.exports=function(t){return!!o(t)&&(!!s(t)||(!!i(t)||(!!n(t)||"function"==typeof t[c])))}},function(t,e,r){"use strict";var n=r(6),o=r(1),i=r(7),c=r(45),s=Array.isArray,u=Function.prototype.call,a=Array.prototype.some;t.exports=function(t,e){var r,l,_,f,p,h,y,v,b=arguments[2];if(s(t)||n(t)?r="array":i(t)?r="string":t=c(t),o(e),_=function(){f=!0},"array"!==r)if("string"!==r)for(l=t.next();!l.done;){if(u.call(e,b,l.value,_),f)return;l=t.next()}else for(h=t.length,p=0;p<h&&(y=t[p],p+1<h&&(v=y.charCodeAt(0))>=55296&&v<=56319&&(y+=t[++p]),u.call(e,b,y,_),!f);++p);else a.call(t,function(t){return u.call(e,b,t,_),f})}},function(t,e,r){"use strict";var n=r(6),o=r(7),i=r(46),c=r(56),s=r(17),u=r(2).iterator;t.exports=function(t){return"function"==typeof s(t)[u]?t[u]():n(t)?new i(t):o(t)?new c(t):new i(t)}},function(t,e,r){"use strict";var n,o=r(5),i=r(9),c=r(3),s=r(2),u=r(10),a=Object.defineProperty;n=t.exports=function(t,e){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");u.call(this,t),e=e?i.call(e,"key+value")?"key+value":i.call(e,"key")?"key":"value":"value",a(this,"__kind__",c("",e))},o&&o(n,u),delete n.prototype.constructor,n.prototype=Object.create(u.prototype,{_resolve:c(function(t){return"value"===this.__kind__?this.__list__[t]:"key+value"===this.__kind__?[t,this.__list__[t]]:t})}),a(n.prototype,s.toStringTag,c("c","Array Iterator"))},function(t,e,r){"use strict";var n,o=r(48),i=r(16),c=r(1),s=r(53),u=r(1),a=r(0),l=Function.prototype.bind,_=Object.defineProperty,f=Object.prototype.hasOwnProperty;n=function(t,e,r){var n,i=a(e)&&u(e.value);return n=o(e),delete n.writable,delete n.value,n.get=function(){return!r.overwriteDefinition&&f.call(this,t)?i:(e.value=l.call(i,r.resolveContext?r.resolveContext(this):this),_(this,t,e),this[t])},n},t.exports=function(t){var e=i(arguments[1]);return null!=e.resolveContext&&c(e.resolveContext),s(t,function(t,r){return n(r,t,e)})}},function(t,e,r){"use strict";var n=r(49),o=r(8),i=r(0);t.exports=function(t){var e=Object(i(t)),r=arguments[1],c=Object(arguments[2]);if(e!==t&&!r)return e;var s={};return r?n(r,function(e){(c.ensure||e in t)&&(s[e]=t[e])}):o(s,t),s}},function(t,e,r){"use strict";t.exports=r(50)()?Array.from:r(51)},function(t,e,r){"use strict";t.exports=function(){var t,e,r=Array.from;return"function"==typeof r&&(t=["raz","dwa"],e=r(t),Boolean(e&&e!==t&&"dwa"===e[1]))}},function(t,e,r){"use strict";var n=r(2).iterator,o=r(6),i=r(52),c=r(13),s=r(1),u=r(0),a=r(4),l=r(7),_=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},h=Object.defineProperty;t.exports=function(t){var e,r,y,v,b,d,x,g,O,j,w=arguments[1],m=arguments[2];if(t=Object(u(t)),a(w)&&s(w),this&&this!==Array&&i(this))e=this;else{if(!w){if(o(t))return 1!==(b=t.length)?Array.apply(null,t):(v=new Array(1),v[0]=t[0],v);if(_(t)){for(v=new Array(b=t.length),r=0;r<b;++r)v[r]=t[r];return v}}v=[]}if(!_(t))if(void 0!==(O=t[n])){for(x=s(O).call(t),e&&(v=new e),g=x.next(),r=0;!g.done;)j=w?f.call(w,m,g.value,r):g.value,e?(p.value=j,h(v,r,p)):v[r]=j,g=x.next(),++r;b=r}else if(l(t)){for(b=t.length,e&&(v=new e),r=0,y=0;r<b;++r)j=t[r],r+1<b&&(d=j.charCodeAt(0))>=55296&&d<=56319&&(j+=t[++r]),j=w?f.call(w,m,j,y):j,e?(p.value=j,h(v,y,p)):v[y]=j,++y;b=y}if(void 0===b)for(b=c(t.length),e&&(v=new e(b)),r=0;r<b;++r)j=w?f.call(w,m,t[r],r):t[r],e?(p.value=j,h(v,r,p)):v[r]=j;return e&&(p.value=null,v.length=b),v}},function(t,e,r){"use strict";var n=Object.prototype.toString,o=n.call(r(12));t.exports=function(t){return"function"==typeof t&&n.call(t)===o}},function(t,e,r){"use strict";var n=r(1),o=r(54),i=Function.prototype.call;t.exports=function(t,e){var r={},c=arguments[2];return n(e),o(t,function(t,n,o,s){r[n]=i.call(e,c,t,n,o,s)}),r}},function(t,e,r){"use strict";t.exports=r(55)("forEach")},function(t,e,r){"use strict";var n=r(1),o=r(0),i=Function.prototype.bind,c=Function.prototype.call,s=Object.keys,u=Object.prototype.propertyIsEnumerable;t.exports=function(t,e){return function(r,a){var l,_=arguments[2],f=arguments[3];return r=Object(o(r)),n(a),l=s(r),f&&l.sort("function"==typeof f?i.call(f,r):void 0),"function"!=typeof t&&(t=l[t]),c.call(t,l,function(t,n){return u.call(r,t)?c.call(a,_,r[t],t,r,n):e})}}},function(t,e,r){"use strict";var n,o=r(5),i=r(3),c=r(2),s=r(10),u=Object.defineProperty;n=t.exports=function(t){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");t=String(t),s.call(this,t),u(this,"__length__",i("",t.length))},o&&o(n,s),delete n.prototype.constructor,n.prototype=Object.create(s.prototype,{_next:i(function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()}),_resolve:i(function(t){var e,r=this.__list__[t];return this.__nextIndex__===this.__length__?r:(e=r.charCodeAt(0))>=55296&&e<=56319?r+this.__list__[this.__nextIndex__++]:r})}),u(n.prototype,c.toStringTag,i("c","String Iterator"))},function(t,e,r){"use strict";var n,o=r(5),i=r(9),c=r(3),s=r(10),u=r(2).toStringTag,a=Object.defineProperty;n=t.exports=function(t,e){if(!(this instanceof n))return new n(t,e);s.call(this,t.__setData__,t),e=e&&i.call(e,"key+value")?"key+value":"value",a(this,"__kind__",c("",e))},o&&o(n,s),n.prototype=Object.create(s.prototype,{constructor:c(n),_resolve:c(function(t){return"value"===this.__kind__?this.__list__[t]:[this.__list__[t],this.__list__[t]]}),toString:c(function(){return"[object Set Iterator]"})}),a(n.prototype,u,c("c","Set Iterator"))},function(t,e,r){"use strict";t.exports="undefined"!=typeof Set&&"[object Set]"===Object.prototype.toString.call(Set.prototype)}])});