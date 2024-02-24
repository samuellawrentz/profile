"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[2300],{4703:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(1151),o=n(7294);function r(e){const t=Object.assign({p:"p",code:"code",span:"span"},(0,a.a)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"Managing state in large React applications can be complex, but useContext hook simplifies it. The ",o.createElement(t.code,null,"useContext")," hook is a built-in hook in React that allows you to share state and other data between components without passing props."),"\n",o.createElement(t.p,null,"Here's a simple implementation:"),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">import React, { useContext, useState } from &#39;react&#39;;\n\nconst MyContext = React.createContext();\n\nfunction ProviderComponent({ children }) {\n  const [state, setState] = useState(0);\n  return (\n    &lt;MyContext.Provider value={{ state, setState }}&gt;\n      {children}\n    &lt;/MyContext.Provider&gt;\n  );\n}\n\nfunction ConsumerComponent() {\n  const context = useContext(MyContext);\n  return (\n    &lt;div&gt;\n      {context.state}\n      &lt;button onClick={() =&gt; context.setState(context.state + 1)}&gt;\n        Increment\n      &lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code>\n        </deckgo-highlight-code>'}}),"\n",o.createElement(t.p,null,"In the above code, ",o.createElement(t.code,null,"ProviderComponent")," provides the state to its children. In ",o.createElement(t.code,null,"ConsumerComponent"),", we use ",o.createElement(t.code,null,"useContext")," to access the state and the ",o.createElement(t.code,null,"setState")," function."),"\n",o.createElement(t.p,null,"Remember, ",o.createElement(t.code,null,"useContext")," doesn't replace Redux or other state management libraries but provides a simpler way for state sharing between components."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)},c=n(4160),s=n(2092),m=n(6243),i=n(4021),d=n(9202);const u={};function p(e){return(0,o.useEffect)((()=>{(0,d.q)()}),[]),o.createElement("div",{className:"blog-content"},o.createElement(s.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),o.createElement("h1",null,e.data.mdx.frontmatter.title),o.createElement(m.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>o.createElement("div",{className:"tag",key:e},e)))),o.createElement(m.g,{className:"hacks-cont text-regular",spacing:[72]},o.createElement(a.Z,{components:u},o.createElement("div",null,e.children))),o.createElement(i.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),o.createElement(m.g,{spacing:[32]},o.createElement("h3",{className:"hacks-cont"},"Explore more articles"),o.createElement("ul",null,[1,2,3,4].map((t=>{const n=e.pageContext.nodes,a=n[Math.floor(Math.random()*n.length)];return o.createElement("li",{key:t},o.createElement(c.rU,{to:a.frontmatter.path,className:"gradient"},o.createElement("div",null,a.frontmatter.title)))})))),o.createElement(m.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",o.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function g(e){return o.createElement(p,e,o.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-using-usecontext-for-state-management-hack-mdx-a4887bcbc962437873a3.js.map