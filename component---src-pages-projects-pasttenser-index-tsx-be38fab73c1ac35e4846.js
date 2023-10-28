"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[7704],{3628:function(e,t,a){a.d(t,{Q:function(){return c}});var n=a(5726),s=a(959);function l(e){let{type:t="primary",size:a="regular",children:n,disabled:l,...c}=e;return s.createElement("span",Object.assign({className:["button",`button-${t}`,`button-${a}`,"button-"+(l?"disabled":"")].join(" ")},c),n)}const c=e=>{let{to:t,target:a,className:c,...r}=e;return s.createElement(n.rU,{to:t,className:"link-button "+c,target:a},s.createElement(l,r))};t.Z=l},1341:function(e,t,a){var n=a(959),s=a(923);t.Z=function(e){return n.createElement("div",{className:"input-wrapper"},e.icon&&n.createElement(s.J,{color:"surface2",name:e.icon,className:"sl-icon"}),n.createElement("input",e))}},4208:function(e,t,a){a.r(t);var n=a(991),s=a(959),l=a(2983),c=a(3628),r=a(1341);const i={spaces:"Do verbs have spaces? 🤨 You are sus.",long:'Is there a verb that really goes like - "{{verb}}"? 🤯',other:"We dont do that here! #wakandaForever 🙅"};t.default=function(){const{0:e,1:t}=(0,s.useState)(null),{0:d,1:o}=(0,s.useState)("");let m=null;d.match(/[^A-Za-z]/g)&&(m=i.other),d.match(/\s/g)&&(m=i.spaces),d.length>20&&(m=i.long.replace("{{verb}}",d));const p=()=>{return!m&&fetch("https://pastenser.herokuapp.com/"+(e=d,e.charAt(0).toUpperCase()+e.slice(1))).then((e=>e.json())).then((e=>t(e["past tense"])));var e};return s.createElement("div",null,s.createElement(l.g,{display:"flex",alignItems:"center",className:"khabyl-project"},s.createElement(l.g,{flex:"1 1 70%",style:{position:"relative"}},s.createElement("h1",null,"PastTenser"),s.createElement("h2",null,"A quick API that gives you the past tense of the requested verb."),s.createElement(l.g,{display:"flex",spacing:[0,32],className:"input-block"},s.createElement(r.Z,{maxlength:"30",placeholder:"Enter a verb",value:d,onKeyPress:e=>13===e.charCode&&p(),onChange:e=>{let{target:a}=e;o(a.value),t(null)}}),s.createElement(c.Z,{onClick:p,disabled:!!m},"Find")),s.createElement("div",{className:"error-text"},m)),s.createElement(l.g,{flex:"1 0 30%",className:"khaby "+(e?"show":"")},s.createElement(n.S,{src:"../../../images/projects/khaby-lame 1.png",alt:"Khaby Lame",class:"open",__imageData:a(6685)}),s.createElement(n.S,{src:"../../../images/projects/khaby-lame 2.png",alt:"Khaby Lame",class:"close",__imageData:a(2186)}),s.createElement("div",{className:"result "+(e?"":"hide")},e))),s.createElement("div",{className:"khaby-section"},s.createElement("h3",null,"How does it work?"),s.createElement("p",null,"It's very simple. In fact, it is a normal Javascript map lookup. The backend for this is written in NodeJS with ExpressJS and hosted on Heroku. It's an API that I developed just for fun so you can use it for fun.",s.createElement("br",null),s.createElement("span",{className:"text-caption"},"Additional fact #1: This API also returns the past-participle form of the verb."),s.createElement("br",null),s.createElement("span",{className:"text-caption"},"Additional fact #2: This API is not accurate. Don't rely on the results."),s.createElement("br",null),s.createElement("span",{className:"text-caption"},"Additional fact #3: Now that Heroku is going to stop free plans, I need to think about deploying the API elsewhere.")),s.createElement("p",null,"As you know, the image I used here is ",s.createElement("b",null,"Khaby Lame.")," He is just awesome for his quirky parody videos. I find his facial expressions funny and useful in a page like this.")),s.createElement("div",{className:"khaby-section"},s.createElement("h3",null,"Lets Get Technical"),s.createElement("p",null,s.createElement("b",null,"CSS properties:")," clip-path, keyframes, transform - skew, rotate",s.createElement("br",null),s.createElement("b",null,"Javascript Stack:")," NodeJS, React, ExpressJS, Fetch API",s.createElement("br",null),s.createElement("b",null,"Deployed to:")," Heroku")))}},6685:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484858","images":{"fallback":{"src":"/static/f668b9e315296d7fd2e8d4a8d334bf75/d78dd/khaby-lame%201.png","srcSet":"/static/f668b9e315296d7fd2e8d4a8d334bf75/039ce/khaby-lame%201.png 126w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/62364/khaby-lame%201.png 252w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/d78dd/khaby-lame%201.png 504w","sizes":"(min-width: 504px) 504px, 100vw"},"sources":[{"srcSet":"/static/f668b9e315296d7fd2e8d4a8d334bf75/6c7d0/khaby-lame%201.webp 126w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/cb05e/khaby-lame%201.webp 252w,\\n/static/f668b9e315296d7fd2e8d4a8d334bf75/53916/khaby-lame%201.webp 504w","type":"image/webp","sizes":"(min-width: 504px) 504px, 100vw"}]},"width":504,"height":630}')},2186:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#484858","images":{"fallback":{"src":"/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/d78dd/khaby-lame%202.png","srcSet":"/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/039ce/khaby-lame%202.png 126w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/62364/khaby-lame%202.png 252w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/d78dd/khaby-lame%202.png 504w","sizes":"(min-width: 504px) 504px, 100vw"},"sources":[{"srcSet":"/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/6c7d0/khaby-lame%202.webp 126w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/cb05e/khaby-lame%202.webp 252w,\\n/static/35fc22b9ed8d2e4862f55c8cd8c2da6d/53916/khaby-lame%202.webp 504w","type":"image/webp","sizes":"(min-width: 504px) 504px, 100vw"}]},"width":504,"height":630}')}}]);
//# sourceMappingURL=component---src-pages-projects-pasttenser-index-tsx-be38fab73c1ac35e4846.js.map