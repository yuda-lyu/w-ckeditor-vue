/*!
 * w-ckeditor-vue v1.0.12
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a["w-ckeditor-vue"]=b())})(this,function(){'use strict';function b(a){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},b(a)}function c(a,b){var c=j?b.media||"default":a,e=k[c]||(k[c]={ids:new Set,styles:[]});if(!e.ids.has(a)){e.ids.add(a);var f=b.source;if(b.map&&(f+="\n/*# sourceURL="+b.map.sources[0]+" */",f+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(b.map))))+" */"),e.element||(e.element=document.createElement("style"),e.element.type="text/css",b.media&&e.element.setAttribute("media",b.media),void 0===d&&(d=document.head||document.getElementsByTagName("head")[0]),d.appendChild(e.element)),"styleSheet"in e.element)e.styles.push(f),e.element.styleSheet.cssText=e.styles.filter(Boolean).join("\n");else{var g=e.ids.size-1,h=document.createTextNode(f),i=e.element.childNodes;i[g]&&e.element.removeChild(i[g]),i.length?e.element.insertBefore(h,i[g]):e.element.appendChild(h)}}}(function(a){a.zh=Object.assign(a.zh||{},{a:"\u7121\u6CD5\u4E0A\u50B3\u6A94\u6848\uFF1A",b:"Image toolbar",c:"Table toolbar",d:"\u7C97\u9AD4",e:"\u659C\u9AD4",f:"\u584A\u5F15\u7528",g:"\u63D2\u5165\u5716\u7247\u6216\u6A94\u6848",h:"\u9078\u53D6\u6A19\u984C",i:"\u6A19\u984C",j:"\u5716\u7247\u5C0F\u5DE5\u5177",k:"\u5B8C\u6574\u5927\u5C0F\u5716\u7247",l:"\u5074\u908A\u5716\u7247",m:"\u5411\u5DE6\u5C0D\u9F4A\u5716\u7247",n:"\u7F6E\u4E2D\u5716\u7247",o:"\u5411\u53F3\u5C0D\u9F4A\u5716\u7247",p:"\u63D2\u5165\u5716\u7247",q:"\u6709\u7DE8\u865F\u7684\u6E05\u55AE",r:"\u9805\u76EE\u7B26\u865F\u6E05\u55AE",s:"\u63D2\u5165\u8868\u683C",t:"\u6A19\u984C\u6B04",u:"\u63D2\u5165\u5DE6\u65B9\u6B04",v:"\u63D2\u5165\u53F3\u65B9\u6B04",w:"\u522A\u9664\u6B04",x:"\u6B04",y:"\u6A19\u984C\u5217",z:"\u63D2\u5165\u4E0B\u65B9\u5217",aa:"\u63D2\u5165\u4E0A\u65B9\u5217",ab:"\u522A\u9664\u5217",ac:"\u5217",ad:"\u5408\u4F75\u4E0A\u65B9\u5132\u5B58\u683C",ae:"\u5408\u4F75\u53F3\u65B9\u5132\u5B58\u683C",af:"\u5408\u4F75\u4E0B\u65B9\u5132\u5B58\u683C",ag:"\u5408\u4F75\u5DE6\u65B9\u5132\u5B58\u683C",ah:"\u5782\u76F4\u5206\u5272\u5132\u5B58\u683C",ai:"\u6C34\u5E73\u5206\u5272\u5132\u5B58\u683C",aj:"\u5408\u4F75\u5132\u5B58\u683C",ak:"\u8F38\u5165\u5716\u7247\u8AAA\u660E",al:"\u4E0A\u50B3\u5931\u6557",am:"\u5F71\u97F3\u5C0F\u5DE5\u5177",an:"\u63D2\u5165\u5F71\u97F3",ao:"URL\u4E0D\u80FD\u7A7A\u767D\u3002",ap:"\u5F71\u97F3URL\u4E0D\u652F\u63F4\u3002",aq:"\u9023\u7D50",ar:"\u7121\u6CD5\u53D6\u5F97\u91CD\u8A2D\u5927\u5C0F\u7684\u5716\u7247URL",as:"\u9078\u64C7\u91CD\u8A2D\u5927\u5C0F\u7684\u5716\u7247\u5931\u6557",at:"\u7121\u6CD5\u5728\u9019\u4F4D\u7F6E\u63D2\u5165\u5716\u7247",au:"\u63D2\u5165\u5716\u7247\u5931\u6557",av:"Widget toolbar",aw:"\u6B63\u5728\u4E0A\u50B3",ax:"\u5728\u65B0\u8996\u7A97\u958B\u555F",ay:"\u53EF\u4E0B\u8F09",az:"\u53D6\u6D88\u9023\u7D50",ba:"\u7DE8\u8F2F\u9023\u7D50",bb:"\u5728\u65B0\u8996\u7A97\u958B\u555F\u9023\u7D50",bc:"\u9023\u7D50\u6C92\u6709URL",bd:"\u5132\u5B58",be:"\u53D6\u6D88",bf:"\u9023\u7D50\u02D9 URL",bg:"\u5728\u8F38\u5165\u6846\u8CBC\u4E0A\u5F71\u97F3URL\u3002",bh:"\u63D0\u793A\uFF1A\u5728\u5167\u5BB9\u8CBC\u4E0AURL\u66F4\u5FEB\u5D01\u5165\u3002",bi:"\u5F71\u97F3URL",bj:"\u53D6\u6D88",bk:"\u91CD\u505A",bl:"Editor toolbar",bm:"\u8C50\u5BCC\u6587\u5B57\u7DE8\u8F2F\u5668\uFF0C%0",bn:"\u8C50\u5BCC\u6587\u5B57\u7DE8\u8F2F\u5668",bo:"Dropdown toolbar",bp:"%0/%1",bq:"\u4E0A\u4E00",br:"\u4E0B\u4E00",bs:"\u8B8A\u66F4\u5716\u7247\u7684\u6587\u5B57\u66FF\u4EE3",bt:"\u6BB5\u843D",bu:"\u6A19\u984C 1",bv:"\u6A19\u984C 2",bw:"\u6A19\u984C 3",bx:"\u6A19\u984C 4",by:"\u6A19\u984C 5",bz:"\u6A19\u984C 6",ca:"\u6587\u5B57\u66FF\u4EE3"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));var d,e=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a){!function(b,c){a.exports=c()}(window,function(){return function(a){function c(b){if(d[b])return d[b].exports;var e=d[b]={i:b,l:!1,exports:{}};return a[b].call(e.exports,e,e.exports,c),e.l=!0,e.exports}var d={};return c.m=a,c.c=d,c.d=function(a,b,d){c.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:d})},c.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,d){if(1&d&&(a=c(a)),8&d)return a;if(4&d&&"object"==b(a)&&a&&a.__esModule)return a;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&d&&"string"!=typeof a)for(var f in a)c.d(e,f,function(b){return a[b]}.bind(null,f));return e},c.n=function(a){var b=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(b,"a",b),b},c.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},c.p="",c(c.s=2)}([function(a,c,d){(function(a){var d="object"==b(a)&&a&&a.Object===Object&&a;c.a=d}).call(this,d(1))},function(a){var c=function(){return this}();try{c=c||new Function("return this")()}catch(a){"object"==("undefined"==typeof window?"undefined":b(window))&&(c=window)}a.exports=c},function(h,k,e){e.r(k);var q=function(a){var c=b(a);return null!=a&&("object"==c||"function"==c)},n=e(0),i="object"==("undefined"==typeof self?"undefined":b(self))&&self&&self.Object===Object&&self,o=n.a||i||Function("return this")(),r=function(){return o.Date.now()},a=o.Symbol,c=Object.prototype,f=c.hasOwnProperty,s=c.toString,l=a?a.toStringTag:void 0,d=function(a){var b=f.call(a,l),c=a[l];try{a[l]=void 0;var d=!0}catch(a){}var e=s.call(a);return d&&(b?a[l]=c:delete a[l]),e},p=Object.prototype.toString,u=function(a){return p.call(a)},v=a?a.toStringTag:void 0,m=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":v&&v in Object(a)?d(a):u(a)},g=function(a){return null!=a&&"object"==b(a)},j=function(a){return"symbol"==b(a)||g(a)&&m(a)=="[object Symbol]"},w=NaN,x=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,z=/^0b[01]+$/i,A=/^0o[0-7]+$/i,B=parseInt,C=function(a){if("number"==typeof a)return a;if(j(a))return w;if(q(a)){var b="function"==typeof a.valueOf?a.valueOf():a;a=q(b)?b+"":b}if("string"!=typeof a)return 0===a?a:+a;a=a.replace(x,"");var c=z.test(a);return c||A.test(a)?B(a.slice(2),c?2:8):y.test(a)?w:+a},D=Math.max,E=Math.min,G=function(a,j,k){function n(b){var c=g,d=x;return g=x=void 0,F=b,z=a.apply(d,c)}function w(a){var b=a-B;return void 0===B||b>=j||0>b||H&&a-F>=y}function b(){var a=r();return w(a)?h(a):void(A=setTimeout(b,function(a){var b=j-(a-B);return H?E(b,y-(a-F)):b}(a)))}function h(a){return A=void 0,I&&g?n(a):(g=x=void 0,z)}function m(){var a=r(),c=w(a);if(g=arguments,x=this,B=a,c){if(void 0===A)return function(a){return F=a,A=setTimeout(b,j),G?n(a):z}(B);if(H)return A=setTimeout(b,j),n(B)}return void 0===A&&(A=setTimeout(b,j)),z}var g,x,y,z,A,B,F=0,G=!1,H=!1,I=!0;if("function"!=typeof a)throw new TypeError("Expected a function");return j=C(j)||0,q(k)&&(G=!!k.leading,y=(H="maxWait"in k)?D(C(k.maxWait)||0,j):y,I="trailing"in k?!!k.trailing:I),m.cancel=function(){void 0!==A&&clearTimeout(A),F=0,g=B=x=A=void 0},m.flush=function(){return void 0===A?z:h(r())},m},F={name:"ckeditor",render:function(a){return a(this.tagName,{domProps:{innerHTML:this.value||""}})},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:function(){return{}}},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:function(){return{instance:null,$_lastEditorData:{type:String,default:""}}},mounted:function(){var a=this;this.editor.create(this.$el,this.config).then(function(b){a.instance=b,b.isReadOnly=a.disabled,a.$_setUpEditorEvents(),a.$emit("ready",b)})["catch"](function(a){console.error(a)})},beforeDestroy:function(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{value:function(a,b){a!==b&&a!==this.$_lastEditorData&&this.instance.setData(a)},disabled:function(a){this.instance.isReadOnly=a}},methods:{$_setUpEditorEvents:function(){var a=this,b=this.instance;b.model.document.on("change:data",G(function(c){var d=a.$_lastEditorData=b.getData();a.$emit("input",d,c,b)},300)),b.editing.view.document.on("focus",function(c){a.$emit("focus",c,b)}),b.editing.view.document.on("blur",function(c){a.$emit("blur",c,b)})}}};k["default"]={install:function(a){a.component("ckeditor",F)},component:F}}])["default"]})}),f=function(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a["default"]:a}(e),g=e.CKEditor,h={language:"zh"},i={components:{cceditor:f.component},props:{value:{type:String},editor:{type:[Object,Function],default:function(){return window.ClassicEditor}},settings:{type:Object,default:function(){return h}},editable:{type:Boolean,default:!0}},data:function(){return{}},mounted:function(){},computed:{},methods:{}},j="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase()),k={};var l=function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticStyle:{display:"inline-block"}},[c("cceditor",{attrs:{editor:a.editor,config:a.settings,value:a.value,disabled:!a.editable},on:{input:function(b){a.$emit("input",b)}}})],1)};l._withStripped=!0;var m=function(a,b,c,d,e,f,g,h,i,j){"boolean"!=typeof g&&(i=h,h=g,g=!1);var k="function"==typeof c?c.options:c;a&&a.render&&(k.render=a.render,k.staticRenderFns=a.staticRenderFns,k._compiled=!0,e&&(k.functional=!0)),d&&(k._scopeId=d);var l;if(f?(l=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,a||"undefined"==typeof __VUE_SSR_CONTEXT__||(a=__VUE_SSR_CONTEXT__),b&&b.call(this,i(a)),a&&a._registeredComponents&&a._registeredComponents.add(f)},k._ssrRegister=l):b&&(l=g?function(){b.call(this,j(this.$root.$options.shadowRoot))}:function(a){b.call(this,h(a))}),l)if(k.functional){var m=k.render;k.render=function(a,b){return l.call(b),m(a,b)}}else{var n=k.beforeCreate;k.beforeCreate=n?[].concat(n,l):[l]}return c}({render:l,staticRenderFns:[]},function(a){a&&a("data-v-394da51f_0",{source:"\n[data-v-394da51f] .ck-content {\r\n    height:250px;\n}\r\n",map:{version:3,sources:["D:\\\u958B\u6E90-JS-101-1-w-ckeditor-vue\\w-ckeditor-vue\\src\\WCkeditorVue.vue"],names:[],mappings:";AAoEA;IACA,YAAA;AACA",file:"WCkeditorVue.vue",sourcesContent:["<template>\r\n    <div style=\"display:inline-block;\">\r\n\r\n        <cceditor\r\n            :editor=\"editor\"\r\n            :config=\"settings\"\r\n            :value=\"value\"\r\n            :disabled=\"!editable\"\r\n            @input=\"function(v){$emit('input',v)}\"\r\n        ></cceditor>\r\n\r\n    </div>\r\n</template>\r\n\r\n<script>\r\n//import ClassicEditor from '@ckeditor/ckeditor5-build-classic'\r\nimport '@ckeditor/ckeditor5-build-classic/build/translations/zh'\r\nimport CKEditor from '@ckeditor/ckeditor5-vue'\r\n\r\nlet def_settings = {\r\n    language: 'zh',\r\n    //toolbar: [ 'heading', '|', 'bold', 'italic', 'link', '|', 'subscript', 'superscript', '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify', '|', 'bulletedList', 'numberedList', 'blockQuote', '|', 'Undo', 'Redo' ],\r\n}\r\n\r\n/**\r\n * @vue-prop {String} value \u8F38\u5165\u5BCC\u6587\u672C\u5B57\u4E32\r\n * @vue-prop {String} settings \u8F38\u5165ckeditor\u8A2D\u5B9A\u7269\u4EF6\uFF0C\u9810\u8A2D\u503C\u8A73\u898B\u539F\u59CB\u78BC\r\n * @vue-prop {String} [editable=true] \u8F38\u5165\u662F\u5426\u5141\u8A31\u7DE8\u8F2F\uFF0C\u9810\u8A2Dtrue\r\n */\r\nexport default {\r\n    components: {\r\n        'cceditor': CKEditor.component\r\n    },\r\n    props: {\r\n        value: {\r\n            type: String,\r\n        },\r\n        editor: {\r\n            type: [Object, Function],\r\n            default: function() {\r\n                return window['ClassicEditor']\r\n            }\r\n        },\r\n        settings: {\r\n            type: Object,\r\n            default: function() {\r\n                return def_settings\r\n            }\r\n        },\r\n        editable: {\r\n            type: Boolean,\r\n            default: true,\r\n        },\r\n    },\r\n    data: function() {\r\n        return {\r\n        }\r\n    },\r\n    mounted: function() {\r\n    },\r\n    computed: {\r\n    },\r\n    methods: {\r\n    },\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n::v-deep .ck-content {\r\n    height:250px;\r\n}\r\n</style>\r\n"]},media:void 0})},i,"data-v-394da51f",!1,void 0,function(){return function(a,b){return c(a,b)}},void 0);return m});
//# sourceMappingURL=w-ckeditor-vue.umd.js.map
