"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[6998],{6486:function(e,t,a){var n=a(7294),r=a(4968);t.Z=function(e){return n.createElement("div",{className:"input-wrapper"},e.icon&&n.createElement(r.J,{color:"surface2",name:e.icon,className:"sl-icon"}),n.createElement("input",e))}},2092:function(e,t,a){var n=a(7294),r=a(4593),l=a(5268),c=a(4160);const i=e=>{let{title:t,description:a,image:i,article:m}=e;const{pathname:s}=(0,l.useLocation)(),{site:d}=(0,c.K2)(o),{defaultTitle:p,defaultDescription:u,siteUrl:g,defaultImage:E,twitterUsername:f}=d.siteMetadata,h={title:t||p,description:a||u,image:`${g}${i||E}`,url:`${g}${s}`};return n.createElement(r.q,{title:h.title},n.createElement("meta",{name:"description",content:h.description}),n.createElement("meta",{name:"image",content:h.image}),h.url&&n.createElement("meta",{property:"og:url",content:h.url}),n.createElement("meta",{property:"og:type",content:m?"article":"website"}),h.title&&n.createElement("meta",{property:"og:title",content:h.title}),h.description&&n.createElement("meta",{property:"og:description",content:h.description}),h.image&&n.createElement("meta",{property:"og:image",content:h.image}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&n.createElement("meta",{name:"twitter:creator",content:f}),h.title&&n.createElement("meta",{name:"twitter:title",content:h.title}),h.description&&n.createElement("meta",{name:"twitter:description",content:h.description}),h.image&&n.createElement("meta",{name:"twitter:image",content:h.image}))};t.Z=i,i.defaultProps={title:null,description:null,image:null,article:!1};const o="3412710006"},8574:function(e,t,a){a.r(t);var n=a(4160),r=a(7294),l=a(2092),c=a(6243),i=a(6486);t.default=function(e){let{data:t}=e;const{0:a,1:o}=(0,r.useState)(""),m=t.allMdx.nodes.filter((e=>{let{excerpt:t,frontmatter:{title:n,description:r,tags:l}}=e;return-1!==`${t}|${n}|${r}|${l.join("|")}`.toLowerCase().indexOf(a.toLowerCase())}));return r.createElement("div",null,r.createElement(l.Z,{title:"Hacks for Developers - Web development, CSS, JS",description:" Unlock top-tier web development, terminal, database, and computer science hacks on our unique platform. Discover easy-to-follow tutorials, in-depth guides, and time-saving shortcuts for beginners and professionals alike. Boost your coding skills and tech knowledge today!"}),r.createElement("div",{className:"blog-page-title"},r.createElement("h1",null,"THE HACKS"),r.createElement("div",{className:"search-bar"},r.createElement(c.g,{display:"flex",spacing:[0,32],className:"input-block-search"},r.createElement(i.Z,{maxlength:"30",placeholder:"Search for a hack or topic...",onChange:e=>{let{target:t}=e;return o(t.value)},icon:"search"})))),r.createElement("div",{className:"blogs home-blog"},m.map(((e,t)=>{let{excerpt:a,frontmatter:{date:l,title:i,path:o,heroImage:m,description:s,tags:d}}=e;return t+=1,r.createElement(n.rU,{to:o,className:"",key:t},r.createElement("div",{className:"card"},r.createElement("div",{className:"card__details"},r.createElement("div",{className:"card__date text-caption"},l),r.createElement("div",{className:"card__title"},r.createElement("h3",null,i)),!(t%2&&t%5)&&r.createElement("div",{className:"subtext text-subtext"},s.length>150?a:s),r.createElement(c.g,{display:"flex",gap:48,alignItems:"center",className:"date-tag"},r.createElement("div",{className:"tags"},d.map((e=>r.createElement("div",{className:"tag",key:e},e))))))))})),!m.length&&r.createElement("div",{className:"not-found"},r.createElement("div",{className:"man-emoji"},"¯\\_(ツ)_/¯"),r.createElement("div",null,"Say that again? I'm pretty sure, we don't do that here."))))}}}]);
//# sourceMappingURL=component---src-pages-hacks-index-tsx-7a731501fa1dfb955929.js.map