"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[1363],{1832:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({p:"p",h2:"h2",ol:"ol",li:"li",code:"code",span:"span"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"We all start small, but once our content grows, soon we'll be finding ourselves with 300 pages at hand. This severly impacts the build time of the blog, unless you host it in Gatsby Cloud, which I hear has 100x faster build times than normal conventional builds."),"\n",l.createElement(t.h2,null,"My workflow"),"\n",l.createElement(t.p,null,"I use Github actions for my CI/CD pipeline. It's pretty cool and awesome but I'm planning to use Netlify as well. So, my workflow is like this,"),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,"I write a post or update content"),"\n",l.createElement(t.li,null,"I push to github"),"\n",l.createElement(t.li,null,"An action runs that takes care of the build"),"\n",l.createElement(t.li,null,"It does this from the scratch everytime"),"\n",l.createElement(t.li,null,"Takes 3 to 4 mins to complete"),"\n"),"\n",l.createElement(t.p,null,"We can optimize this build time by caching our assets and other folders that do not change often. For now, we will be caching our ",l.createElement(t.code,null,"public")," and the ",l.createElement(t.code,null,".cache")," folder."),"\n",l.createElement(t.h2,null,"Finally, some code"),"\n",l.createElement(t.p,null,"This is the code that can be used to cache and do an incremental build using Github Actions. This goes into my ",l.createElement(t.code,null,"action.yml")," file."),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="yml"  >\n          <code slot="code">name: Gatsby Publish\n\non:\n  push:\n    branches:\n      - master\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2\n      - name: Caching Gatsby\n        id: gatsby-cache-build\n        uses: actions/cache@v2\n        with:\n          path: |\n            public\n            .cache\n          key: ${{ runner.os }}-gatsby-build-${{ github.run_id }}\n          restore-keys: |\n            ${{ runner.os }}-gatsby-build-\n      - name: Build\n        run: npm install --legacy-peer-deps &amp;&amp; npm run build --log-pages\n        env:\n          GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES: true\n          CI: true</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.p,null,"As you can see, ",l.createElement(t.code,null,"GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES: true")," this needs to be set to true for this to work properly. Hope this helps, do follow my blog for more updates and contents like this."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},s=n(4160),c=n(9861),i=n(6162),m=n(9202),u=n(2092),d=n(6243),h=n(1528),p=n(4021);const g={Banner:h.Z};function E(e){return(0,l.useEffect)((()=>{(0,m.q)()}),[]),l.createElement("div",{className:"blog-content"},l.createElement(u.Z,{title:`Samuel Lawrentz | ${e.data.mdx.frontmatter.title}`,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),l.createElement(i.Z,{fluid:e.data.mdx.frontmatter.heroImage.childImageSharp.fluid,className:"hero-image"}),l.createElement("h1",null,e.data.mdx.frontmatter.title),l.createElement(d.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>l.createElement("div",{className:"tag"},e)))),l.createElement("p",{className:"regularLight"},l.createElement("div",{className:"text-regularLight"},e.data.mdx.frontmatter.date)),l.createElement(d.g,{className:"blog-cont text-regular",spacing:[72]},l.createElement(a.Z,{components:g},l.createElement("div",null,e.children))),l.createElement(d.g,{spacing:[32]},l.createElement("h3",{className:"hacks-cont"},"Explore more articles"),l.createElement("ul",null,[1,2,3,4].map((t=>{const n=e.pageContext.nodes,a=n[Math.floor(Math.random()*n.length)];return l.createElement("li",{key:t},l.createElement(s.rU,{to:a.frontmatter.path,className:"gradient"},l.createElement("div",null,a.frontmatter.title)))})))),l.createElement(d.g,{spacing:[32]},"That's it for now, thanks for reading! You can find me at"," ",l.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."),l.createElement(c.Z,{repo:"samuellawrentz/blog-comments",repoId:"R_kgDOH0vDow",category:"General",categoryId:"DIC_kwDOH0vDo84CQ111",mapping:"pathname",reactionsEnabled:"0",emitMetadata:"0",theme:"dark"}),l.createElement(p.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this post by Samuel Lawrentz on - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}\n            `,subject:`Samuel Lawrentz Blog - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}))}function f(e){return l.createElement(E,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-blog-faster-build-gatsby-post-mdx-e5fefe6be0c042d38697.js.map