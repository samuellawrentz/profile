(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[394],{1223:function(e,t,n){var r=n(5112),a=n(30),c=n(3070).f,o=r("unscopables"),i=Array.prototype;null==i[o]&&c(i,o,{configurable:!0,value:a(null)}),e.exports=function(e){i[o][e]=!0}},7475:function(e,t,n){var r=n(3157),a=n(4411),c=n(111),o=n(5112)("species"),i=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(a(t)&&(t===i||r(t.prototype))||c(t)&&null===(t=t[o]))&&(t=void 0)),void 0===t?i:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},648:function(e,t,n){var r=n(1694),a=n(614),c=n(4326),o=n(5112)("toStringTag"),i=Object,l="Arguments"==c(function(){return arguments}());e.exports=r?c:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=i(e),o))?n:l?c(t):"Object"==(r=c(t))&&a(t.callee)?"Arguments":r}},7207:function(e){var t=TypeError;e.exports=function(e){if(e>9007199254740991)throw t("Maximum allowed index exceeded");return e}},6790:function(e,t,n){"use strict";var r=n(3157),a=n(6244),c=n(7207),o=n(9974),i=function(e,t,n,l,u,s,m,f){for(var d,p,v=u,g=0,E=!!m&&o(m,f);g<l;)g in n&&(d=E?E(n[g],g,t):n[g],s>0&&r(d)?(p=a(d),v=i(e,t,d,p,v,s-1)-1):(c(v+1),e[v]=d),v++),g++;return v};e.exports=i},9974:function(e,t,n){var r=n(1702),a=n(9662),c=n(4374),o=r(r.bind);e.exports=function(e,t){return a(e),void 0===t?e:c?o(e,t):function(){return e.apply(t,arguments)}}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),a=n(7293),c=n(614),o=n(648),i=n(5005),l=n(2788),u=function(){},s=[],m=i("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),p=!f.exec(u),v=function(e){if(!c(e))return!1;try{return m(u,s,e),!0}catch(t){return!1}},g=function(e){if(!c(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(f,l(e))}catch(t){return!0}};g.sham=!0,e.exports=!m||a((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?g:v},30:function(e,t,n){var r,a=n(9670),c=n(6048),o=n(748),i=n(3501),l=n(490),u=n(317),s=n(6200),m=s("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t;v="undefined"!=typeof document?document.domain&&r?p(r):((t=u("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F):p(r);for(var n=o.length;n--;)delete v.prototype[o[n]];return v()};i[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=a(e),n=new f,f.prototype=null,n[m]=e):n=v(),void 0===t?n:c.f(n,t)}},6048:function(e,t,n){var r=n(9781),a=n(3353),c=n(3070),o=n(9670),i=n(5656),l=n(1956);t.f=r&&!a?Object.defineProperties:function(e,t){o(e);for(var n,r=i(t),a=l(t),u=a.length,s=0;u>s;)c.f(e,n=a[s++],r[n]);return e}},1956:function(e,t,n){var r=n(6324),a=n(748);e.exports=Object.keys||function(e){return r(e,a)}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},4944:function(e,t,n){"use strict";var r=n(2109),a=n(6790),c=n(7908),o=n(6244),i=n(9303),l=n(5417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=c(this),n=o(t),r=l(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:i(e)),r}})},3792:function(e,t,n){n(1223)("flat")},7572:function(e,t,n){"use strict";var r=n(7294),a=n(5186),c=n(9694),o=n(1597),i=function(e){var t=e.title,n=e.description,i=e.image,u=e.article,s=(0,c.useLocation)().pathname,m=(0,o.K2)(l).site.siteMetadata,f=m.defaultTitle,d=m.defaultDescription,p=m.siteUrl,v=m.defaultImage,g=m.twitterUsername,E={title:t||f,description:n||d,image:""+p+(i||v),url:""+p+s};return r.createElement(a.q,{title:E.title},r.createElement("meta",{name:"description",content:E.description}),r.createElement("meta",{name:"image",content:E.image}),E.url&&r.createElement("meta",{property:"og:url",content:E.url}),!u?null:r.createElement("meta",{property:"og:type",content:"article"}),E.title&&r.createElement("meta",{property:"og:title",content:E.title}),E.description&&r.createElement("meta",{property:"og:description",content:E.description}),E.image&&r.createElement("meta",{property:"og:image",content:E.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g&&r.createElement("meta",{name:"twitter:creator",content:g}),E.title&&r.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&r.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&r.createElement("meta",{name:"twitter:image",content:E.image}))};t.Z=i,i.defaultProps={title:null,description:null,image:null,article:!1};var l="3412710006"},5129:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),a=n(4446),c=n(4942),o=n(3366),i=["className","name","size","color","style","hoverColor","svg"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){var t=e.className,n=void 0===t?"":t,a=e.name,c=e.size,l=e.color,s=e.style,m=e.hoverColor,f=e.svg,d=(0,o.Z)(e,i),p=(0,r.useState)(l?"var(--"+l+")":void 0),v=p[0],g=p[1],E={},h=f;return l&&m&&(E={onMouseEnter:function(){return g("var(--"+m+")")},onMouseLeave:function(){return g("var(--"+l+")")}}),(0,r.useEffect)((function(){g("var(--"+l+")")}),[l]),r.createElement("span",Object.assign({className:["sg contacto-icon",f?"contacto-icon-custom":"material-icons-round",n].join(" "),style:u(u({},s),{},{color:v,fontSize:c,cursor:m&&"pointer",overflow:"hidden",lineHeight:1,width:c,height:c})},d,E),h?r.createElement(h,null):a)},m=n.p+"static/image_from_samuellawrentz (1)-7341d2d6ba3640c3ee97b9fa180adf1f.png",f=n.p+"static/image_from_samuellawrentz-92b602386fd15e625db65fac06d772fe.png",d=n.p+"static/motivation (2)-b8cd0a9ca22eb71dcc5ca790b00e3d54.png",p=n(7572);var v=function(){return(0,r.useEffect)((function(){(0,a.D4)(),localStorage.setItem("visitedQuotes","true")})),r.createElement("div",null,r.createElement(p.Z,{title:"Free Quotes Image Generator Online - Generate quotes images online",description:"Create or generate beautiful quotes pictures with unsplash images quickly and free. Our quote maker and generator require NO login or signup"}),r.createElement("div",{className:"container quotes-page"},r.createElement("div",{className:"intro quotes-intro"},r.createElement("h1",null,"Image Quote Generator"),r.createElement("div",{className:"sub-heading text-regularLight"},"Built with ❤️ by Samuellawrentz"),r.createElement("div",null,r.createElement("p",null,"This is a simple image generator that helps you put your quotes and download them as an image."),r.createElement("h3",null,"How to use it?"),r.createElement("p",null,r.createElement("ol",null,r.createElement("li",null,"The card loads up with some random picture"),r.createElement("li",null,"Enter your text/quote"),r.createElement("li",null,"Change/remove the author name"),r.createElement("li",null,"Use the refresh button to change the image"),r.createElement("li",null,"Click the download button once you are done with the changes"))),r.createElement("p",{className:"text-regularLight blockquote"},"More features like custom image, filters are on the way! Stay tuned."))),r.createElement("div",{id:"sam-container"},r.createElement("div",{className:"contents"},r.createElement("div",{className:"quote-container"},r.createElement("div",{className:"image-container",style:{filter:"brightness(1)"}}),r.createElement("div",{className:"quote"},r.createElement("div",{className:"text",contentEditable:!0},"Type here."),r.createElement("div",{className:"author",contentEditable:!0},"Samuel Lawrentz")))),r.createElement("div",{className:"controls"},r.createElement("div",{className:"image-selector control"},r.createElement("span",{className:"button1",onClick:a.jp},r.createElement(s,{name:"refresh",color:"surface2"})),r.createElement("span",{className:"button1",onClick:a.GN},r.createElement(s,{name:"download",color:"surface2"})))))),r.createElement("div",{className:"section"},r.createElement("div",{className:"section__title"},"Few Samples"),r.createElement("div",{className:"cards quotes-cards"},r.createElement("div",{className:"card"},r.createElement("img",{src:m,alt:""})),r.createElement("div",{className:"card"},r.createElement("div",null,r.createElement("img",{src:f,alt:""}))),r.createElement("div",{className:"card"},r.createElement("div",null,r.createElement("img",{src:d,alt:""}))))))}},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-projects-quotes-generator-index-tsx-1e6b6df2fcafd8696ee4.js.map