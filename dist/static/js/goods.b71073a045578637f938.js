webpackJsonp([1],{"0kEM":function(e,t){},"41h0":function(e,t,r){"use strict";var n=r("o3mh"),o=r("NnZY"),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Array.isArray,s=Array.prototype.push,c=function(e,t){s.apply(e,a(t)?t:[t])},l=Date.prototype.toISOString,u={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,o,i,a,s,l,d,f,p,h,y,m){var v=t;if("function"==typeof l?v=l(r,v):v instanceof Date&&(v=p(v)),null===v){if(i)return s&&!y?s(r,u.encoder,m):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||n.isBuffer(v))return s?[h(y?r:s(r,u.encoder,m))+"="+h(s(v,u.encoder,m))]:[h(r)+"="+h(String(v))];var g,b=[];if(void 0===v)return b;if(Array.isArray(l))g=l;else{var w=Object.keys(v);g=d?w.sort(d):w}for(var j=0;j<g.length;++j){var A=g[j];a&&null===v[A]||(Array.isArray(v)?c(b,e(v[A],o(r,A),o,i,a,s,l,d,f,p,h,y,m)):c(b,e(v[A],r+(f?"."+A:"["+A+"]"),o,i,a,s,l,d,f,p,h,y,m)))}return b};e.exports=function(e,t){var r=e,a=t?n.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===a.delimiter?u.delimiter:a.delimiter,l="boolean"==typeof a.strictNullHandling?a.strictNullHandling:u.strictNullHandling,f="boolean"==typeof a.skipNulls?a.skipNulls:u.skipNulls,p="boolean"==typeof a.encode?a.encode:u.encode,h="function"==typeof a.encoder?a.encoder:u.encoder,y="function"==typeof a.sort?a.sort:null,m=void 0===a.allowDots?u.allowDots:!!a.allowDots,v="function"==typeof a.serializeDate?a.serializeDate:u.serializeDate,g="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:u.encodeValuesOnly,b=a.charset||u.charset;if(void 0!==a.charset&&"utf-8"!==a.charset&&"iso-8859-1"!==a.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===a.format)a.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var w,j,A=o.formatters[a.format];"function"==typeof a.filter?r=(j=a.filter)("",r):Array.isArray(a.filter)&&(w=j=a.filter);var O,x=[];if("object"!=typeof r||null===r)return"";O=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var k=i[O];w||(w=Object.keys(r)),y&&w.sort(y);for(var L=0;L<w.length;++L){var N=w[L];f&&null===r[N]||c(x,d(r[N],N,k,l,f,p?h:null,j,y,m,v,A,g,b))}var D=x.join(s),C=!0===a.addQueryPrefix?"?":"";return a.charsetSentinel&&(C+="iso-8859-1"===b?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),D.length>0?C+D:""}},AeEs:function(e,t){},AnIW:function(e,t){},"Do/K":function(e,t){},HFfA:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("JWK+"),o=(r.n(n),r("pI1A")),i=(r.n(o),r("AeEs")),a=(r.n(i),r("AnIW")),s=(r.n(a),r("d7BR")),c=(r.n(s),r("Do/K")),l=(r.n(c),r("LjF4")),u=(r.n(l),r("7+uW")),d=r("TFhR"),f=r("mtWM"),p=r.n(f),h=r("U/rD"),y=r("ymdt"),m=r.n(y),v=r("gN+L"),g=m.a.parse(location.search.substr(1)).id;new u.default({el:"#app",data:{id:g,details:null,detailTab:["商品详情","本店成交"],tabIndex:0,dealLists:null,bannerLists:null,skuType:1,showSku:!1,skuNum:1,isAddCart:!1,showAddMessage:!1},created:function(){this.getDetails()},methods:{getDetails:function(){var e=this;p.a.get(d.a.details,{id:g}).then(function(t){e.details=t.data.data,e.bannerLists=[],e.details.imgs.forEach(function(t){e.bannerLists.push({clickUrl:"",img:t})})})},changeTab:function(e){this.tabIndex=e,e&&this.getDeal()},getDeal:function(){var e=this;p.a.get(d.a.deal,{id:g}).then(function(t){e.dealLists=t.data.data.lists})},chooseSku:function(e){this.skuType=e,this.showSku=!0},changeSkuNum:function(e){e<0&&1===this.skuNum||(this.skuNum+=e)},addCart:function(){var e=this;p.a.post(d.a.addCart,{id:g,number:this.skuNum}).then(function(t){200===t.data.status&&(e.isAddCart=!0,e.showSku=!1,e.showAddMessage=!0,setTimeout(function(){e.showAddMessage=!1},1e3))})}},components:{Swipe:v.a},watch:{showSku:function(e,t){document.body.style.overflow=e?"hidden":"auto",document.querySelector("html").style.overflow=e?"hidden":"auto",document.body.style.height=e?"100%":"auto",document.querySelector("html").style.height=e?"100%":"auto"}},mixins:[h.a]})},"JWK+":function(e,t){},LjF4:function(e,t){},NnZY:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},TFhR:function(e,t,r){"use strict";var n={hotLists:"/index/hotLists",banner:"/index/banner",topList:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",addCart:"/cart/add",cartLists:"/cart/list",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var o in n)n.hasOwnProperty(o)&&(n[o]=" https://www.easy-mock.com/mock/5c9c3045d172204b3a07ecb0/youzan"+n[o]);t.a=n},"U/rD":function(e,t,r){"use strict";var n={filters:{currency:function(e){var t=""+e;if(t.indexOf(".")>-1){var r=t.split(".");return r[0]+"."+(r[1]+"0").substr(0,2)}return t+".00"}},components:{Foot:r("nq5D").a}};t.a=n},d7BR:function(e,t){},"gN+L":function(e,t,r){"use strict";var n=r("DNVT"),o=(r("v2ns"),{name:"swipe",props:{lists:{type:Array,required:!0},name:{}},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"swiper-container"},[t("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(e){return t("div",{staticClass:"swp-page swiper-slide"},[t("a",{staticClass:"js-no-follow",attrs:{href:e.clickUrl}},[t("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])})),this._v(" "),t("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var a=r("VU/8")(o,i,!1,function(e){r("zY+i")},null,null);t.a=a.exports},nq5D:function(e,t,r){"use strict";var n=r("ymdt"),o=r.n(n),i=[{name:"首页",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],a={data:function(){return{navConfig:i,curIndex:parseInt(o.a.parse(location.search.substr(1)).index)||0}},methods:{changeNav:function(e,t){location.href=e.href+"?index="+t}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bottom-nav"},[r("ul",e._l(e.navConfig,function(t,n){return r("li",{class:{active:n===e.curIndex},on:{click:function(r){e.changeNav(t,n)}}},[r("a",[r("i",{class:t.icon}),r("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]};var c=r("VU/8")(a,s,!1,function(e){r("0kEM")},null,null);t.a=c.exports},o3mh:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:i,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],a=Object.keys(i),s=0;s<a.length;++s){var c=a[s],l=i[c];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:i,prop:c}),r.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r){if(0===e.length)return e;var n="string"==typeof e?e:String(e);if("iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"});for(var i="",a=0;a<n.length;++a){var s=n.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=n.charAt(a):s<128?i+=o[s]:s<2048?i+=o[192|s>>6]+o[128|63&s]:s<55296||s>=57344?i+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(a)),i+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s])}return i},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=i(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e(t[i],r,o):t.push(r):t[i]=r}),t):Object.keys(r).reduce(function(t,i){var a=r[i];return n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t},a)}}},pI1A:function(e,t){},v2ns:function(e,t){},"vUx/":function(e,t,r){"use strict";var n=r("o3mh"),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(e){return e.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},s=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(n),s=a?n.slice(0,a.index):n,c=[];if(s){if(!r.plainObjects&&o.call(Object.prototype,s)&&!r.allowPrototypes)return;c.push(s)}for(var l=0;null!==(a=i.exec(n))&&l<r.depth;){if(l+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+n.slice(a.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a&&r.parseArrays)i=[].concat(n);else{i=r.plainObjects?Object.create(null):{};var s="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,c=parseInt(s,10);r.parseArrays||""!==s?!isNaN(c)&&a!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=n:i[s]=n:i={0:n}}n=i}return n}(c,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots=void 0===r.allowDots?i.allowDots:!!r.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,void 0!==r.charset&&"utf-8"!==r.charset&&"iso-8859-1"!==r.charset)throw new Error("The charset option must be either utf-8, iso-8859-1, or undefined");if(void 0===r.charset&&(r.charset=i.charset),""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var c="string"==typeof e?function(e,t){var r,s={},c=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,u=c.split(t.delimiter,l),d=-1,f=t.charset;if(t.charsetSentinel)for(r=0;r<u.length;++r)0===u[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===u[r]?f="utf-8":"utf8=%26%2310003%3B"===u[r]&&(f="iso-8859-1"),d=r,r=u.length);for(r=0;r<u.length;++r)if(r!==d){var p,h,y=u[r],m=y.indexOf("]="),v=-1===m?y.indexOf("="):m+1;-1===v?(p=t.decoder(y,i.decoder,f),h=t.strictNullHandling?null:""):(p=t.decoder(y.slice(0,v),i.decoder,f),h=t.decoder(y.slice(v+1),i.decoder,f)),h&&t.interpretNumericEntities&&"iso-8859-1"===f&&(h=a(h)),o.call(s,p)?s[p]=n.combine(s[p],h):s[p]=h}return s}(e,r):e,l=r.plainObjects?Object.create(null):{},u=Object.keys(c),d=0;d<u.length;++d){var f=u[d],p=s(f,c[f],r);l=n.merge(l,p,r)}return n.compact(l)}},ymdt:function(e,t,r){"use strict";var n=r("41h0"),o=r("vUx/"),i=r("NnZY");e.exports={formats:i,parse:o,stringify:n}},"zY+i":function(e,t){}},["HFfA"]);
//# sourceMappingURL=goods.b71073a045578637f938.js.map