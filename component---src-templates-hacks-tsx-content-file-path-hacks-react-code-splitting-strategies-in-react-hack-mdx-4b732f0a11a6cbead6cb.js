"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[5967],{2257:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({p:"p",h2:"h2",code:"code",span:"span",ol:"ol",li:"li",strong:"strong",a:"a"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,'"Any application that can be written in JavaScript, will eventually be written in JavaScript." - Jeff Atwood'),"\n",l.createElement(t.p,null,"In modern web development, managing the performance of your application is crucial. One key aspect is to optimize the loading time of your application's JavaScript. This is where code splitting comes into play. In this post, we'll discuss code splitting strategies in React, providing a guide to optimize your web applications."),"\n",l.createElement(t.h2,null,"What is Code Splitting?"),"\n",l.createElement(t.p,null,"Code splitting is a technique that allows you to split your code into various bundles which can then be loaded on demand or in parallel. This can significantly improve the performance of your application and is considered a best practice in web development."),"\n",l.createElement(t.h2,null,"Code Splitting in React"),"\n",l.createElement(t.p,null,"React allows you to use code splitting via the ",l.createElement(t.code,null,"React.lazy()")," and ",l.createElement(t.code,null,"Suspense")," features."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">import React, { lazy, Suspense } from &#39;react&#39;;\n\nconst SomeComponent = lazy(() =&gt; import(&#39;./SomeComponent&#39;));\n\nfunction MyComponent() {\n  return (\n    &lt;div&gt;\n      &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;\n        &lt;SomeComponent /&gt;\n      &lt;/Suspense&gt;\n    &lt;/div&gt;\n  );\n}</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.h2,null,"Strategies for Code Splitting in React"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Route-based code splitting"),": This is the most common strategy used. It involves splitting your code based on the routes of your application. This means that the code for each route is separate and only loaded when the user navigates to that route."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Component-level code splitting"),": This strategy involves splitting your code at the component level. This can be useful if you have large components that are not always needed."),"\n"),"\n",l.createElement(t.li,null,"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Library-level code splitting"),": This strategy involves splitting your code at the library level. This can be useful if you have large libraries that are not always needed."),"\n"),"\n"),"\n",l.createElement(t.p,null,"By using these strategies, you can split your code into smaller, more manageable chunks, improving the performance of your application. For more information, you can refer to ",l.createElement(t.a,{href:"https://reactjs.org/docs/code-splitting.html"},"React's documentation on code splitting"),"."),"\n",l.createElement(t.p,null,'Remember, "The key to performance is elegance, not battalions of special cases." - Jon Bentley'),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://samuellawrentz.com/blog/monitor-website-pagespeed-with-googlesheets/"},"Further Reading on React Performance")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://samuellawrentz.com/hacks/react/how-to-use-computed-state-in-react"},"How to Use Computed State in React")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://samuellawrentz.com/hacks/react/understanding-arrow-functions-in-event-handlers"},"Understanding Arrow Functions in Event Handlers")))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},i=n(4160),s=n(2092),c=n(6243),m=n(4021),p=n(9202),d=n(9043);const u={};function g(e){(0,l.useEffect)((()=>{(0,p.q)()}),[]);const t=(0,d.u)(e.data.mdx.frontmatter.title,e.pageContext.nodes.length);return l.createElement("div",{className:"blog-content"},l.createElement(s.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),l.createElement("h1",null,e.data.mdx.frontmatter.title),l.createElement(c.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>l.createElement("div",{className:"tag",key:e},e)))),l.createElement(c.g,{className:"hacks-cont text-regular",spacing:[72]},l.createElement(a.Z,{components:u},l.createElement("div",null,e.children))),l.createElement(m.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),l.createElement(c.g,{spacing:[32]},l.createElement("h3",{className:"hacks-cont"},"Explore more articles"),l.createElement("ul",null,t.map((t=>{const n=e.pageContext.nodes[t];return l.createElement("li",{key:t},l.createElement(i.rU,{to:n.frontmatter.path,className:"gradient"},l.createElement("div",null,n.frontmatter.title)))})))),l.createElement(c.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",l.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function h(e){return l.createElement(g,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-code-splitting-strategies-in-react-hack-mdx-4b732f0a11a6cbead6cb.js.map