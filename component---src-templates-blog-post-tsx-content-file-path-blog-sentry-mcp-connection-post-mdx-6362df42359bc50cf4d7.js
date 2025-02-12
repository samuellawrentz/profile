"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[8142],{5743:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({p:"p",h2:"h2",ol:"ol",li:"li",strong:"strong",span:"span",h3:"h3",a:"a",code:"code",ul:"ul",hr:"hr"},(0,l.a)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"Hey there, fellow code wrangler! 👋 Tired of jumping between Cursor and Sentry tabs like a caffeinated kangaroo? Well, grab your favorite debugging mug because we're about to connect these two beautiful tools using the magic of MCP (Model Context Protocol)!"),"\n",a.createElement(t.h2,null,"What's this MCP thing anyway? 🤔"),"\n",a.createElement(t.p,null,"Think of MCP as the cool matchmaker that gets your AI tools to dance with your data sources. It's like Tinder, but for developer tools (and way more successful at making meaningful connections, trust me!)."),"\n",a.createElement(t.h2,null,"Prerequisites (The Boring-but-Important Stuff)"),"\n",a.createElement(t.p,null,"Before we dive in, let's make sure you've got all your ducks in a row:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Cursor IDE")," - You've got this installed, right? RIGHT?"),"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Python & pipx")," - Because we're fancy like that"),"\n"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="bash"  >\n          <code slot="code"># Install pipx if you haven&#39;t already\npython -m pip install --user pipx\npython -m pipx ensurepath\n\n# Verify installation\npipx --version</code>\n        </deckgo-highlight-code>'}}),"\n",a.createElement(t.ol,{start:"3"},"\n",a.createElement(t.li,null,a.createElement(t.strong,null,"Sentry Account")," - You'll need one of those sweet, sweet auth tokens"),"\n"),"\n",a.createElement(t.h2,null,"The Main Event: Setting Up Sentry MCP 🎪"),"\n",a.createElement(t.h3,null,"Step 1: Grab Your Auth Token"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Head over to ",a.createElement(t.a,{href:"https://sentry.io"},"Sentry.io")),"\n",a.createElement(t.li,null,"Navigate to Settings > Auth Tokens"),"\n",a.createElement(t.li,null,"Create a new token (give it the permissions it needs to be useful)"),"\n"),"\n",a.createElement(t.h3,null,"Step 2: Fire Up the MCP Server"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="bash"  >\n          <code slot="code">pipx run mcp-server-sentry --auth-token YOUR_TOKEN</code>\n        </deckgo-highlight-code>'}}),"\n",a.createElement(t.p,null,"Replace ",a.createElement(t.code,null,"YOUR_TOKEN")," with your actual token. And please, for the love of all things holy, don't commit this token to Git! 🙈"),"\n",a.createElement(t.h3,null,"Step 3: Configure Cursor"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Open Cursor Settings (the gear icon, you know the drill)"),"\n",a.createElement(t.li,null,"Find Features > MCP"),"\n",a.createElement(t.li,null,'Click "+ Add New MCP Server"'),"\n",a.createElement(t.li,null,"Fill in these details:","\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Transport Type: ",a.createElement(t.code,null,"command")),"\n",a.createElement(t.li,null,'Name: "Sentry" (or "Error-Be-Gone" if you\'re feeling creative)'),"\n",a.createElement(t.li,null,"Command: The command from Step 2"),"\n"),"\n"),"\n"),"\n",a.createElement(t.h2,null,"Testing Your Connection 🧪"),"\n",a.createElement(t.p,null,"If everything's working, you should be able to:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"See Sentry in your MCP server list"),"\n",a.createElement(t.li,null,"Query error events"),"\n",a.createElement(t.li,null,"Track performance metrics"),"\n",a.createElement(t.li,null,"Feel like a 10x developer"),"\n"),"\n",a.createElement(t.p,null,"Try these cool prompts in Cursor:"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code   >\n          <code slot="code">&quot;Show me production errors from last hour&quot;\n&quot;List unresolved issues affecting most users&quot;\n&quot;Get performance metrics for the auth service&quot;</code>\n        </deckgo-highlight-code>'}}),"\n",a.createElement(t.h2,null,"Troubleshooting (When Things Go South) 🔧"),"\n",a.createElement(t.p,null,"If your connection is acting like a moody teenager:"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Check your auth token (is it valid?)"),"\n",a.createElement(t.li,null,"Verify pipx installation (",a.createElement(t.code,null,"pipx --version"),")"),"\n",a.createElement(t.li,null,"Look for error messages in Cursor's MCP logs"),"\n",a.createElement(t.li,null,"Make sure your network isn't blocking the connection"),"\n"),"\n",a.createElement(t.h2,null,"Pro Tips 🎯"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"Keep your token secure (seriously, don't share it!)"),"\n",a.createElement(t.li,null,"Use minimal permissions"),"\n",a.createElement(t.li,null,"Regular health checks are your friend"),"\n",a.createElement(t.li,null,"Update your MCP server package regularly"),"\n"),"\n",a.createElement(t.h2,null,"Wrapping Up 🎁"),"\n",a.createElement(t.p,null,"There you have it! You've just leveled up your error tracking game. Now your Cursor IDE can chat directly with Sentry, making debugging feel less like a wild goose chase and more like a guided tour."),"\n",a.createElement(t.p,null,"Remember: With great power comes great responsibility. Use your new MCP superpowers wisely!"),"\n",a.createElement(t.p,null,"Happy coding! 🚀"),"\n",a.createElement(t.hr),"\n",a.createElement(t.p,null,"P.S. If this helped you avoid at least one production fire, consider sharing it with your team. They'll thank you later! 😉"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.a)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4160),c=n(9861),s=n(6162),m=n(9202),u=n(2092),h=n(6243),d=n(1528),g=n(4021),p=n(9043);const E={Banner:d.Z};function f(e){(0,a.useEffect)((()=>{(0,m.q)()}),[]);const t=(0,p.u)(e.data.mdx.frontmatter.title,e.pageContext.nodes.length);return a.createElement("div",{className:"blog-content"},a.createElement(u.Z,{title:`Samuel Lawrentz | ${e.data.mdx.frontmatter.title}`,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),a.createElement(s.Z,{fluid:e.data.mdx.frontmatter.heroImage.childImageSharp.fluid,className:"hero-image"}),a.createElement("h1",null,e.data.mdx.frontmatter.title),a.createElement(h.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>a.createElement("div",{className:"tag"},e)))),a.createElement("p",{className:"regularLight"},a.createElement("div",{className:"text-regularLight"},e.data.mdx.frontmatter.date)),a.createElement(h.g,{className:"blog-cont text-regular",spacing:[72]},a.createElement(l.Z,{components:E},a.createElement("div",null,e.children))),a.createElement(h.g,{spacing:[32]},a.createElement("h3",{className:"hacks-cont"},"Explore more articles"),a.createElement("ul",null,t.map((t=>{const n=e.pageContext.nodes[t];return a.createElement("li",{key:t},a.createElement(i.rU,{to:n.frontmatter.path,className:"gradient"},a.createElement("div",null,n.frontmatter.title)))})))),a.createElement(h.g,{spacing:[32]},"That's it for now, thanks for reading! You can find me at"," ",a.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."),a.createElement(c.Z,{repo:"samuellawrentz/blog-comments",repoId:"R_kgDOH0vDow",category:"General",categoryId:"DIC_kwDOH0vDo84CQ111",mapping:"pathname",reactionsEnabled:"0",emitMetadata:"0",theme:"dark"}),a.createElement(g.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this post by Samuel Lawrentz on - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}\n            `,subject:`Samuel Lawrentz Blog - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}))}function y(e){return a.createElement(f,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-blog-sentry-mcp-connection-post-mdx-6362df42359bc50cf4d7.js.map