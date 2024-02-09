"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[7704],{1528:function(e,t,a){var n=a(7294),l=a(6243),s=a(4968);t.Z=function(e){let{type:t,children:a,...c}=e;return n.createElement(l.g,{className:"banner",display:"flex",gap:16,alignItems:"center"},n.createElement("div",{style:{fontSize:0}},n.createElement(s.J,{name:"info",size:42,color:"info"})),n.createElement("div",null,a))}},9728:function(e,t,a){a.d(t,{Q:function(){return c}});var n=a(4160),l=a(7294);function s(e){let{type:t="primary",size:a="regular",children:n,disabled:s,...c}=e;return l.createElement("span",Object.assign({className:["button",`button-${t}`,`button-${a}`,"button-"+(s?"disabled":"")].join(" ")},c),n)}const c=e=>{let{to:t,target:a,className:c,...r}=e;return l.createElement(n.rU,{to:t,className:"link-button "+c,target:a},l.createElement(s,r))};t.Z=s},6486:function(e,t,a){var n=a(7294),l=a(4968);t.Z=function(e){return n.createElement("div",{className:"input-wrapper"},e.icon&&n.createElement(l.J,{color:"surface2",name:e.icon,className:"sl-icon"}),n.createElement("input",e))}},4980:function(e,t,a){a.r(t);var n=a(8032),l=a(7294),s=a(6243),c=a(9728),r=a(6486),i=a(1528);const o={spaces:"Do verbs have spaces? 🤨 You are sus.",long:'Is there a verb that really goes like - "{{verb}}"? 🤯',other:"We dont do that here! #wakandaForever 🙅"};t.default=function(){const{0:e,1:t}=(0,l.useState)(null),{0:d,1:m}=(0,l.useState)("");let p=null;d.match(/[^A-Za-z]/g)&&(p=o.other),d.match(/\s/g)&&(p=o.spaces),d.length>20&&(p=o.long.replace("{{verb}}",d));const u=()=>{return!p&&fetch("https://pastenser.herokuapp.com/"+(e=d,e.charAt(0).toUpperCase()+e.slice(1))).then((e=>e.json())).then((e=>t(e["past tense"])));var e};return l.createElement("div",null,l.createElement(s.g,{display:"flex",alignItems:"center",className:"khabyl-project"},l.createElement(s.g,{flex:"1 1 70%",style:{position:"relative"}},l.createElement("h1",null,"PastTenser"),l.createElement("h2",null,"A quick API that gives you the past tense of the requested verb."),l.createElement(s.g,{display:"flex",spacing:[0,32],className:"input-block"},l.createElement(r.Z,{maxlength:"30",placeholder:"Enter a verb",value:d,onKeyPress:e=>13===e.charCode&&u(),onChange:e=>{let{target:a}=e;m(a.value),t(null)}}),l.createElement(c.Z,{onClick:u,disabled:!!p},"Find")),l.createElement("div",{className:"error-text"},p)),l.createElement(s.g,{flex:"1 0 30%",className:"khaby "+(e?"show":"")},l.createElement(n.S,{src:"../../../images/projects/khaby-lame 1.png",alt:"Khaby Lame",class:"open",__imageData:a(6685)}),l.createElement(n.S,{src:"../../../images/projects/khaby-lame 2.png",alt:"Khaby Lame",class:"close",__imageData:a(2186)}),l.createElement("div",{className:"result "+(e?"":"hide")},e))),l.createElement("div",{className:"khaby-section"},l.createElement(i.Z,null,"This is not working now because Heroku has removed free plans. I will deploy it somewhere else soon."),l.createElement("h3",null,"How does it work?"),l.createElement("p",null,"It's very simple. In fact, it is a normal Javascript map lookup. The backend for this is written in NodeJS with ExpressJS and hosted on Heroku. It's an API that I developed just for fun so you can use it for fun.",l.createElement("br",null),l.createElement("span",{className:"text-caption"},"Additional fact #1: This API also returns the past-participle form of the verb."),l.createElement("br",null),l.createElement("span",{className:"text-caption"},"Additional fact #2: This API is not accurate. Don't rely on the results."),l.createElement("br",null),l.createElement("span",{className:"text-caption"},"Additional fact #3: Now that Heroku is going to stop free plans, I need to think about deploying the API elsewhere.")),l.createElement("p",null,"As you know, the image I used here is ",l.createElement("b",null,"Khaby Lame.")," He is just awesome for his quirky parody videos. I find his facial expressions funny and useful in a page like this.")),l.createElement("div",{className:"khaby-section"},l.createElement("h3",null,"Lets Get Technical"),l.createElement("p",null,l.createElement("b",null,"CSS properties:")," clip-path, keyframes, transform - skew, rotate",l.createElement("br",null),l.createElement("b",null,"Javascript Stack:")," NodeJS, React, ExpressJS, Fetch API",l.createElement("br",null),l.createElement("b",null,"Deployed to:")," Heroku")))}},6685:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484858","images":{"fallback":{"src":"/static/f668b9e315296d7fd2e8d4a8d334bf75/d78dd/khaby-lame%201.png","srcSet":"/static/f668b9e315296d7fd2e8d4a8d334bf75/039ce/khaby-lame%201.png 126w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/62364/khaby-lame%201.png 252w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/d78dd/khaby-lame%201.png 504w","sizes":"(min-width: 504px) 504px, 100vw"},"sources":[{"srcSet":"/static/f668b9e315296d7fd2e8d4a8d334bf75/6c7d0/khaby-lame%201.webp 126w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/cb05e/khaby-lame%201.webp 252w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/53916/khaby-lame%201.webp 504w","type":"image/webp","sizes":"(min-width: 504px) 504px, 100vw"}]},"width":504,"height":630}')},2186:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484858","images":{"fallback":{"src":"/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/d78dd/khaby-lame%202.png","srcSet":"/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/039ce/khaby-lame%202.png 126w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/62364/khaby-lame%202.png 252w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/d78dd/khaby-lame%202.png 504w","sizes":"(min-width: 504px) 504px, 100vw"},"sources":[{"srcSet":"/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/6c7d0/khaby-lame%202.webp 126w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/cb05e/khaby-lame%202.webp 252w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/53916/khaby-lame%202.webp 504w","type":"image/webp","sizes":"(min-width: 504px) 504px, 100vw"}]},"width":504,"height":630}')}}]);
//# sourceMappingURL=component---src-pages-projects-pasttenser-index-tsx-8ebfced55b3e022d9e7f.js.map