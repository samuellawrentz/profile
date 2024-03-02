"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[9559],{4652:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(1151),l=n(7294);function c(e){const t=Object.assign({p:"p",code:"code",span:"span"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"React's ",l.createElement(t.code,null,"useEffect")," hook allows you to handle lifecycle events in your functional components. It's like combining ",l.createElement(t.code,null,"componentDidMount"),", ",l.createElement(t.code,null,"componentDidUpdate"),", and ",l.createElement(t.code,null,"componentWillUnmount")," in class components."),"\n",l.createElement(t.p,null,"Here's a basic usage of ",l.createElement(t.code,null,"useEffect"),":"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">import React, { useEffect } from &#39;react&#39;;\n\nfunction App() {\n  useEffect(() =&gt; {\n    // Your code here\n  }, []);\n\n  return &lt;div&gt;My App&lt;/div&gt;;\n}</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"In the example above, the function passed to ",l.createElement(t.code,null,"useEffect")," will run after the render is committed to the screen. Think of it as ",l.createElement(t.code,null,"componentDidMount")," and ",l.createElement(t.code,null,"componentDidUpdate")," combined."),"\n",l.createElement(t.p,null,"To mimic ",l.createElement(t.code,null,"componentDidMount"),", pass an empty array ",l.createElement(t.code,null,"[]")," as the second argument to ",l.createElement(t.code,null,"useEffect"),":"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">useEffect(() =&gt; {\n   // This will run ONCE after initial render, similar to componentDidMount\n}, []);</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"To mimic ",l.createElement(t.code,null,"componentDidUpdate"),", you can pass specific values in the array:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">useEffect(() =&gt; {\n  // This runs AFTER every render, ONLY IF `prop` has changed since last render\n}, [prop]);</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"To mimic ",l.createElement(t.code,null,"componentWillUnmount"),", return a function from within the function passed to ",l.createElement(t.code,null,"useEffect"),":"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">useEffect(() =&gt; {\n  // component cleanup\n  return () =&gt; {\n    // This will run when the component unmounts, similar to componentWillUnmount\n  };\n}, []);</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"Master ",l.createElement(t.code,null,"useEffect")," to write clean, robust, and efficient React code!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)},r=n(4160),m=n(2092),i=n(6243),s=n(4021),d=n(9202),u=n(9043);const p={};function g(e){(0,l.useEffect)((()=>{(0,d.q)()}),[]);const t=(0,u.u)(e.data.mdx.frontmatter.title,e.pageContext.nodes.length);return l.createElement("div",{className:"blog-content"},l.createElement(m.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),l.createElement("h1",null,e.data.mdx.frontmatter.title),l.createElement(i.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>l.createElement("div",{className:"tag",key:e},e)))),l.createElement(i.g,{className:"hacks-cont text-regular",spacing:[72]},l.createElement(a.Z,{components:p},l.createElement("div",null,e.children))),l.createElement(s.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),l.createElement(i.g,{spacing:[32]},l.createElement("h3",{className:"hacks-cont"},"Explore more articles"),l.createElement("ul",null,t.map((t=>{const n=e.pageContext.nodes[t];return l.createElement("li",{key:t},l.createElement(r.rU,{to:n.frontmatter.path,className:"gradient"},l.createElement("div",null,n.frontmatter.title)))})))),l.createElement(i.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",l.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function h(e){return l.createElement(g,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-using-useeffect-for-lifecycle-events-hack-mdx-c30b589d3a23850711a1.js.map