"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[3386],{2533:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(1151),o=n(7294);function r(e){const t=Object.assign({p:"p",span:"span",code:"code"},(0,a.a)(),e.components);return o.createElement(o.Fragment,null,o.createElement(t.p,null,"React.memo is a higher order component that helps prevent unnecessary re-renders. It does a shallow comparison of the previous and current props and re-renders the component only if the props have changed."),"\n",o.createElement(t.p,null,"Here is an example of how to use React.memo:"),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});</code>\n        </deckgo-highlight-code>'}}),"\n",o.createElement(t.p,null,"In this example, ",o.createElement(t.code,null,"MyComponent")," will only re-render if the props have changed. This can be highly beneficial for performance optimization, especially when dealing with larger components or lists."),"\n",o.createElement(t.p,null,"However, it's important to note that React.memo only does a shallow comparison, so it might not work as expected with complex objects or arrays. In such cases, you might need to implement a custom comparison function."),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">const MyComponent = React.memo(\n  function MyComponent(props) {\n    /* render using props */\n  },\n  (prevProps, nextProps) =&gt; {\n    // return true if passing nextProps would return\n    // the same result as passing prevProps, otherwise return false\n  }\n);</code>\n        </deckgo-highlight-code>'}}),"\n",o.createElement(t.p,null,"Remember, judicious use of React.memo can greatly enhance the performance of your React applications."))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)},c=n(2092),l=n(6243),m=n(4021),i=n(9202);const p={};function d(e){return(0,o.useEffect)((()=>{(0,i.q)()}),[]),o.createElement("div",{className:"hacks-content"},o.createElement(c.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),o.createElement("h1",null,e.data.mdx.frontmatter.title),o.createElement(l.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>o.createElement("div",{className:"tag",key:e},e)))),o.createElement(l.g,{className:"hacks-cont text-regular",spacing:[72]},o.createElement(a.Z,{components:p},o.createElement("div",null,e.children))),o.createElement(m.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),o.createElement(l.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",o.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function u(e){return o.createElement(d,e,o.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-avoiding-re-renders-with-react-memo-hack-mdx-1025b6f4e67aa8eca766.js.map