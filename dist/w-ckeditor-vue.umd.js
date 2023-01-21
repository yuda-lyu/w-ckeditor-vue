/*!
 * w-ckeditor-vue v2.0.3
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-ckeditor-vue"]=t()}(this,(function(){"use strict";var e=Array.isArray;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e){var t={exports:{}};return e(t,t.exports),t.exports}var o="object"==t(n)&&n&&n.Object===Object&&n,i="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,a=o||i||Function("return this")(),c=a.Symbol,u=Object.prototype,s=u.hasOwnProperty,l=u.toString,f=c?c.toStringTag:void 0;var d=function(e){var t=s.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[f]=n:delete e[f]),o},p=Object.prototype.toString;var v=function(e){return p.call(e)},h=c?c.toStringTag:void 0;var b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":h&&h in Object(e)?d(e):v(e)};var g=function(e){return null!=e&&"object"==t(e)};var y=function(e){return"symbol"==t(e)||g(e)&&"[object Symbol]"==b(e)},m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var j=function(n,r){if(e(n))return!1;var o=t(n);return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=n&&!y(n))||(_.test(n)||!m.test(n)||null!=r&&n in Object(r))};var w=function(e){var n=t(e);return null!=e&&("object"==n||"function"==n)};var O,S=function(e){if(!w(e))return!1;var t=b(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},A=a["__core-js_shared__"],C=(O=/[^.]+$/.exec(A&&A.keys&&A.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"";var k=function(e){return!!C&&C in e},E=Function.prototype.toString;var T=function(e){if(null!=e){try{return E.call(e)}catch(e){}try{return e+""}catch(e){}}return""},x=/^\[object .+?Constructor\]$/,R=Function.prototype,$=Object.prototype,I=R.toString,U=$.hasOwnProperty,z=RegExp("^"+I.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var L=function(e){return!(!w(e)||k(e))&&(S(e)?z:x).test(T(e))};var P=function(e,t){return null==e?void 0:e[t]};var D=function(e,t){var n=P(e,t);return L(n)?n:void 0},N=D(Object,"create");var B=function(){this.__data__=N?N(null):{},this.size=0};var F=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},H=Object.prototype.hasOwnProperty;var M=function(e){var t=this.__data__;if(N){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return H.call(t,e)?t[e]:void 0},W=Object.prototype.hasOwnProperty;var V=function(e){var t=this.__data__;return N?void 0!==t[e]:W.call(t,e)};var K=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=N&&void 0===t?"__lodash_hash_undefined__":t,this};function q(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}q.prototype.clear=B,q.prototype.delete=F,q.prototype.get=M,q.prototype.has=V,q.prototype.set=K;var G=q;var J=function(){this.__data__=[],this.size=0};var Q=function(e,t){return e===t||e!=e&&t!=t};var X=function(e,t){for(var n=e.length;n--;)if(Q(e[n][0],t))return n;return-1},Y=Array.prototype.splice;var Z=function(e){var t=this.__data__,n=X(t,e);return!(n<0)&&(n==t.length-1?t.pop():Y.call(t,n,1),--this.size,!0)};var ee=function(e){var t=this.__data__,n=X(t,e);return n<0?void 0:t[n][1]};var te=function(e){return X(this.__data__,e)>-1};var ne=function(e,t){var n=this.__data__,r=X(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function re(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}re.prototype.clear=J,re.prototype.delete=Z,re.prototype.get=ee,re.prototype.has=te,re.prototype.set=ne;var oe=re,ie=D(a,"Map");var ae=function(){this.size=0,this.__data__={hash:new G,map:new(ie||oe),string:new G}};var ce=function(e){var n=t(e);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e};var ue=function(e,t){var n=e.__data__;return ce(t)?n["string"==typeof t?"string":"hash"]:n.map};var se=function(e){var t=ue(this,e).delete(e);return this.size-=t?1:0,t};var le=function(e){return ue(this,e).get(e)};var fe=function(e){return ue(this,e).has(e)};var de=function(e,t){var n=ue(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function pe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pe.prototype.clear=ae,pe.prototype.delete=se,pe.prototype.get=le,pe.prototype.has=fe,pe.prototype.set=de;var ve=pe;function he(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(he.Cache||ve),n}he.Cache=ve;var be=he;var ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/\\(\\)?/g,me=function(e){var t=be(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ge,(function(e,n,r,o){t.push(r?o.replace(ye,"$1"):n||e)})),t}));var _e=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},je=c?c.prototype:void 0,we=je?je.toString:void 0;var Oe=function t(n){if("string"==typeof n)return n;if(e(n))return _e(n,t)+"";if(y(n))return we?we.call(n):"";var r=n+"";return"0"==r&&1/n==-Infinity?"-0":r};var Se=function(e){return null==e?"":Oe(e)};var Ae=function(t,n){return e(t)?t:j(t,n)?[t]:me(Se(t))};var Ce=function(e){if("string"==typeof e||y(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var ke=function(e,t){for(var n=0,r=(t=Ae(t,e)).length;null!=e&&n<r;)e=e[Ce(t[n++])];return n&&n==r?e:void 0};var Ee=function(e,t,n){var r=null==e?void 0:ke(e,t);return void 0===r?n:r};var Te=function(){this.__data__=new oe,this.size=0};var xe=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var Re=function(e){return this.__data__.get(e)};var $e=function(e){return this.__data__.has(e)};var Ie=function(e,t){var n=this.__data__;if(n instanceof oe){var r=n.__data__;if(!ie||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new ve(r)}return n.set(e,t),this.size=n.size,this};function Ue(e){var t=this.__data__=new oe(e);this.size=t.size}Ue.prototype.clear=Te,Ue.prototype.delete=xe,Ue.prototype.get=Re,Ue.prototype.has=$e,Ue.prototype.set=Ie;var ze=Ue;var Le=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},Pe=function(){try{var e=D(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var De=function(e,t,n){"__proto__"==t&&Pe?Pe(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},Ne=Object.prototype.hasOwnProperty;var Be=function(e,t,n){var r=e[t];Ne.call(e,t)&&Q(r,n)&&(void 0!==n||t in e)||De(e,t,n)};var Fe=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var c=t[i],u=r?r(n[c],e[c],c,n,e):void 0;void 0===u&&(u=e[c]),o?De(n,c,u):Be(n,c,u)}return n};var He=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var Me=function(e){return g(e)&&"[object Arguments]"==b(e)},We=Object.prototype,Ve=We.hasOwnProperty,Ke=We.propertyIsEnumerable,qe=Me(function(){return arguments}())?Me:function(e){return g(e)&&Ve.call(e,"callee")&&!Ke.call(e,"callee")},Ge=qe;var Je=function(){return!1},Qe=r((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?a.Buffer:void 0,i=(o?o.isBuffer:void 0)||Je;e.exports=i})),Xe=/^(?:0|[1-9]\d*)$/;var Ye=function(e,n){var r=t(e);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&Xe.test(e))&&e>-1&&e%1==0&&e<n};var Ze=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},et={};et["[object Float32Array]"]=et["[object Float64Array]"]=et["[object Int8Array]"]=et["[object Int16Array]"]=et["[object Int32Array]"]=et["[object Uint8Array]"]=et["[object Uint8ClampedArray]"]=et["[object Uint16Array]"]=et["[object Uint32Array]"]=!0,et["[object Arguments]"]=et["[object Array]"]=et["[object ArrayBuffer]"]=et["[object Boolean]"]=et["[object DataView]"]=et["[object Date]"]=et["[object Error]"]=et["[object Function]"]=et["[object Map]"]=et["[object Number]"]=et["[object Object]"]=et["[object RegExp]"]=et["[object Set]"]=et["[object String]"]=et["[object WeakMap]"]=!1;var tt=function(e){return g(e)&&Ze(e.length)&&!!et[b(e)]};var nt=function(e){return function(t){return e(t)}},rt=r((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,i=r&&r.exports===n&&o.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=a})),ot=rt&&rt.isTypedArray,it=ot?nt(ot):tt,at=Object.prototype.hasOwnProperty;var ct=function(t,n){var r=e(t),o=!r&&Ge(t),i=!r&&!o&&Qe(t),a=!r&&!o&&!i&&it(t),c=r||o||i||a,u=c?He(t.length,String):[],s=u.length;for(var l in t)!n&&!at.call(t,l)||c&&("length"==l||i&&("offset"==l||"parent"==l)||a&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Ye(l,s))||u.push(l);return u},ut=Object.prototype;var st=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ut)};var lt=function(e,t){return function(n){return e(t(n))}},ft=lt(Object.keys,Object),dt=Object.prototype.hasOwnProperty;var pt=function(e){if(!st(e))return ft(e);var t=[];for(var n in Object(e))dt.call(e,n)&&"constructor"!=n&&t.push(n);return t};var vt=function(e){return null!=e&&Ze(e.length)&&!S(e)};var ht=function(e){return vt(e)?ct(e):pt(e)};var bt=function(e,t){return e&&Fe(t,ht(t),e)};var gt=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},yt=Object.prototype.hasOwnProperty;var mt=function(e){if(!w(e))return gt(e);var t=st(e),n=[];for(var r in e)("constructor"!=r||!t&&yt.call(e,r))&&n.push(r);return n};var _t=function(e){return vt(e)?ct(e,!0):mt(e)};var jt=function(e,t){return e&&Fe(t,_t(t),e)},wt=r((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?a.Buffer:void 0,i=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=i?i(n):new e.constructor(n);return e.copy(r),r}}));var Ot=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t};var St=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var At=function(){return[]},Ct=Object.prototype.propertyIsEnumerable,kt=Object.getOwnPropertySymbols,Et=kt?function(e){return null==e?[]:(e=Object(e),St(kt(e),(function(t){return Ct.call(e,t)})))}:At;var Tt=function(e,t){return Fe(e,Et(e),t)};var xt=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},Rt=lt(Object.getPrototypeOf,Object),$t=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)xt(t,Et(e)),e=Rt(e);return t}:At;var It=function(e,t){return Fe(e,$t(e),t)};var Ut=function(t,n,r){var o=n(t);return e(t)?o:xt(o,r(t))};var zt=function(e){return Ut(e,ht,Et)};var Lt=function(e){return Ut(e,_t,$t)},Pt=D(a,"DataView"),Dt=D(a,"Promise"),Nt=D(a,"Set"),Bt=D(a,"WeakMap"),Ft="[object Map]",Ht="[object Promise]",Mt="[object Set]",Wt="[object WeakMap]",Vt="[object DataView]",Kt=T(Pt),qt=T(ie),Gt=T(Dt),Jt=T(Nt),Qt=T(Bt),Xt=b;(Pt&&Xt(new Pt(new ArrayBuffer(1)))!=Vt||ie&&Xt(new ie)!=Ft||Dt&&Xt(Dt.resolve())!=Ht||Nt&&Xt(new Nt)!=Mt||Bt&&Xt(new Bt)!=Wt)&&(Xt=function(e){var t=b(e),n="[object Object]"==t?e.constructor:void 0,r=n?T(n):"";if(r)switch(r){case Kt:return Vt;case qt:return Ft;case Gt:return Ht;case Jt:return Mt;case Qt:return Wt}return t});var Yt=Xt,Zt=Object.prototype.hasOwnProperty;var en=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Zt.call(e,"index")&&(n.index=e.index,n.input=e.input),n},tn=a.Uint8Array;var nn=function(e){var t=new e.constructor(e.byteLength);return new tn(t).set(new tn(e)),t};var rn=function(e,t){var n=t?nn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},on=/\w*$/;var an=function(e){var t=new e.constructor(e.source,on.exec(e));return t.lastIndex=e.lastIndex,t},cn=c?c.prototype:void 0,un=cn?cn.valueOf:void 0;var sn=function(e){return un?Object(un.call(e)):{}};var ln=function(e,t){var n=t?nn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)};var fn=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return nn(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return rn(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ln(e,n);case"[object Map]":case"[object Set]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return an(e);case"[object Symbol]":return sn(e)}},dn=Object.create,pn=function(){function e(){}return function(t){if(!w(t))return{};if(dn)return dn(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();var vn=function(e){return"function"!=typeof e.constructor||st(e)?{}:pn(Rt(e))};var hn=function(e){return g(e)&&"[object Map]"==Yt(e)},bn=rt&&rt.isMap,gn=bn?nt(bn):hn;var yn=function(e){return g(e)&&"[object Set]"==Yt(e)},mn=rt&&rt.isSet,_n=mn?nt(mn):yn,jn="[object Arguments]",wn="[object Function]",On="[object Object]",Sn={};Sn[jn]=Sn["[object Array]"]=Sn["[object ArrayBuffer]"]=Sn["[object DataView]"]=Sn["[object Boolean]"]=Sn["[object Date]"]=Sn["[object Float32Array]"]=Sn["[object Float64Array]"]=Sn["[object Int8Array]"]=Sn["[object Int16Array]"]=Sn["[object Int32Array]"]=Sn["[object Map]"]=Sn["[object Number]"]=Sn[On]=Sn["[object RegExp]"]=Sn["[object Set]"]=Sn["[object String]"]=Sn["[object Symbol]"]=Sn["[object Uint8Array]"]=Sn["[object Uint8ClampedArray]"]=Sn["[object Uint16Array]"]=Sn["[object Uint32Array]"]=!0,Sn["[object Error]"]=Sn[wn]=Sn["[object WeakMap]"]=!1;var An=function t(n,r,o,i,a,c){var u,s=1&r,l=2&r,f=4&r;if(o&&(u=a?o(n,i,a,c):o(n)),void 0!==u)return u;if(!w(n))return n;var d=e(n);if(d){if(u=en(n),!s)return Ot(n,u)}else{var p=Yt(n),v=p==wn||"[object GeneratorFunction]"==p;if(Qe(n))return wt(n,s);if(p==On||p==jn||v&&!a){if(u=l||v?{}:vn(n),!s)return l?It(n,jt(u,n)):Tt(n,bt(u,n))}else{if(!Sn[p])return a?n:{};u=fn(n,p,s)}}c||(c=new ze);var h=c.get(n);if(h)return h;c.set(n,u),_n(n)?n.forEach((function(e){u.add(t(e,r,o,e,n,c))})):gn(n)&&n.forEach((function(e,i){u.set(i,t(e,r,o,i,n,c))}));var b=d?void 0:(f?l?Lt:zt:l?_t:ht)(n);return Le(b||n,(function(e,i){b&&(e=n[i=e]),Be(u,i,t(e,r,o,i,n,c))})),u};var Cn=function(e){return An(e,5)},kn=Object.prototype.hasOwnProperty;var En,Tn,xn=function(t){if(null==t)return!0;if(vt(t)&&(e(t)||"string"==typeof t||"function"==typeof t.splice||Qe(t)||it(t)||Ge(t)))return!t.length;var n=Yt(t);if("[object Map]"==n||"[object Set]"==n)return!t.size;if(st(t))return!pt(t).length;for(var r in t)if(kn.call(t,r))return!1;return!0};En=window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}),(Tn=En.zh=En.zh||{}).dictionary=Object.assign(Tn.dictionary||{},{"%0 of %1":"%0/%1",Aquamarine:"淺綠色",Black:"黑色","Block quote":"段落引用",Blue:"藍色",Bold:"粗體","Break text":"","Bulleted List":"符號清單",Cancel:"取消","Cannot upload file:":"無法上傳檔案：","Centered image":"置中圖片","Change image text alternative":"修改圖片的替代文字","Choose heading":"選取標題",Column:"欄","Could not insert image at the current position.":"無法在這位置插入圖片","Could not obtain resized image URL.":"無法取得重設大小的圖片URL","Decrease indent":"減少縮排","Delete column":"刪除欄","Delete row":"刪除列","Dim grey":"淡灰色",Downloadable:"可下載","Dropdown toolbar":"下拉選單","Edit block":"編輯區塊","Edit link":"編輯連結","Editor toolbar":"編輯器工具","Enter image caption":"輸入圖片說明","Full size image":"完整尺寸圖片",Green:"綠色",Grey:"灰色","Header column":"標題欄","Header row":"標題列",Heading:"標題","Heading 1":"標題 1","Heading 2":"標題 2","Heading 3":"標題 3","Heading 4":"標題 4","Heading 5":"標題 5","Heading 6":"標題 6","Image toolbar":"圖片工具","image widget":"圖片小工具","In line":"","Increase indent":"增加縮排","Insert column left":"插入左方欄","Insert column right":"插入右方欄","Insert image":"插入圖片","Insert image or file":"插入圖片或檔案","Insert media":"插入影音","Insert paragraph after block":"在這個區塊後面插入一個段落","Insert paragraph before block":"在這個區塊前面插入一個段落","Insert row above":"插入上方列","Insert row below":"插入下方列","Insert table":"插入表格","Inserting image failed":"插入圖片失敗",Italic:"斜體","Left aligned image":"向左對齊圖片","Light blue":"亮藍色","Light green":"亮綠色","Light grey":"亮灰色",Link:"連結","Link URL":"連結˙ URL","Media URL":"影音網址","media widget":"影音小工具","Merge cell down":"合併下方儲存格","Merge cell left":"合併左方儲存格","Merge cell right":"合併右方儲存格","Merge cell up":"合併上方儲存格","Merge cells":"合併儲存格",Next:"下一","Numbered List":"有序清單","Open in a new tab":"在新視窗開啟","Open link in new tab":"在新視窗開啟連結",Orange:"橘色",Paragraph:"段落","Paste the media URL in the input.":"在輸入框貼上影音網址。",Previous:"上一",Purple:"紫色",Red:"紅色",Redo:"重做","Rich Text Editor":"豐富文字編輯器","Rich Text Editor, %0":"豐富文字編輯器，%0","Right aligned image":"向右對齊圖片",Row:"列",Save:"儲存","Select all":"選取全部","Select column":"選擇欄","Select row":"選擇列","Selecting resized image failed":"選擇重設大小的圖片失敗","Show more items":"顯示更多","Side image":"側邊圖片","Split cell horizontally":"水平分割儲存格","Split cell vertically":"垂直分割儲存格","Table toolbar":"表格工具","Text alternative":"替代文字","The URL must not be empty.":"網址不能空白。","This link has no URL":"連結沒有URL","This media URL is not supported.":"不支援此影音網址。","Tip: Paste the URL into the content to embed faster.":"提示：在內容貼上網址更快崁入。","Toggle caption off":"關閉表標題","Toggle caption on":"開啟表標題",Turquoise:"藍綠色",Undo:"取消",Unlink:"移除連結","Upload failed":"上傳失敗","Upload in progress":"正在上傳",White:"白色","Widget toolbar":"小工具","Wrap text":"",Yellow:"黃色"}),Tn.getPluralForm=function(e){return 0};var Rn=function(){return a.Date.now()},$n=/\s/;var In=function(e){for(var t=e.length;t--&&$n.test(e.charAt(t)););return t},Un=/^\s+/;var zn=function(e){return e?e.slice(0,In(e)+1).replace(Un,""):e},Ln=/^[-+]0x[0-9a-f]+$/i,Pn=/^0b[01]+$/i,Dn=/^0o[0-7]+$/i,Nn=parseInt;var Bn=function(e){if("number"==typeof e)return e;if(y(e))return NaN;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=zn(e);var n=Pn.test(e);return n||Dn.test(e)?Nn(e.slice(2),n?2:8):Ln.test(e)?NaN:+e},Fn=Math.max,Hn=Math.min;var Mn=function(e,t,n){var r,o,i,a,c,u,s=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,s=t,a=e.apply(i,n)}function v(e){return s=e,c=setTimeout(b,t),l?p(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-s>=i}function b(){var e=Rn();if(h(e))return g(e);c=setTimeout(b,function(e){var n=t-(e-u);return f?Hn(n,i-(e-s)):n}(e))}function g(e){return c=void 0,d&&r?p(e):(r=o=void 0,a)}function y(){var e=Rn(),n=h(e);if(r=arguments,o=this,u=e,n){if(void 0===c)return v(u);if(f)return clearTimeout(c),c=setTimeout(b,t),p(u)}return void 0===c&&(c=setTimeout(b,t)),a}return t=Bn(t)||0,w(n)&&(l=!!n.leading,i=(f="maxWait"in n)?Fn(Bn(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),y.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=o=c=void 0},y.flush=function(){return void 0===c?a:g(Rn())},y},Wn={name:"ckeditor",render:function(e){return e(this.tagName)},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:function(){return{}}},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:function(){return{$_instance:null,$_lastEditorData:{type:String,default:""}}},mounted:function(){var e=this,t=Object.assign({},this.config);this.value&&(t.initialData=this.value),this.editor.create(this.$el,t).then((function(t){e.$_instance=t,t.isReadOnly=e.disabled,e.$_setUpEditorEvents(),e.$emit("ready",t)})).catch((function(e){console.error(e)}))},beforeDestroy:function(){this.$_instance&&(this.$_instance.destroy(),this.$_instance=null),this.$emit("destroy",this.$_instance)},watch:{value:function(e,t){e!==t&&e!==this.$_lastEditorData&&this.$_instance.setData(e)},disabled:function(e){this.$_instance.isReadOnly=e}},methods:{$_setUpEditorEvents:function(){var e=this,t=this.$_instance,n=Mn((function(n){var r=e.$_lastEditorData=t.getData();e.$emit("input",r,n,t)}),300,{leading:!0});t.model.document.on("change:data",n),t.editing.view.document.on("focus",(function(n){e.$emit("focus",n,t)})),t.editing.view.document.on("blur",(function(n){e.$emit("blur",n,t)}))}}},Vn={language:"zh",toolbar:{items:["heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","|","subscript","superscript","|","alignment","bulletedList","numberedList","|","insertTable","blockQuote","link","|","redo","undo","|","removeFormat"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}},Kn=null;if(!window.ClassicEditor)throw new Error("invalid window.ClassicEditor");Kn=window.ClassicEditor;var qn={components:{"ckcmp-editor":Wn},props:{value:{type:String,default:""},settings:{type:Object,default:function(){}},height:{type:Number,default:250},editable:{type:Boolean,default:!0}},data:function(){return{ClassicEditor:Kn,editor:null}},computed:{useSettings:function(){var e=Cn(Vn);return xn(this.settings)||(e=Cn(this.settings)),e},changeHeight:function(){var e=this,t=e.height;return e.__heightTemp__=t,e.updateHeight(),""}},methods:{onReady:function(e){this.editor=e,this.updateHeight()},updateHeight:function(){var e=this;null!==e.editor&&e.$nextTick((function(){var t=Ee(e.editor,"ui.view.editable.element"),n=Ee(t,"parentNode");n&&(n.style.height=e.height+"px")}))}}};function Gn(e,t,n,r,o,i,a,c,u,s){"boolean"!=typeof a&&(u=c,c=a,a=!1);var l,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,u(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=l):t&&(l=a?function(e){t.call(this,s(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),l)if(f.functional){var d=f.render;f.render=function(e,t){return l.call(t),d(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return n}var Jn,Qn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Xn(e){return function(e,t){return function(e,t){var n=Qn?t.media||"default":e,r=Yn[n]||(Yn[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===Jn&&(Jn=document.head||document.getElementsByTagName("head")[0]),Jn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),c=r.element.childNodes;c[i]&&r.element.removeChild(c[i]),c.length?r.element.insertBefore(a,c[i]):r.element.appendChild(a)}}}(e,t)}}var Yn={};const Zn=qn;var er=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"},attrs:{changeHeight:e.changeHeight}},[n("ckcmp-editor",{ref:"edr",attrs:{editor:e.ClassicEditor,config:e.useSettings,value:e.value,disabled:!e.editable},on:{input:function(t){e.$emit("input",t)},ready:e.onReady}})],1)};er._withStripped=!0;return Gn({render:er,staticRenderFns:[]},(function(e){e&&e("data-v-06fe6878_0",{source:"\n[data-v-06fe6878] .ck-content {\n    height:100%;\n}\n",map:{version:3,sources:["D:\\- 006 -        開源\\開源-JS-102-1-w-ckeditor-vue\\w-ckeditor-vue\\src\\WCkeditorVue.vue"],names:[],mappings:";AAoNA;IACA,WAAA;AACA",file:"WCkeditorVue.vue",sourcesContent:["<template>\n    <div style=\"display:inline-block;\" :changeHeight=\"changeHeight\">\n\n        <ckcmp-editor\n            ref=\"edr\"\n            :editor=\"ClassicEditor\"\n            :config=\"useSettings\"\n            :value=\"value\"\n            :disabled=\"!editable\"\n            @input=\"function(v){$emit('input',v)}\"\n            @ready=\"onReady\"\n        ></ckcmp-editor>\n\n    </div>\n</template>\n\n<script>\nimport get from 'lodash/get'\nimport cloneDeep from 'lodash/cloneDeep'\nimport isEmpty from 'lodash/isEmpty'\nimport '@ckeditor/ckeditor5-build-classic/build/translations/zh.js'\n// import CKEditor from '@ckeditor/ckeditor5-vue'\nimport CKEditor from './ckeditor.mjs'\n// console.log('CKEditor', CKEditor)\n\n\n//ckeditor5不支援IE11, 若要得另外使用ckeditor4開發\n\n\n//ckeditor5 需要用線上自選 plugins 打包: https://ckeditor.com/ckeditor-5/online-builder/\n//手動選擇 plugins:\n// Alignment\n// Block quote\n// Bold\n// Font background color\n// Font color\n// Font size\n// Heading\n// Italic\n// Link\n// List\n// List style\n// Remove format\n// Strikethrough\n// Subscript\n// Superscript\n// Table\n// Underline\n// Table cell properties\n// Table toolbar\n// Table properties\n//下載解壓縮後, 將 ckeditor.js 與 ckeditor.js.map 放置於 distCK 內, 打包時會再自動複製到 dist\n\n\nlet def_settings = {\n    language: 'zh',\n    toolbar: {\n        items: [\n            'heading',\n            '|',\n            'fontSize',\n            'fontColor',\n            'fontBackgroundColor',\n            '|',\n            'bold',\n            'italic',\n            'underline',\n            'strikethrough',\n            '|',\n            'subscript',\n            'superscript',\n            '|',\n            'alignment',\n            'bulletedList',\n            'numberedList',\n            '|',\n            'insertTable',\n            'blockQuote',\n            'link',\n            '|',\n            'redo',\n            'undo',\n            '|',\n            'removeFormat'\n        ]\n    },\n    table: {\n        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']\n    },\n}\n\n\nlet ClassicEditor = null\nif (window.ClassicEditor) {\n    ClassicEditor = window.ClassicEditor\n}\nelse {\n    throw new Error(`invalid window.ClassicEditor`)\n}\n\n\n/**\n * @vue-prop {String} [value=''] 輸入富文本字串，預設為''\n * @vue-prop {Object} [settings={}] 輸入ckeditor設定物件，預設值詳見原始碼\n * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250\n * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true\n */\nexport default {\n    components: {\n        'ckcmp-editor': CKEditor\n    },\n    props: {\n        value: {\n            type: String,\n            default: '',\n        },\n        settings: {\n            type: Object,\n            default: () => {},\n        },\n        height: {\n            type: Number,\n            default: 250,\n        },\n        editable: {\n            type: Boolean,\n            default: true,\n        },\n    },\n    data: function() {\n        return {\n            ClassicEditor,\n            editor: null,\n        }\n    },\n    computed: {\n\n        useSettings: function() {\n            //console.log('computed useSettings')\n\n            let vo = this\n\n            //s\n            let s = cloneDeep(def_settings)\n            if (!isEmpty(vo.settings)) {\n                s = cloneDeep(vo.settings)\n            }\n\n            return s\n        },\n\n        changeHeight: function() {\n            //console.log('computed changeHeight')\n\n            let vo = this\n\n            //height for trigger\n            let height = vo.height\n            vo.__heightTemp__ = height\n\n            //updateHeight\n            vo.updateHeight()\n\n            return ''\n        },\n\n    },\n    methods: {\n\n        onReady: function(editor) {\n            //console.log('methods onReady', editor)\n\n            let vo = this\n\n            //save editor\n            vo.editor = editor\n\n            //updateHeight\n            vo.updateHeight()\n\n        },\n\n        updateHeight: function() {\n            //console.log('methods updateHeight')\n\n            let vo = this\n\n            //check\n            if (vo.editor === null) {\n                return\n            }\n\n            vo.$nextTick(() => {\n\n                //ele\n                let eleContent = get(vo.editor, 'ui.view.editable.element') //可編輯區是element已通過v-deep設為100%\n                let ele = get(eleContent, 'parentNode') //要把height設定至父層的高度才能響應調整\n\n                //update height\n                if (ele) {\n                    ele.style.height = vo.height + 'px'\n                }\n\n            })\n\n        },\n\n    },\n}\n<\/script>\n\n<style scoped>\n::v-deep .ck-content {\n    height:100%;\n}\n</style>\n"]},media:void 0})}),Zn,"data-v-06fe6878",false,undefined,!1,Xn,void 0,void 0)}));
//# sourceMappingURL=w-ckeditor-vue.umd.js.map
