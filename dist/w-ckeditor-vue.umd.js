/*!
 * w-ckeditor-vue v1.0.24
 * (c) 2018-2020 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self)["w-ckeditor-vue"]=t()}(this,(function(){"use strict";var e=Array.isArray,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&n.path)}},n.exports),n.exports}var o=r((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t})),i="object"==o(t)&&t&&t.Object===Object&&t,a="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,u=i||a||Function("return this")(),c=u.Symbol,l=Object.prototype,s=l.hasOwnProperty,f=l.toString,d=c?c.toStringTag:void 0;var p=function(e){var t=s.call(e,d),n=e[d];try{e[d]=void 0;var r=!0}catch(e){}var o=f.call(e);return r&&(t?e[d]=n:delete e[d]),o},v=Object.prototype.toString;var h=function(e){return v.call(e)},b=c?c.toStringTag:void 0;var y=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?p(e):h(e)};var g=function(e){return null!=e&&"object"==o(e)};var m=function(e){return"symbol"==o(e)||g(e)&&"[object Symbol]"==y(e)},j=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_=/^\w*$/;var w=function(t,n){if(e(t))return!1;var r=o(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!m(t))||(_.test(t)||!j.test(t)||null!=n&&t in Object(n))};var O=function(e){var t=o(e);return null!=e&&("object"==t||"function"==t)};var S,A=function(e){if(!O(e))return!1;var t=y(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t},T=u["__core-js_shared__"],k=(S=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"";var C=function(e){return!!k&&k in e},x=Function.prototype.toString;var E=function(e){if(null!=e){try{return x.call(e)}catch(e){}try{return e+""}catch(e){}}return""},$=/^\[object .+?Constructor\]$/,R=Function.prototype,I=Object.prototype,U=R.toString,P=I.hasOwnProperty,z=RegExp("^"+U.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var L=function(e){return!(!O(e)||C(e))&&(A(e)?z:$).test(E(e))};var D=function(e,t){return null==e?void 0:e[t]};var F=function(e,t){var n=D(e,t);return L(n)?n:void 0},N=F(Object,"create");var M=function(){this.__data__=N?N(null):{},this.size=0};var H=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},B=Object.prototype.hasOwnProperty;var W=function(e){var t=this.__data__;if(N){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return B.call(t,e)?t[e]:void 0},V=Object.prototype.hasOwnProperty;var q=function(e){var t=this.__data__;return N?void 0!==t[e]:V.call(t,e)};var K=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=N&&void 0===t?"__lodash_hash_undefined__":t,this};function G(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}G.prototype.clear=M,G.prototype.delete=H,G.prototype.get=W,G.prototype.has=q,G.prototype.set=K;var J=G;var Q=function(){this.__data__=[],this.size=0};var X=function(e,t){return e===t||e!=e&&t!=t};var Y=function(e,t){for(var n=e.length;n--;)if(X(e[n][0],t))return n;return-1},Z=Array.prototype.splice;var ee=function(e){var t=this.__data__,n=Y(t,e);return!(n<0)&&(n==t.length-1?t.pop():Z.call(t,n,1),--this.size,!0)};var te=function(e){var t=this.__data__,n=Y(t,e);return n<0?void 0:t[n][1]};var ne=function(e){return Y(this.__data__,e)>-1};var re=function(e,t){var n=this.__data__,r=Y(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this};function oe(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}oe.prototype.clear=Q,oe.prototype.delete=ee,oe.prototype.get=te,oe.prototype.has=ne,oe.prototype.set=re;var ie=oe,ae=F(u,"Map");var ue=function(){this.size=0,this.__data__={hash:new J,map:new(ae||ie),string:new J}};var ce=function(e){var t=o(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var le=function(e,t){var n=e.__data__;return ce(t)?n["string"==typeof t?"string":"hash"]:n.map};var se=function(e){var t=le(this,e).delete(e);return this.size-=t?1:0,t};var fe=function(e){return le(this,e).get(e)};var de=function(e){return le(this,e).has(e)};var pe=function(e,t){var n=le(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this};function ve(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}ve.prototype.clear=ue,ve.prototype.delete=se,ve.prototype.get=fe,ve.prototype.has=de,ve.prototype.set=pe;var he=ve;function be(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(be.Cache||he),n}be.Cache=he;var ye=be;var ge=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,me=/\\(\\)?/g,je=function(e){var t=ye(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(ge,(function(e,n,r,o){t.push(r?o.replace(me,"$1"):n||e)})),t}));var _e=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o},we=c?c.prototype:void 0,Oe=we?we.toString:void 0;var Se=function t(n){if("string"==typeof n)return n;if(e(n))return _e(n,t)+"";if(m(n))return Oe?Oe.call(n):"";var r=n+"";return"0"==r&&1/n==-Infinity?"-0":r};var Ae=function(e){return null==e?"":Se(e)};var Te=function(t,n){return e(t)?t:w(t,n)?[t]:je(Ae(t))};var ke=function(e){if("string"==typeof e||m(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t};var Ce=function(e,t){for(var n=0,r=(t=Te(t,e)).length;null!=e&&n<r;)e=e[ke(t[n++])];return n&&n==r?e:void 0};var xe=function(e,t,n){var r=null==e?void 0:Ce(e,t);return void 0===r?n:r};var Ee=function(){this.__data__=new ie,this.size=0};var $e=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n};var Re=function(e){return this.__data__.get(e)};var Ie=function(e){return this.__data__.has(e)};var Ue=function(e,t){var n=this.__data__;if(n instanceof ie){var r=n.__data__;if(!ae||r.length<199)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new he(r)}return n.set(e,t),this.size=n.size,this};function Pe(e){var t=this.__data__=new ie(e);this.size=t.size}Pe.prototype.clear=Ee,Pe.prototype.delete=$e,Pe.prototype.get=Re,Pe.prototype.has=Ie,Pe.prototype.set=Ue;var ze=Pe;var Le=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e},De=function(){try{var e=F(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();var Fe=function(e,t,n){"__proto__"==t&&De?De(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n},Ne=Object.prototype.hasOwnProperty;var Me=function(e,t,n){var r=e[t];Ne.call(e,t)&&X(r,n)&&(void 0!==n||t in e)||Fe(e,t,n)};var He=function(e,t,n,r){var o=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var u=t[i],c=r?r(n[u],e[u],u,n,e):void 0;void 0===c&&(c=e[u]),o?Fe(n,u,c):Me(n,u,c)}return n};var Be=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r};var We=function(e){return g(e)&&"[object Arguments]"==y(e)},Ve=Object.prototype,qe=Ve.hasOwnProperty,Ke=Ve.propertyIsEnumerable,Ge=We(function(){return arguments}())?We:function(e){return g(e)&&qe.call(e,"callee")&&!Ke.call(e,"callee")};var Je=function(){return!1},Qe=r((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?u.Buffer:void 0,i=(o?o.isBuffer:void 0)||Je;e.exports=i})),Xe=/^(?:0|[1-9]\d*)$/;var Ye=function(e,t){var n=o(e);return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Xe.test(e))&&e>-1&&e%1==0&&e<t};var Ze=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991},et={};et["[object Float32Array]"]=et["[object Float64Array]"]=et["[object Int8Array]"]=et["[object Int16Array]"]=et["[object Int32Array]"]=et["[object Uint8Array]"]=et["[object Uint8ClampedArray]"]=et["[object Uint16Array]"]=et["[object Uint32Array]"]=!0,et["[object Arguments]"]=et["[object Array]"]=et["[object ArrayBuffer]"]=et["[object Boolean]"]=et["[object DataView]"]=et["[object Date]"]=et["[object Error]"]=et["[object Function]"]=et["[object Map]"]=et["[object Number]"]=et["[object Object]"]=et["[object RegExp]"]=et["[object Set]"]=et["[object String]"]=et["[object WeakMap]"]=!1;var tt=function(e){return g(e)&&Ze(e.length)&&!!et[y(e)]};var nt=function(e){return function(t){return e(t)}},rt=r((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n&&i.process,a=function(){try{var e=r&&r.require&&r.require("util").types;return e||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=a})),ot=rt&&rt.isTypedArray,it=ot?nt(ot):tt,at=Object.prototype.hasOwnProperty;var ut=function(t,n){var r=e(t),o=!r&&Ge(t),i=!r&&!o&&Qe(t),a=!r&&!o&&!i&&it(t),u=r||o||i||a,c=u?Be(t.length,String):[],l=c.length;for(var s in t)!n&&!at.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Ye(s,l))||c.push(s);return c},ct=Object.prototype;var lt=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ct)};var st=function(e,t){return function(n){return e(t(n))}},ft=st(Object.keys,Object),dt=Object.prototype.hasOwnProperty;var pt=function(e){if(!lt(e))return ft(e);var t=[];for(var n in Object(e))dt.call(e,n)&&"constructor"!=n&&t.push(n);return t};var vt=function(e){return null!=e&&Ze(e.length)&&!A(e)};var ht=function(e){return vt(e)?ut(e):pt(e)};var bt=function(e,t){return e&&He(t,ht(t),e)};var yt=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},gt=Object.prototype.hasOwnProperty;var mt=function(e){if(!O(e))return yt(e);var t=lt(e),n=[];for(var r in e)("constructor"!=r||!t&&gt.call(e,r))&&n.push(r);return n};var jt=function(e){return vt(e)?ut(e,!0):mt(e)};var _t=function(e,t){return e&&He(t,jt(t),e)},wt=r((function(e,t){var n=t&&!t.nodeType&&t,r=n&&e&&!e.nodeType&&e,o=r&&r.exports===n?u.Buffer:void 0,i=o?o.allocUnsafe:void 0;e.exports=function(e,t){if(t)return e.slice();var n=e.length,r=i?i(n):new e.constructor(n);return e.copy(r),r}}));var Ot=function(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t};var St=function(e,t){for(var n=-1,r=null==e?0:e.length,o=0,i=[];++n<r;){var a=e[n];t(a,n,e)&&(i[o++]=a)}return i};var At=function(){return[]},Tt=Object.prototype.propertyIsEnumerable,kt=Object.getOwnPropertySymbols,Ct=kt?function(e){return null==e?[]:(e=Object(e),St(kt(e),(function(t){return Tt.call(e,t)})))}:At;var xt=function(e,t){return He(e,Ct(e),t)};var Et=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e},$t=st(Object.getPrototypeOf,Object),Rt=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)Et(t,Ct(e)),e=$t(e);return t}:At;var It=function(e,t){return He(e,Rt(e),t)};var Ut=function(t,n,r){var o=n(t);return e(t)?o:Et(o,r(t))};var Pt=function(e){return Ut(e,ht,Ct)};var zt=function(e){return Ut(e,jt,Rt)},Lt=F(u,"DataView"),Dt=F(u,"Promise"),Ft=F(u,"Set"),Nt=F(u,"WeakMap"),Mt="[object Map]",Ht="[object Promise]",Bt="[object Set]",Wt="[object WeakMap]",Vt="[object DataView]",qt=E(Lt),Kt=E(ae),Gt=E(Dt),Jt=E(Ft),Qt=E(Nt),Xt=y;(Lt&&Xt(new Lt(new ArrayBuffer(1)))!=Vt||ae&&Xt(new ae)!=Mt||Dt&&Xt(Dt.resolve())!=Ht||Ft&&Xt(new Ft)!=Bt||Nt&&Xt(new Nt)!=Wt)&&(Xt=function(e){var t=y(e),n="[object Object]"==t?e.constructor:void 0,r=n?E(n):"";if(r)switch(r){case qt:return Vt;case Kt:return Mt;case Gt:return Ht;case Jt:return Bt;case Qt:return Wt}return t});var Yt=Xt,Zt=Object.prototype.hasOwnProperty;var en=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&Zt.call(e,"index")&&(n.index=e.index,n.input=e.input),n},tn=u.Uint8Array;var nn=function(e){var t=new e.constructor(e.byteLength);return new tn(t).set(new tn(e)),t};var rn=function(e,t){var n=t?nn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)},on=/\w*$/;var an=function(e){var t=new e.constructor(e.source,on.exec(e));return t.lastIndex=e.lastIndex,t},un=c?c.prototype:void 0,cn=un?un.valueOf:void 0;var ln=function(e){return cn?Object(cn.call(e)):{}};var sn=function(e,t){var n=t?nn(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)};var fn=function(e,t,n){var r=e.constructor;switch(t){case"[object ArrayBuffer]":return nn(e);case"[object Boolean]":case"[object Date]":return new r(+e);case"[object DataView]":return rn(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return sn(e,n);case"[object Map]":return new r;case"[object Number]":case"[object String]":return new r(e);case"[object RegExp]":return an(e);case"[object Set]":return new r;case"[object Symbol]":return ln(e)}},dn=Object.create,pn=function(){function e(){}return function(t){if(!O(t))return{};if(dn)return dn(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();var vn=function(e){return"function"!=typeof e.constructor||lt(e)?{}:pn($t(e))};var hn=function(e){return g(e)&&"[object Map]"==Yt(e)},bn=rt&&rt.isMap,yn=bn?nt(bn):hn;var gn=function(e){return g(e)&&"[object Set]"==Yt(e)},mn=rt&&rt.isSet,jn=mn?nt(mn):gn,_n="[object Arguments]",wn="[object Function]",On="[object Object]",Sn={};Sn[_n]=Sn["[object Array]"]=Sn["[object ArrayBuffer]"]=Sn["[object DataView]"]=Sn["[object Boolean]"]=Sn["[object Date]"]=Sn["[object Float32Array]"]=Sn["[object Float64Array]"]=Sn["[object Int8Array]"]=Sn["[object Int16Array]"]=Sn["[object Int32Array]"]=Sn["[object Map]"]=Sn["[object Number]"]=Sn[On]=Sn["[object RegExp]"]=Sn["[object Set]"]=Sn["[object String]"]=Sn["[object Symbol]"]=Sn["[object Uint8Array]"]=Sn["[object Uint8ClampedArray]"]=Sn["[object Uint16Array]"]=Sn["[object Uint32Array]"]=!0,Sn["[object Error]"]=Sn[wn]=Sn["[object WeakMap]"]=!1;var An=function t(n,r,o,i,a,u){var c,l=1&r,s=2&r,f=4&r;if(o&&(c=a?o(n,i,a,u):o(n)),void 0!==c)return c;if(!O(n))return n;var d=e(n);if(d){if(c=en(n),!l)return Ot(n,c)}else{var p=Yt(n),v=p==wn||"[object GeneratorFunction]"==p;if(Qe(n))return wt(n,l);if(p==On||p==_n||v&&!a){if(c=s||v?{}:vn(n),!l)return s?It(n,_t(c,n)):xt(n,bt(c,n))}else{if(!Sn[p])return a?n:{};c=fn(n,p,l)}}u||(u=new ze);var h=u.get(n);if(h)return h;u.set(n,c),jn(n)?n.forEach((function(e){c.add(t(e,r,o,e,n,u))})):yn(n)&&n.forEach((function(e,i){c.set(i,t(e,r,o,i,n,u))}));var b=d?void 0:(f?s?zt:Pt:s?jt:ht)(n);return Le(b||n,(function(e,i){b&&(e=n[i=e]),Me(c,i,t(e,r,o,i,n,u))})),c};var Tn=function(e){return An(e,5)},kn=Object.prototype.hasOwnProperty;var Cn,xn,En=function(t){if(null==t)return!0;if(vt(t)&&(e(t)||"string"==typeof t||"function"==typeof t.splice||Qe(t)||it(t)||Ge(t)))return!t.length;var n=Yt(t);if("[object Map]"==n||"[object Set]"==n)return!t.size;if(lt(t))return!pt(t).length;for(var r in t)if(kn.call(t,r))return!1;return!0};Cn=window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}),(xn=Cn.zh=Cn.zh||{}).dictionary=Object.assign(xn.dictionary||{},{"%0 of %1":"%0/%1","Block quote":"段落引用",Bold:"粗體","Bulleted List":"符號清單",Cancel:"取消","Cannot upload file:":"無法上傳檔案：","Centered image":"置中圖片","Change image text alternative":"修改圖片的替代文字","Choose heading":"選取標題",Column:"欄","Could not insert image at the current position.":"無法在這位置插入圖片","Could not obtain resized image URL.":"無法取得重設大小的圖片URL","Decrease indent":"減少縮排","Delete column":"刪除欄","Delete row":"刪除列",Downloadable:"可下載","Dropdown toolbar":"下拉選單","Edit link":"編輯連結","Editor toolbar":"編輯器工具","Enter image caption":"輸入圖片說明","Full size image":"完整尺寸圖片","Header column":"標題欄","Header row":"標題列",Heading:"標題","Heading 1":"標題 1","Heading 2":"標題 2","Heading 3":"標題 3","Heading 4":"標題 4","Heading 5":"標題 5","Heading 6":"標題 6","Image toolbar":"圖片工具","image widget":"圖片小工具","Increase indent":"增加縮排","Insert column left":"插入左方欄","Insert column right":"插入右方欄","Insert image":"插入圖片","Insert image or file":"插入圖片或檔案","Insert media":"插入影音","Insert paragraph after block":"在這個區塊後面插入一個段落","Insert paragraph before block":"在這個區塊前面插入一個段落","Insert row above":"插入上方列","Insert row below":"插入下方列","Insert table":"插入表格","Inserting image failed":"插入圖片失敗",Italic:"斜體","Left aligned image":"向左對齊圖片",Link:"連結","Link URL":"連結˙ URL","Media URL":"影音網址","media widget":"影音小工具","Merge cell down":"合併下方儲存格","Merge cell left":"合併左方儲存格","Merge cell right":"合併右方儲存格","Merge cell up":"合併上方儲存格","Merge cells":"合併儲存格",Next:"下一","Numbered List":"有序清單","Open in a new tab":"在新視窗開啟","Open link in new tab":"在新視窗開啟連結",Paragraph:"段落","Paste the media URL in the input.":"在輸入框貼上影音網址。",Previous:"上一",Redo:"重做","Rich Text Editor":"豐富文字編輯器","Rich Text Editor, %0":"豐富文字編輯器，%0","Right aligned image":"向右對齊圖片",Row:"列",Save:"儲存","Select all":"選取全部","Select column":"選擇欄","Select row":"選擇列","Selecting resized image failed":"選擇重設大小的圖片失敗","Show more items":"顯示更多","Side image":"側邊圖片","Split cell horizontally":"水平分割儲存格","Split cell vertically":"垂直分割儲存格","Table toolbar":"表格工具","Text alternative":"替代文字","The URL must not be empty.":"網址不能空白。","This link has no URL":"連結沒有URL","This media URL is not supported.":"不支援此影音網址。","Tip: Paste the URL into the content to embed faster.":"提示：在內容貼上網址更快崁入。",Undo:"取消",Unlink:"移除連結","Upload failed":"上傳失敗","Upload in progress":"正在上傳","Widget toolbar":"小工具"}),xn.getPluralForm=function(e){return 0};var $n=r((function(e,t){
/*!
	   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
	   * For licensing, see LICENSE.md.
	   */
