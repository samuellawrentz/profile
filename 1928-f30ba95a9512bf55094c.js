/*! For license information please see 1928-f30ba95a9512bf55094c.js.LICENSE.txt */
(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[1928],{1928:function(t,e,n){"use strict";function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.r(e),n.d(e,{GiscusWidget:function(){return zt}});var r=n(4942),o=n(7326),s=n(1120);function a(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=(0,s.Z)(t)););return t}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=a(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},l.apply(this,arguments)}var u,c,h=n(885),d=n(2982),f=n(5861),v=n(136),p=n(6215),y=n(2407),g=n(5671),_=n(3144),m=(n(4944),n(3792),n(5743),n(7757)),$=n.n(m);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=(0,s.Z)(t);if(e){var r=(0,s.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,p.Z)(this,n)}}function k(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var w,C,O=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,P=Symbol(),U=new WeakMap,Z=function(){function t(e,n,i){if((0,g.Z)(this,t),this._$cssResult$=!0,i!==P)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}return(0,_.Z)(t,[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(O&&void 0===t){var n=void 0!==e&&1===e.length;n&&(t=U.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&U.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}]),t}(),x=O?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,n="",i=k(t.cssRules);try{for(i.s();!(e=i.n()).done;){n+=e.value.cssText}}catch(r){i.e(r)}finally{i.f()}return function(t){return new Z("string"==typeof t?t:t+"",void 0,P)}(n)}(t):t},R=window.trustedTypes,T=R?R.emptyScript:"",N=window.reactiveElementPolyfillSupport,I={toAttribute:function(t,e){switch(e){case Boolean:t=t?T:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(i){n=null}}return n}},M=function(t,e){return e!==t&&(e==e||t==t)},j={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:M},H=function(t){(0,v.Z)(i,t);var e,n=S(i);function i(){var t;return(0,g.Z)(this,i),(t=n.call(this))._$Ei=new Map,t.isUpdatePending=!1,t.hasUpdated=!1,t._$El=null,t.u(),t}return(0,_.Z)(i,[{key:"u",value:function(){var t,e=this;this._$E_=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}},{key:"_$Eg",value:function(){var t=this;this.constructor.elementProperties.forEach((function(e,n){t.hasOwnProperty(n)&&(t._$Ei.set(n,t[n]),delete t[n])}))}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return function(t,e){O?t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet})):e.forEach((function(e){var n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)}))}(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,n){this._$AK(t,n)}},{key:"_$EO",value:function(t,e){var n,i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j,o=this.constructor._$Ep(t,r);if(void 0!==o&&!0===r.reflect){var s=(null!==(i=null===(n=r.converter)||void 0===n?void 0:n.toAttribute)&&void 0!==i?i:I.toAttribute)(e,r.type);this._$El=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}},{key:"_$AK",value:function(t,e){var n,i,r=this.constructor,o=r._$Ev.get(t);if(void 0!==o&&this._$El!==o){var s=r.getPropertyOptions(o),a=s.converter,l=null!==(i=null!==(n=null==a?void 0:a.fromAttribute)&&void 0!==n?n:"function"==typeof a?a:null)&&void 0!==i?i:I.fromAttribute;this._$El=o,this[o]=l(e,s.type),this._$El=null}}},{key:"requestUpdate",value:function(t,e,n){var i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||M)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}},{key:"_$Ej",value:(e=(0,f.Z)($().mark((function t(){var e;return $().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$E_;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])}))),function(){return e.apply(this,arguments)})},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){var t,e=this;if(this.isUpdatePending){this.hasUpdated,this._$Ei&&(this._$Ei.forEach((function(t,n){return e[n]=t})),this._$Ei=void 0);var n=!1,i=this._$AL;try{(n=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(r){throw n=!1,this._$Ek(),r}n&&this._$AE(i)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$Ek",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$E_}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;void 0!==this._$EC&&(this._$EC.forEach((function(t,n){return e._$EO(n,e[n],t)})),this._$EC=void 0),this._$Ek()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}},{key:"observedAttributes",get:function(){var t=this;this.finalize();var e=[];return this.elementProperties.forEach((function(n,i){var r=t._$Ep(i,n);void 0!==r&&(t._$Ev.set(r,i),e.push(r))})),e}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}},{key:"getPropertyDescriptor",value:function(t,e,n){return{get:function(){return this[e]},set:function(i){var r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this.elementProperties.get(t)||j}},{key:"finalize",value:function(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;var t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){var e,n=this.properties,i=k([].concat((0,d.Z)(Object.getOwnPropertyNames(n)),(0,d.Z)(Object.getOwnPropertySymbols(n))));try{for(i.s();!(e=i.n()).done;){var r=e.value;this.createProperty(r,n[r])}}catch(o){i.e(o)}finally{i.f()}}return this.elementStyles=this.finalizeStyles(this.styles),!0}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var n,i=k(new Set(t.flat(1/0).reverse()));try{for(i.s();!(n=i.n()).done;){var r=n.value;e.unshift(x(r))}}catch(o){i.e(o)}finally{i.f()}}else void 0!==t&&e.push(x(t));return e}},{key:"_$Ep",value:function(t,e){var n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}}]),i}((0,y.Z)(HTMLElement));H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},null==N||N({ReactiveElement:H}),(null!==(w=globalThis.reactiveElementVersions)&&void 0!==w?w:globalThis.reactiveElementVersions=[]).push("1.3.4");var z,L=globalThis.trustedTypes,D=L?L.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,Y="lit$".concat((Math.random()+"").slice(9),"$"),G="?"+Y,B="<".concat(G,">"),W=document,K=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return W.createComment(t)},V=function(t){return null===t||"object"!=typeof t&&"function"!=typeof t},F=Array.isArray,q=function(t){return F(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator])},J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,tt=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),et=/'/g,nt=/"/g,it=/^(?:script|style|textarea|title)$/i,rt=(z=1,function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return{_$litType$:z,strings:t,values:n}}),ot=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),at=new WeakMap,lt=W.createTreeWalker(W,129,null,!1),ut=function(){function t(e,n){var i,r=e.strings,o=e._$litType$;(0,g.Z)(this,t),this.parts=[];var s=0,a=0,l=r.length-1,u=this.parts,c=function(t,e){for(var n,i=t.length-1,r=[],o=2===e?"<svg>":"",s=J,a=0;a<i;a++){for(var l=t[a],u=void 0,c=void 0,h=-1,d=0;d<l.length&&(s.lastIndex=d,null!==(c=s.exec(l)));)d=s.lastIndex,s===J?"!--"===c[1]?s=Q:void 0!==c[1]?s=X:void 0!==c[2]?(it.test(c[2])&&(n=RegExp("</"+c[2],"g")),s=tt):void 0!==c[3]&&(s=tt):s===tt?">"===c[0]?(s=null!=n?n:J,h=-1):void 0===c[1]?h=-2:(h=s.lastIndex-c[2].length,u=c[1],s=void 0===c[3]?tt:'"'===c[3]?nt:et):s===nt||s===et?s=tt:s===Q||s===X?s=J:(s=tt,n=void 0);var f=s===tt&&t[a+1].startsWith("/>")?" ":"";o+=s===J?l+B:h>=0?(r.push(u),l.slice(0,h)+"$lit$"+l.slice(h)+Y+f):l+Y+(-2===h?(r.push(void 0),a):f)}var v=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==D?D.createHTML(v):v,r]}(r,o),f=(0,h.Z)(c,2),v=f[0],p=f[1];if(this.el=t.createElement(v,n),lt.currentNode=this.el.content,2===o){var y=this.el.content,_=y.firstChild;_.remove(),y.append.apply(y,(0,d.Z)(_.childNodes))}for(;null!==(i=lt.nextNode())&&u.length<l;){if(1===i.nodeType){if(i.hasAttributes()){var m,$=[],A=k(i.getAttributeNames());try{for(A.s();!(m=A.n()).done;){var b=m.value;if(b.endsWith("$lit$")||b.startsWith(Y)){var S=p[a++];if($.push(b),void 0!==S){var E=i.getAttribute(S.toLowerCase()+"$lit$").split(Y),w=/([.?@])?(.*)/.exec(S);u.push({type:1,index:s,name:w[2],strings:E,ctor:"."===w[1]?yt:"?"===w[1]?_t:"@"===w[1]?mt:pt})}else u.push({type:6,index:s})}}}catch(T){A.e(T)}finally{A.f()}for(var C=0,O=$;C<O.length;C++){var P=O[C];i.removeAttribute(P)}}if(it.test(i.tagName)){var U=i.textContent.split(Y),Z=U.length-1;if(Z>0){i.textContent=L?L.emptyScript:"";for(var x=0;x<Z;x++)i.append(U[x],K()),lt.nextNode(),u.push({type:2,index:++s});i.append(U[Z],K())}}}else if(8===i.nodeType)if(i.data===G)u.push({type:2,index:s});else for(var R=-1;-1!==(R=i.data.indexOf(Y,R+1));)u.push({type:7,index:s}),R+=Y.length-1;s++}}return(0,_.Z)(t,null,[{key:"createElement",value:function(t,e){var n=W.createElement("template");return n.innerHTML=t,n}}]),t}();function ct(t,e){var n,i,r,o,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0;if(e===ot)return e;var l=void 0!==a?null===(n=s._$Cl)||void 0===n?void 0:n[a]:s._$Cu,u=V(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==u&&(null===(i=null==l?void 0:l._$AO)||void 0===i||i.call(l,!1),void 0===u?l=void 0:(l=new u(t))._$AT(t,s,a),void 0!==a?(null!==(r=(o=s)._$Cl)&&void 0!==r?r:o._$Cl=[])[a]=l:s._$Cu=l),void 0!==l&&(e=ct(t,l._$AS(t,e.values),l,a)),e}var ht,dt,ft=function(){function t(e,n){(0,g.Z)(this,t),this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=n}return(0,_.Z)(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"p",value:function(t){var e,n=this._$AD,i=n.el.content,r=n.parts,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:W).importNode(i,!0);lt.currentNode=o;for(var s=lt.nextNode(),a=0,l=0,u=r[0];void 0!==u;){if(a===u.index){var c=void 0;2===u.type?c=new vt(s,s.nextSibling,this,t):1===u.type?c=new u.ctor(s,u.name,u.strings,this,t):6===u.type&&(c=new $t(s,this,t)),this.v.push(c),u=r[++l]}a!==(null==u?void 0:u.index)&&(s=lt.nextNode(),a++)}return o}},{key:"m",value:function(t){var e,n=0,i=k(this.v);try{for(i.s();!(e=i.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}catch(o){i.e(o)}finally{i.f()}}}]),t}(),vt=function(){function t(e,n,i,r){var o;(0,g.Z)(this,t),this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$C_=null===(o=null==r?void 0:r.isConnected)||void 0===o||o}return(0,_.Z)(t,[{key:"_$AU",get:function(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}},{key:"parentNode",get:function(){var t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;t=ct(this,t,e),V(t)?t===st||null==t||""===t?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==ot&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):q(t)?this.S(t):this.T(t)}},{key:"j",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._$AB;return this._$AA.parentNode.insertBefore(t,e)}},{key:"k",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}},{key:"T",value:function(t){this._$AH!==st&&V(this._$AH)?this._$AA.nextSibling.data=t:this.k(W.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,n=t.values,i=t._$litType$,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ut.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(n);else{var o=new ft(r,this),s=o.p(this.options);o.m(n),this.k(s),this._$AH=o}}},{key:"_$AC",value:function(t){var e=at.get(t.strings);return void 0===e&&at.set(t.strings,e=new ut(t)),e}},{key:"S",value:function(e){F(this._$AH)||(this._$AH=[],this._$AR());var n,i,r=this._$AH,o=0,s=k(e);try{for(s.s();!(i=s.n()).done;){var a=i.value;o===r.length?r.push(n=new t(this.j(K()),this.j(K()),this,this.options)):n=r[o],n._$AI(a),o++}}catch(l){s.e(l)}finally{s.f()}o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}},{key:"_$AR",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,n=arguments.length>1?arguments[1]:void 0;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,n);e&&e!==this._$AB;){var i=e.nextSibling;e.remove(),e=i}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}]),t}(),pt=function(){function t(e,n,i,r,o){(0,g.Z)(this,t),this.type=1,this._$AH=st,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=st}return(0,_.Z)(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=this.strings,o=!1;if(void 0===r)t=ct(this,t,e,0),(o=!V(t)||t!==this._$AH&&t!==ot)&&(this._$AH=t);else{var s,a,l=t;for(t=r[0],s=0;s<r.length-1;s++)(a=ct(this,l[n+s],e,s))===ot&&(a=this._$AH[s]),o||(o=!V(a)||a!==this._$AH[s]),a===st?t=st:t!==st&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.P(t)}},{key:"P",value:function(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}]),t}(),yt=function(t){(0,v.Z)(n,t);var e=S(n);function n(){var t;return(0,g.Z)(this,n),(t=e.apply(this,arguments)).type=3,t}return(0,_.Z)(n,[{key:"P",value:function(t){this.element[this.name]=t===st?void 0:t}}]),n}(pt),gt=L?L.emptyScript:"",_t=function(t){(0,v.Z)(n,t);var e=S(n);function n(){var t;return(0,g.Z)(this,n),(t=e.apply(this,arguments)).type=4,t}return(0,_.Z)(n,[{key:"P",value:function(t){t&&t!==st?this.element.setAttribute(this.name,gt):this.element.removeAttribute(this.name)}}]),n}(pt),mt=function(t){(0,v.Z)(n,t);var e=S(n);function n(t,i,r,o,s){var a;return(0,g.Z)(this,n),(a=e.call(this,t,i,r,o,s)).type=5,a}return(0,_.Z)(n,[{key:"_$AI",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this;if((t=null!==(e=ct(this,t,n,0))&&void 0!==e?e:st)!==ot){var i=this._$AH,r=t===st&&i!==st||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==st&&(i===st||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}]),n}(pt),$t=function(){function t(e,n,i){(0,g.Z)(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}return(0,_.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){ct(this,t)}}]),t}(),At=window.litHtmlPolyfillSupport;null==At||At(ut,vt),(null!==(C=globalThis.litHtmlVersions)&&void 0!==C?C:globalThis.litHtmlVersions=[]).push("2.2.7");var bt=function(t){(0,v.Z)(n,t);var e=S(n);function n(){var t;return(0,g.Z)(this,n),(t=e.apply(this,arguments)).renderOptions={host:(0,o.Z)(t)},t._$Do=void 0,t}return(0,_.Z)(n,[{key:"createRenderRoot",value:function(){var t,e,i=l((0,s.Z)(n.prototype),"createRenderRoot",this).call(this);return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),l((0,s.Z)(n.prototype),"update",this).call(this,t),this._$Do=function(t,e,n){var i,r,o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e,s=o._$litPart$;if(void 0===s){var a=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new vt(e.insertBefore(K(),a),a,void 0,null!=n?n:{})}return s._$AI(t),s}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;l((0,s.Z)(n.prototype),"connectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;l((0,s.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return ot}}]),n}(H);bt.finalized=!0,bt._$litElement$=!0,null===(ht=globalThis.litElementHydrateSupport)||void 0===ht||ht.call(globalThis,{LitElement:bt});var St=globalThis.litElementPolyfillSupport;null==St||St({LitElement:bt}),(null!==(dt=globalThis.litElementVersions)&&void 0!==dt?dt:globalThis.litElementVersions=[]).push("3.2.2");var kt;function Et(t){return function(e,n){return void 0!==n?(i=t,r=n,void e.constructor.createProperty(r,i)):function(t,e){return"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?b(b({},e),{},{finisher:function(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(n){n.createProperty(e.key,t)}}}(t,e);var i,r}}null===(kt=window.HTMLSlotElement)||void 0===kt||kt.prototype.assignedElements;var wt=2,Ct=function t(e,n){var i,r,o=e._$AN;if(void 0===o)return!1;var s,a=k(o);try{for(a.s();!(s=a.n()).done;){var l=s.value;null===(r=(i=l)._$AO)||void 0===r||r.call(i,n,!1),t(l,n)}}catch(u){a.e(u)}finally{a.f()}return!0},Ot=function(t){var e,n;do{if(void 0===(e=t._$AM))break;(n=e._$AN).delete(t),t=e}while(0===(null==n?void 0:n.size))},Pt=function(t){for(var e;e=t._$AM;t=e){var n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),xt(e)}};function Ut(t){void 0!==this._$AN?(Ot(this),this._$AM=t,Pt(this)):this._$AM=t}function Zt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(i))for(var o=n;o<i.length;o++)Ct(i[o],!1),Ot(i[o]);else null!=i&&(Ct(i,!1),Ot(i));else Ct(this,t)}var xt=function(t){var e,n,i,r;t.type==wt&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=Zt),null!==(n=(r=t)._$AQ)&&void 0!==n||(r._$AQ=Ut))},Rt=function(t){(0,v.Z)(n,t);var e=S(n);function n(){var t;return(0,g.Z)(this,n),(t=e.apply(this,arguments))._$AN=void 0,t}return(0,_.Z)(n,[{key:"_$AT",value:function(t,e,i){l((0,s.Z)(n.prototype),"_$AT",this).call(this,t,e,i),Pt(this),this.isConnected=t._$AU}},{key:"_$AO",value:function(t){var e,n,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t!==this.isConnected&&(this.isConnected=t,t?null===(e=this.reconnected)||void 0===e||e.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),i&&(Ct(this,t),Ot(this))}},{key:"setValue",value:function(t){if(function(t){return void 0===t.strings}(this._$Ct))this._$Ct._$AI(t,this);else{var e=(0,d.Z)(this._$Ct._$AH);e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}},{key:"disconnected",value:function(){}},{key:"reconnected",value:function(){}}]),n}(function(){function t(e){(0,g.Z)(this,t)}return(0,_.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AT",value:function(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}},{key:"_$AS",value:function(t,e){return this.update(t,e)}},{key:"update",value:function(t,e){return this.render.apply(this,(0,d.Z)(e))}}]),t}()),Tt=(0,_.Z)((function t(){(0,g.Z)(this,t)})),Nt=new WeakMap,It=function(t){return function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return{_$litDirective$:t,values:n}}}(function(t){(0,v.Z)(n,t);var e=S(n);function n(){return(0,g.Z)(this,n),e.apply(this,arguments)}return(0,_.Z)(n,[{key:"render",value:function(t){return st}},{key:"update",value:function(t,e){var n,i=(0,h.Z)(e,1)[0],r=i!==this.Y;return r&&void 0!==this.Y&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=i,this.dt=null===(n=t.options)||void 0===n?void 0:n.host,this.rt(this.ct=t.element)),st}},{key:"rt",value:function(t){var e;if("function"==typeof this.Y){var n=null!==(e=this.dt)&&void 0!==e?e:globalThis,i=Nt.get(n);void 0===i&&(i=new WeakMap,Nt.set(n,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}},{key:"lt",get:function(){var t,e,n;return"function"==typeof this.Y?null===(e=Nt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(n=this.Y)||void 0===n?void 0:n.value}},{key:"disconnected",value:function(){this.lt===this.ct&&this.rt(void 0)}},{key:"reconnected",value:function(){this.rt(this.ct)}}]),n}(Rt)),Mt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,Ht=function(t,e,n,i){for(var r,o=i>1?void 0:i?jt(e,n):e,s=t.length-1;s>=0;s--)(r=t[s])&&(o=(i?r(e,n,o):r(o))||o);return i&&o&&Mt(e,n,o),o},zt=function(t){(0,v.Z)(n,t);var e=S(n);function n(){var t;return(0,g.Z)(this,n),(t=e.call(this)).GISCUS_SESSION_KEY="giscus-session",t.GISCUS_DEFAULT_HOST="https://giscus.app",t.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",t.__session="",t._iframeRef=new Tt,t.messageEventHandler=t.handleMessageEvent.bind((0,o.Z)(t)),t.host=t.GISCUS_DEFAULT_HOST,t.strict="0",t.reactionsEnabled="1",t.emitMetadata="0",t.inputPosition="bottom",t.theme="light",t.lang="en",t.loading="eager",t.setupSession(),window.addEventListener("message",t.messageEventHandler),t}return(0,_.Z)(n,[{key:"iframeRef",get:function(){return this._iframeRef.value}},{key:"connectedCallback",value:function(){l((0,s.Z)(n.prototype),"connectedCallback",this).call(this)}},{key:"disconnectedCallback",value:function(){l((0,s.Z)(n.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("message",this.messageEventHandler)}},{key:"_formatError",value:function(t){return'[giscus] An error occurred. Error message: "'.concat(t,'".')}},{key:"setupSession",value:function(){var t=location.href,e=new URL(t),n=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(n)try{this.__session=JSON.parse(n||"")||""}catch(r){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn("".concat(this._formatError(null==r?void 0:r.message)," Session has been cleared."))}}},{key:"handleMessageEvent",value:function(t){if(t.origin===this.host){var e=t.data;if("object"==typeof e&&e.giscus&&(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height="".concat(e.giscus.resizeHeight,"px")),e.giscus.error)){var n=e.giscus.error;if(n.includes("Bad credentials")||n.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn("".concat(this._formatError(n)," Session has been cleared.")),void this.update(new Map);console.error("".concat(this._formatError(n)," No session is stored initially. ").concat(this.ERROR_SUGGESTION))}n.includes("Discussion not found")?console.warn("[giscus] ".concat(n,". A new discussion will be created if a comment/reaction is submitted.")):console.error("".concat(this._formatError(n)," ").concat(this.ERROR_SUGGESTION))}}}},{key:"sendMessage",value:function(t){var e,n;null==(n=null==(e=this.iframeRef)?void 0:e.contentWindow)||n.postMessage({giscus:t},this.host)}},{key:"updateConfig",value:function(){var t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}},{key:"requestUpdate",value:function(t,e,i){this.hasUpdated&&"host"!==t?this.updateConfig():l((0,s.Z)(n.prototype),"requestUpdate",this).call(this,t,e,i)}},{key:"getMetaContent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"meta[property='og:".concat(t,"'],"):"",i=document.querySelector(n+"meta[name='".concat(t,"']"));return i?i.content:""}},{key:"_getCleanedUrl",value:function(){var t=new URL(location.href);return t.searchParams.delete("giscus"),t}},{key:"getTerm",value:function(){switch(this.mapping){case"url":return"".concat(this._getCleanedUrl());case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}},{key:"getNumber",value:function(){return"number"===this.mapping&&this.term||""}},{key:"getIframeSrc",value:function(){var t=this._getCleanedUrl().toString(),e="".concat(t).concat(this.id?"#"+this.id:""),n=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,r={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:n,backLink:i},o=this.lang?"/".concat(this.lang):"",s=new URLSearchParams(r);return"".concat(this.host).concat(o,"/widget?").concat(s)}},{key:"render",value:function(){return rt(u||(u=i(['\n      <iframe\n        title="Comments"\n        scrolling="no"\n        ',"\n        src=","\n        loading=",'\n        part="iframe"\n      ></iframe>\n    '])),It(this._iframeRef),this.getIframeSrc(),this.loading)}}]),n}(bt);zt.styles=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=1===t.length?t[0]:n.reduce((function(e,n,i){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(n)+t[i+1]}),t[0]);return new Z(r,t,P)}(c||(c=i(["\n    :host,\n    iframe {\n      width: 100%;\n      border: none;\n      color-scheme: normal;\n      min-height: 150px;\n    }\n  "]))),Ht([Et({reflect:!0})],zt.prototype,"host",2),Ht([Et({reflect:!0})],zt.prototype,"repo",2),Ht([Et({reflect:!0})],zt.prototype,"repoId",2),Ht([Et({reflect:!0})],zt.prototype,"category",2),Ht([Et({reflect:!0})],zt.prototype,"categoryId",2),Ht([Et({reflect:!0})],zt.prototype,"mapping",2),Ht([Et({reflect:!0})],zt.prototype,"term",2),Ht([Et({reflect:!0})],zt.prototype,"strict",2),Ht([Et({reflect:!0})],zt.prototype,"reactionsEnabled",2),Ht([Et({reflect:!0})],zt.prototype,"emitMetadata",2),Ht([Et({reflect:!0})],zt.prototype,"inputPosition",2),Ht([Et({reflect:!0})],zt.prototype,"theme",2),Ht([Et({reflect:!0})],zt.prototype,"lang",2),Ht([Et({reflect:!0})],zt.prototype,"loading",2),zt=Ht([function(t){return function(e){return"function"==typeof e?(n=t,i=e,window.customElements.define(n,i),i):function(t,e){return{kind:e.kind,elements:e.elements,finisher:function(e){window.customElements.define(t,e)}}}(t,e);var n,i}}("giscus-widget")],zt)},1223:function(t,e,n){var i=n(5112),r=n(30),o=n(3070).f,s=i("unscopables"),a=Array.prototype;null==a[s]&&o(a,s,{configurable:!0,value:r(null)}),t.exports=function(t){a[s][t]=!0}},7475:function(t,e,n){var i=n(3157),r=n(4411),o=n(111),s=n(5112)("species"),a=Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,(r(e)&&(e===a||i(e.prototype))||o(e)&&null===(e=e[s]))&&(e=void 0)),void 0===e?a:e}},5417:function(t,e,n){var i=n(7475);t.exports=function(t,e){return new(i(t))(0===e?0:e)}},648:function(t,e,n){var i=n(1694),r=n(614),o=n(4326),s=n(5112)("toStringTag"),a=Object,l="Arguments"==o(function(){return arguments}());t.exports=i?o:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=a(t),s))?n:l?o(e):"Object"==(i=o(e))&&r(e.callee)?"Arguments":i}},7207:function(t){var e=TypeError;t.exports=function(t){if(t>9007199254740991)throw e("Maximum allowed index exceeded");return t}},6790:function(t,e,n){"use strict";var i=n(3157),r=n(6244),o=n(7207),s=n(9974),a=function(t,e,n,l,u,c,h,d){for(var f,v,p=u,y=0,g=!!h&&s(h,d);y<l;)y in n&&(f=g?g(n[y],y,e):n[y],c>0&&i(f)?(v=r(f),p=a(t,e,f,v,p,c-1)-1):(o(p+1),t[p]=f),p++),y++;return p};t.exports=a},9974:function(t,e,n){var i=n(1702),r=n(9662),o=n(4374),s=i(i.bind);t.exports=function(t,e){return r(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},3157:function(t,e,n){var i=n(4326);t.exports=Array.isArray||function(t){return"Array"==i(t)}},4411:function(t,e,n){var i=n(1702),r=n(7293),o=n(614),s=n(648),a=n(5005),l=n(2788),u=function(){},c=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=i(d.exec),v=!d.exec(u),p=function(t){if(!o(t))return!1;try{return h(u,c,t),!0}catch(e){return!1}},y=function(t){if(!o(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!f(d,l(t))}catch(e){return!0}};y.sham=!0,t.exports=!h||r((function(){var t;return p(p.call)||!p(Object)||!p((function(){t=!0}))||t}))?y:p},30:function(t,e,n){var i,r=n(9670),o=n(6048),s=n(748),a=n(3501),l=n(490),u=n(317),c=n(6200),h=c("IE_PROTO"),d=function(){},f=function(t){return"<script>"+t+"</"+"script>"},v=function(t){t.write(f("")),t.close();var e=t.parentWindow.Object;return t=null,e},p=function(){try{i=new ActiveXObject("htmlfile")}catch(r){}var t,e;p="undefined"!=typeof document?document.domain&&i?v(i):((e=u("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(f("document.F=Object")),t.close(),t.F):v(i);for(var n=s.length;n--;)delete p.prototype[s[n]];return p()};a[h]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=r(t),n=new d,d.prototype=null,n[h]=t):n=p(),void 0===e?n:o.f(n,e)}},6048:function(t,e,n){var i=n(9781),r=n(3353),o=n(3070),s=n(9670),a=n(5656),l=n(1956);e.f=i&&!r?Object.defineProperties:function(t,e){s(t);for(var n,i=a(e),r=l(e),u=r.length,c=0;u>c;)o.f(t,n=r[c++],i[n]);return t}},1956:function(t,e,n){var i=n(6324),r=n(748);t.exports=Object.keys||function(t){return i(t,r)}},1694:function(t,e,n){var i={};i[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(i)},4944:function(t,e,n){"use strict";var i=n(2109),r=n(6790),o=n(7908),s=n(6244),a=n(9303),l=n(5417);i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=o(this),n=s(e),i=l(e,0);return i.length=r(i,e,e,n,0,void 0===t?1:a(t)),i}})},3792:function(t,e,n){n(1223)("flat")}}]);
//# sourceMappingURL=1928-f30ba95a9512bf55094c.js.map