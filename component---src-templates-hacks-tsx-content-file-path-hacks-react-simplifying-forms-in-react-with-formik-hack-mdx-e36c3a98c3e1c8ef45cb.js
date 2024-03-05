"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[5982],{1004:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",ul:"ul",li:"li",h2:"h2",code:"code",span:"span",a:"a"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Simplifying Forms in React with Formik"),"\n",l.createElement(t.p,null,"As software engineers, we often encounter complex forms in our React applications. Managing form states, validation, and submission can be a cumbersome task. But with ",l.createElement(t.strong,null,"Formik"),", we can simplify this process."),"\n",l.createElement(t.p,null,"Formik is a small library that helps you with the 3 most annoying parts of forms in React:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Getting values in and out of form state"),"\n",l.createElement(t.li,null,"Validation and error messages"),"\n",l.createElement(t.li,null,"Handling form submission"),"\n"),"\n",l.createElement(t.p,null,"Let's dive into how we can leverage Formik to simplify our React forms."),"\n",l.createElement(t.h2,null,"Formik Installation"),"\n",l.createElement(t.p,null,"You can install Formik by running ",l.createElement(t.code,null,"npm install formik")," or ",l.createElement(t.code,null,"yarn add formik")," in your terminal."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="bash"  >\n          <code slot="code">npm install formik</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.h2,null,"Using Formik"),"\n",l.createElement(t.p,null,"Formik provides a ",l.createElement(t.code,null,"Formik")," component that we can use to wrap our form. This ",l.createElement(t.code,null,"Formik")," component takes initial values for our form, an onSubmit function, and a function that returns our form."),"\n",l.createElement(t.p,null,"Here is an example of a simple form with Formik:"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="jsx"  >\n          <code slot="code">import React from &#39;react&#39;;\nimport { Formik, Field, Form } from &#39;formik&#39;;\n\nconst BasicForm = () =&gt; (\n  &lt;Formik\n    initialValues={{ email: &#39;&#39;, password: &#39;&#39; }}\n    onSubmit={(values, { setSubmitting }) =&gt; {\n      setTimeout(() =&gt; {\n        alert(JSON.stringify(values, null, 2));\n        setSubmitting(false);\n      }, 400);\n    }}\n  &gt;\n    {({ isSubmitting }) =&gt; (\n      &lt;Form&gt;\n        &lt;Field type=&quot;email&quot; name=&quot;email&quot; /&gt;\n        &lt;Field type=&quot;password&quot; name=&quot;password&quot; /&gt;\n        &lt;button type=&quot;submit&quot; disabled={isSubmitting}&gt;\n          Submit\n        &lt;/button&gt;\n      &lt;/Form&gt;\n    )}\n  &lt;/Formik&gt;\n);\n\nexport default BasicForm;</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"Formik simplifies forms in React, making our code cleaner and simpler to understand. For more complex examples and to understand how Formik handles form submission, validation, and error messages, check out the ",l.createElement(t.a,{href:"https://formik.org/docs/overview"},"Formik documentation"),"."),"\n",l.createElement(t.p,null,'Remember: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler'),"\n",l.createElement(t.p,null,"Related:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://samuellawrentz.com/blog/computed-state-in-react"},"Computed State in React")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://samuellawrentz.com/blog/coding-standards-husky-typescript-lint-staged"},"Coding Standards")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"https://samuellawrentz.com/blog/bookmarklets/"},"Bookmarklets")),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},m=n(4160),i=n(2092),s=n(6243),c=n(4021),u=n(9202),d=n(9043);const p={};function g(e){(0,l.useEffect)((()=>{(0,u.q)()}),[]);const t=(0,d.u)(e.data.mdx.frontmatter.title,e.pageContext.nodes.length);return l.createElement("div",{className:"blog-content"},l.createElement(i.Z,{title:e.data.mdx.frontmatter.title,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),l.createElement("h1",null,e.data.mdx.frontmatter.title),l.createElement(s.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>l.createElement("div",{className:"tag",key:e},e)))),l.createElement(s.g,{className:"hacks-cont text-regular",spacing:[72]},l.createElement(a.Z,{components:p},l.createElement("div",null,e.children))),l.createElement(c.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this hack by Samuel Lawrentz - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,subject:`Samuel Lawrentz Hacks - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}),l.createElement(s.g,{spacing:[32]},l.createElement("h3",{className:"hacks-cont"},"Explore more articles"),l.createElement("ul",null,t.map((t=>{const n=e.pageContext.nodes[t];return l.createElement("li",{key:t},l.createElement(m.rU,{to:n.frontmatter.path,className:"gradient"},l.createElement("div",null,n.frontmatter.title)))})))),l.createElement(s.g,{spacing:[32]},"Keep experimenting and happy coding! You can find me at"," ",l.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."))}function h(e){return l.createElement(g,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-hacks-tsx-content-file-path-hacks-react-simplifying-forms-in-react-with-formik-hack-mdx-e36c3a98c3e1c8ef45cb.js.map