window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==o(e)&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){(function(e){var n="object"==o(e)&&e&&e.Object===Object&&e;t.a=n}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==("undefined"==typeof window?"undefined":o(window))&&(n=window)}e.exports=n},function(e,t,n){n.r(t);var r=function(e){var t=o(e);return null!=e&&("object"==t||"function"==t)},i=n(0),a="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,u=i.a||a||Function("return this")(),c=function(){return u.Date.now()},l=u.Symbol,s=Object.prototype,f=s.hasOwnProperty,d=s.toString,p=l?l.toStringTag:void 0,v=function(e){var t=f.call(e,p),n=e[p];try{e[p]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[p]=n:delete e[p]),o},h=Object.prototype.toString,b=function(e){return h.call(e)},y=l?l.toStringTag:void 0,g=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":y&&y in Object(e)?v(e):b(e)},m=function(e){return null!=e&&"object"==o(e)},j=function(e){return"symbol"==o(e)||m(e)&&"[object Symbol]"==g(e)},_=/^\s+|\s+$/g,w=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,S=/^0o[0-7]+$/i,A=parseInt,T=function(e){if("number"==typeof e)return e;if(j(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(_,"");var n=O.test(e);return n||S.test(e)?A(e.slice(2),n?2:8):w.test(e)?NaN:+e},k=Math.max,C=Math.min,x=function(e,t,n){var o,i,a,u,l,s,f=0,d=!1,p=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=o,r=i;return o=i=void 0,f=t,u=e.apply(r,n)}function b(e){return f=e,l=setTimeout(g,t),d?h(e):u}function y(e){var n=e-s;return void 0===s||n>=t||n<0||p&&e-f>=a}function g(){var e=c();if(y(e))return m(e);l=setTimeout(g,function(e){var n=t-(e-s);return p?C(n,a-(e-f)):n}(e))}function m(e){return l=void 0,v&&o?h(e):(o=i=void 0,u)}function j(){var e=c(),n=y(e);if(o=arguments,i=this,s=e,n){if(void 0===l)return b(s);if(p)return clearTimeout(l),l=setTimeout(g,t),h(s)}return void 0===l&&(l=setTimeout(g,t)),u}return t=T(t)||0,r(n)&&(d=!!n.leading,a=(p="maxWait"in n)?k(T(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=s=i=l=void 0},j.flush=function(){return void 0===l?u:m(c())},j},E={name:"ckeditor",render:function(e){return e(this.tagName)},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:function(){return{}}},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:function(){return{$_instance:null,$_lastEditorData:{type:String,default:""}}},mounted:function(){var e=this,t=Object.assign({},this.config);this.value&&(t.initialData=this.value),this.editor.create(this.$el,t).then((function(t){e.$_instance=t,t.isReadOnly=e.disabled,e.$_setUpEditorEvents(),e.$emit("ready",t)})).catch((function(e){console.error(e)}))},beforeDestroy:function(){this.$_instance&&(this.$_instance.destroy(),this.$_instance=null),this.$emit("destroy",this.$_instance)},watch:{value:function(e,t){e!==t&&e!==this.$_lastEditorData&&this.$_instance.setData(e)},disabled:function(e){this.$_instance.isReadOnly=e}},methods:{$_setUpEditorEvents:function(){var e=this,t=this.$_instance,n=x((function(n){var r=e.$_lastEditorData=t.getData();e.$emit("input",r,n,t)}),300,{leading:!0});t.model.document.on("change:data",n),t.editing.view.document.on("focus",(function(n){e.$emit("focus",n,t)})),t.editing.view.document.on("blur",(function(n){e.$emit("blur",n,t)}))}}},$={install:function(e){e.component("ckeditor",E)},component:E};t.default=$}]).default})),Rn={language:"zh",toolbar:{items:["heading","|","fontSize","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","|","subscript","superscript","|","alignment","bulletedList","numberedList","|","insertTable","blockQuote","link","|","redo","undo","|","removeFormat"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableProperties","tableCellProperties"]}},In={components:{"ckcmp-editor":n($n).component},props:{value:{type:String,default:""},settings:{type:Object,default:function(){}},height:{type:Number,default:250},editable:{type:Boolean,default:!0}},data:function(){return{ClassicEditor:window.ClassicEditor,editor:null}},computed:{useSettings:function(){var e=Tn(Rn);return En(this.settings)||(e=Tn(this.settings)),e},changeHeight:function(){var e=this,t=e.height;return e.__heightTemp__=t,e.updateHeight(),""}},methods:{onReady:function(e){this.editor=e,this.updateHeight()},updateHeight:function(){var e=this;null!==e.editor&&e.$nextTick((function(){var t=xe(e.editor,"ui.view.editable.element"),n=xe(t,"parentNode");n&&(n.style.height=e.height+"px")}))}}};function Un(e,t,n,r,o,i,a,u,c,l){"boolean"!=typeof a&&(c=u,u=a,a=!1);var s,f="function"==typeof n?n.options:n;if(e&&e.render&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0,o&&(f.functional=!0)),r&&(f._scopeId=r),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=s):t&&(s=a?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,u(e))}),s)if(f.functional){var d=f.render;f.render=function(e,t){return s.call(t),d(e,t)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,s):[s]}return n}var Pn,zn="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function Ln(e){return function(e,t){return function(e,t){var n=zn?t.media||"default":e,r=Dn[n]||(Dn[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var o=t.source;if(t.map&&(o+="\n/*# sourceURL="+t.map.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===Pn&&(Pn=document.head||document.getElementsByTagName("head")[0]),Pn.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(o),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var i=r.ids.size-1,a=document.createTextNode(o),u=r.element.childNodes;u[i]&&r.element.removeChild(u[i]),u.length?r.element.insertBefore(a,u[i]):r.element.appendChild(a)}}}(e,t)}}var Dn={};const Fn=In;var Nn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"},attrs:{changeHeight:e.changeHeight}},[n("ckcmp-editor",{ref:"edr",attrs:{editor:e.ClassicEditor,config:e.useSettings,value:e.value,disabled:!e.editable},on:{input:function(t){e.$emit("input",t)},ready:e.onReady}})],1)};Nn._withStripped=!0;return Un({render:Nn,staticRenderFns:[]},(function(e){e&&e("data-v-2c3abb4c_0",{source:"\n[data-v-2c3abb4c] .ck-content {\r\n    height:100%;\n}\r\n",map:{version:3,sources:["D:\\開源-JS-102-1-w-ckeditor-vue\\w-ckeditor-vue\\src\\WCkeditorVue.vue"],names:[],mappings:";AAsMA;IACA,WAAA;AACA",file:"WCkeditorVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\" :changeHeight=\"changeHeight\">\r\n\r\n        <ckcmp-editor\r\n            ref=\"edr\"\r\n            :editor=\"ClassicEditor\"\r\n            :config=\"useSettings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n            @ready=\"onReady\"\r\n        ></ckcmp-editor>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\nimport get from 'lodash/get'\r\nimport cloneDeep from 'lodash/cloneDeep'\r\nimport isEmpty from 'lodash/isEmpty'\r\nimport '@ckeditor/ckeditor5-build-classic/build/translations/zh'\r\nimport CKEditor from '@ckeditor/ckeditor5-vue'\r\n\r\n\r\n//ckeditor5 需要用線上自選 plugins 打包: https://ckeditor.com/ckeditor-5/online-builder/\r\n//手動選擇 plugins:\r\n// Alignment\r\n// Block quote\r\n// Bold\r\n// Font background color\r\n// Font color\r\n// Font size\r\n// Heading\r\n// Italic\r\n// Link\r\n// List\r\n// List style\r\n// Remove format\r\n// Strikethrough\r\n// Subscript\r\n// Superscript\r\n// Table\r\n// Underline\r\n// Table cell properties\r\n// Table toolbar\r\n// Table properties\r\n//下載解壓縮後, 將 ckeditor.js 與 ckeditor.js.map 放置於 distCK 內, 打包時會再自動複製到 dist\r\n\r\n\r\nlet def_settings = {\r\n    language: 'zh',\r\n    toolbar: {\r\n        items: [\r\n            'heading',\r\n            '|',\r\n            'fontSize',\r\n            'fontColor',\r\n            'fontBackgroundColor',\r\n            '|',\r\n            'bold',\r\n            'italic',\r\n            'underline',\r\n            'strikethrough',\r\n            '|',\r\n            'subscript',\r\n            'superscript',\r\n            '|',\r\n            'alignment',\r\n            'bulletedList',\r\n            'numberedList',\r\n            '|',\r\n            'insertTable',\r\n            'blockQuote',\r\n            'link',\r\n            '|',\r\n            'redo',\r\n            'undo',\r\n            '|',\r\n            'removeFormat'\r\n        ]\r\n    },\r\n    table: {\r\n        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']\r\n    },\r\n}\r\n\r\n\r\n/**\r\n * @vue-prop {String} [value=''] 輸入富文本字串，預設為''\r\n * @vue-prop {Object} [settings={}] 輸入quill設定物件，預設值詳見原始碼\r\n * @vue-prop {Number} [height=250] 輸入高度數字，單位為px，預設為250\r\n * @vue-prop {Boolean} [editable=true] 輸入是否允許編輯，預設true\r\n */\r\nexport default {\r\n    components: {\r\n        'ckcmp-editor': CKEditor.component\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n            default: '',\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: () => {},\r\n        },\r\n        height: {\r\n            type: Number,\r\n            default: 250,\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n            ClassicEditor: window['ClassicEditor'],\r\n            editor: null,\r\n        }\r\n    },\r\n    computed: {\r\n\r\n        useSettings: function() {\r\n            //console.log('computed useSettings')\r\n\r\n            let vo = this\r\n\r\n            //s\r\n            let s = cloneDeep(def_settings)\r\n            if (!isEmpty(vo.settings)) {\r\n                s = cloneDeep(vo.settings)\r\n            }\r\n\r\n            return s\r\n        },\r\n\r\n        changeHeight: function() {\r\n            //console.log('computed changeHeight')\r\n\r\n            let vo = this\r\n\r\n            //height for trigger\r\n            let height = vo.height\r\n            vo.__heightTemp__ = height\r\n\r\n            //updateHeight\r\n            vo.updateHeight()\r\n\r\n            return ''\r\n        },\r\n\r\n    },\r\n    methods: {\r\n\r\n        onReady: function(editor) {\r\n            //console.log('methods onReady', editor)\r\n\r\n            let vo = this\r\n\r\n            //save editor\r\n            vo.editor = editor\r\n\r\n            //updateHeight\r\n            vo.updateHeight()\r\n\r\n        },\r\n\r\n        updateHeight: function() {\r\n            //console.log('methods updateHeight')\r\n\r\n            let vo = this\r\n\r\n            //check\r\n            if (vo.editor === null) {\r\n                return\r\n            }\r\n\r\n            vo.$nextTick(() => {\r\n\r\n                //ele\r\n                let eleContent = get(vo.editor, 'ui.view.editable.element') //可編輯區是element已通過v-deep設為100%\r\n                let ele = get(eleContent, 'parentNode') //要把height設定至父層的高度才能響應調整\r\n\r\n                //update height\r\n                if (ele) {\r\n                    ele.style.height = vo.height + 'px'\r\n                }\r\n\r\n            })\r\n\r\n        },\r\n\r\n    },\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n::v-deep .ck-content {\r\n    height:100%;\r\n}\r\n</style>\r\n"]},media:void 0})}),Fn,"data-v-2c3abb4c",false,undefined,!1,Ln,void 0,void 0)}));
//# sourceMappingURL=w-ckeditor-vue.umd.js.map