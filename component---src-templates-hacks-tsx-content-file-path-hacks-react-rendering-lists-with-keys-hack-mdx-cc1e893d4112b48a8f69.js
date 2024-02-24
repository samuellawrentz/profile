"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[9458],{1867:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(1151),r=n(7294);function l(e){const t=Object.assign({p:"p",code:"code",span:"span"},(0,a.a)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"In React, lists can be rendered by mapping through an array of data and returning JSX for each item. However, to ensure each item in the list is uniquely identified, React requires a ",r.createElement(t.code,null,"key")," prop."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">const numbers = [1, 2, 3, 4, 5];\nconst listItems = numbers.map((number) =&gt;\n  &lt;li key={number.toString()}&gt;\n    {number}\n  &lt;/li&gt;\n);</code>\n        </deckgo-highlight-code>'}}),"\n",r.createElement(t.p,null,"The ",r.createElement(t.code,null,"key")," is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed."),"\n",r.createElement(t.p,null,"However, do not use indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with the component state."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">const todoItems = todos.map((todo, index) =&gt;\n  // Only do this if items have no stable IDs\n  &lt;li key={index}&gt;\n    {todo.text}\n  &lt;/li&gt;\n);</code>\n        </deckgo-highlight-code>'}}),"\n",r.createElement(t.p,null,"Instead, it's better to use unique string identifiers from your data if available."),"\n",r.createElement(t.p,null,"Understanding and properly implementing keys in React will lead to better performance and fewer bugs in your application."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},i=n(4160),c=n(2092),s=n(6243),m=n(4021),d=n(9202);const u={};function g(e){return(0,r.useEffect)((()=>{(0,d.q)()}),[]),r.createElement("div",{className:"blog-content"},r.createElement(c.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),r.createElement("h1",null,e.data.mdx.frontmatter.title),r.createElement(s.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>r.createElement("div",{className:"tag",key:e},e)))),r.createElement(s.g,{className:"hacks-cont text-regular",spacing:[72]},r.createElement(a.Z,{components:u},r.createElement("div",null,e.children))),r.createElement(m.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),r.createElement(s.g,{spacing:[32]},r.createElement("h3",{className:"hacks-cont"},"Explore more articles"),r.createElement("ul",null,[1,2,3,4].map((t=>{const n=e.pageContext.nodes,a=n[Math.floor(Math.random()*n.length)];return r.createElement("li",{key:t},r.createElement(i.rU,{to:a.frontmatter.path,className:"gradient"},r.createElement("div",null,a.frontmatter.title)))})))),r.createElement(s.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",r.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function p(e){return r.createElement(g,e,r.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-rendering-lists-with-keys-hack-mdx-cc1e893d4112b48a8f69.js.map