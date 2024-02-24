"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[2133],{3346:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(1151),l=n(7294);function o(e){const t=Object.assign({p:"p",span:"span",code:"code"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"To add event handlers in JSX, we utilize camelCase syntax rather than lowercase. Let's consider a button click event. In plain JavaScript, it would look like this:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">&lt;button onclick=&quot;activateFunction()&quot;&gt;Click Me!&lt;/button&gt;</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"In React's JSX, we modify it to:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="jsx"  >\n          <code slot="code">&lt;button onClick={activateFunction}&gt;Click Me!&lt;/button&gt;</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"Here ",l.createElement(t.code,null,"activateFunction")," is a function defined in your component. Remember, in JSX, you pass a function as the event handler, rather than a string."),"\n",l.createElement(t.p,null,"Event handlers in React are attached directly to components and, when using class components, typically trigger methods. This is slightly different from assigning events to DOM in HTML."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="jsx"  >\n          <code slot="code">class MyComponent extends React.Component {\n  activateFunction() {\n    // your code here\n  }\n\n  render() {\n    return &lt;button onClick={this.activateFunction}&gt;Click Me!&lt;/button&gt;\n  }\n}</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"Note: Make sure to bind your methods in class components to access ",l.createElement(t.code,null,"this"),"."),"\n",l.createElement(t.p,null,"This guide should help you get started with event handlers in JSX!"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(o,e)):o(e)},r=n(4160),i=n(2092),s=n(6243),m=n(4021),d=n(9202);const u={};function g(e){return(0,l.useEffect)((()=>{(0,d.q)()}),[]),l.createElement("div",{className:"blog-content"},l.createElement(i.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),l.createElement("h1",null,e.data.mdx.frontmatter.title),l.createElement(s.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>l.createElement("div",{className:"tag",key:e},e)))),l.createElement(s.g,{className:"hacks-cont text-regular",spacing:[72]},l.createElement(a.Z,{components:u},l.createElement("div",null,e.children))),l.createElement(m.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),l.createElement(s.g,{spacing:[32]},l.createElement("h3",{className:"hacks-cont"},"Explore more articles"),l.createElement("ul",null,[1,2,3,4].map((t=>{const n=e.pageContext.nodes,a=n[Math.floor(Math.random()*n.length)];return l.createElement("li",{key:t},l.createElement(r.rU,{to:a.frontmatter.path,className:"gradient"},l.createElement("div",null,a.frontmatter.title)))})))),l.createElement(s.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",l.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function h(e){return l.createElement(g,e,l.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-adding-event-handlers-in-jsx-hack-mdx-d0d9cbdd1eb45ebdbba0.js.map