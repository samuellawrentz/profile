"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[8256],{9094:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(1151),r=n(7294);function o(e){const t=Object.assign({p:"p",code:"code",span:"span"},(0,a.a)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"In React, passing props can become cumbersome when the component receives many props. The ",r.createElement(t.code,null,"...")," (spread operator) can be used to effectively handle this."),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">const ComponentA = (props) =&gt; {\n  return &lt;ComponentB {...props} /&gt;\n}</code>\n        </deckgo-highlight-code>'}}),"\n",r.createElement(t.p,null,"In ",r.createElement(t.code,null,"ComponentA"),", we are spreading out ",r.createElement(t.code,null,"props")," object and passing it to ",r.createElement(t.code,null,"ComponentB"),". All properties of ",r.createElement(t.code,null,"props")," are passed as separate props."),"\n",r.createElement(t.p,null,"This not only makes the code cleaner but also reduces the chance of missing any prop while passing."),"\n",r.createElement(t.p,null,"Be aware, the spread operator passes all properties, even those not expected by ",r.createElement(t.code,null,"ComponentB"),". This can lead to unexpected behavior. So use it wisely!"),"\n",r.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="javascript"  >\n          <code slot="code">const ComponentA = ({ prop1, prop2, ...rest }) =&gt; {\n  return &lt;ComponentB prop1={prop1} {...rest} /&gt;\n}</code>\n        </deckgo-highlight-code>'}}),"\n",r.createElement(t.p,null,"In this example, ",r.createElement(t.code,null,"prop1")," is passed separately, while the rest are spread out. This allows for better control over what props are passed."),"\n",r.createElement(t.p,null,"Remember, the spread operator can greatly simplify your code and make prop passing more manageable. But always be cautious of its unintended side effects."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},s=n(4160),c=n(2092),m=n(6243),p=n(4021),i=n(9202);const d={};function u(e){return(0,r.useEffect)((()=>{(0,i.q)()}),[]),r.createElement("div",{className:"blog-content"},r.createElement(c.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),r.createElement("h1",null,e.data.mdx.frontmatter.title),r.createElement(m.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>r.createElement("div",{className:"tag",key:e},e)))),r.createElement(m.g,{className:"hacks-cont text-regular",spacing:[72]},r.createElement(a.Z,{components:d},r.createElement("div",null,e.children))),r.createElement(p.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),r.createElement(m.g,{spacing:[32]},r.createElement("h3",{className:"hacks-cont"},"Explore more articles"),r.createElement("ul",null,[1,2,3,4].map((t=>{const n=e.pageContext.nodes,a=n[Math.floor(Math.random()*n.length)];return r.createElement("li",{key:t},r.createElement(s.rU,{to:a.frontmatter.path,className:"gradient"},r.createElement("div",null,a.frontmatter.title)))})))),r.createElement(m.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",r.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function g(e){return r.createElement(u,e,r.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-using-spread-operator-for-prop-passing-hack-mdx-c8ae603540f15d6ce713.js.map