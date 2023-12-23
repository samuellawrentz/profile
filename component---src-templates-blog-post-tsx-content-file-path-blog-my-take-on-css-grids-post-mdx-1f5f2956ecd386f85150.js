"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[6841],{1243:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({p:"p",a:"a",code:"code",blockquote:"blockquote",h2:"h2",h3:"h3",span:"span",ul:"ul",li:"li"},(0,a.a)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"For a long time, I was against the use of modern CSS properties and tools. This was because the organization that I used to work for supports older versions of ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Internet_Explorer_version_history#:~:text=The%20first%20version%20of%20Internet,other%20companies%20initiating%20browser%20development."},"Internet Explorer"),". So Flexbox and Grid were out of the equation. It was just ",l.createElement(t.code,null,"position")," ",l.createElement(t.code,null,"display")," ",l.createElement(t.code,null,"float")," ",l.createElement(t.code,null,"clear")," ",l.createElement(t.code,null,"text-align")," ",l.createElement(t.code,null,"vertical-align")," properties that I was using for positioning."),"\n",l.createElement(t.p,null,"Later when I moved to a new organization, there were no such restrictions. All I had to do was make the web pages load faster and look good on all devices and browsers. Then I took interest in ",l.createElement(t.code,null,"flexbox"),". I almost use all the flex properties regularly and they are stored in my mind as a fresh copy."),"\n",l.createElement(t.p,null,"Even when I was working with flexbox, I always looked up to CSS Grids as something awesome. Every time I try to learn/read and understand it, I would get bored or screw up my understanding. But now, after eons, I guess I've finally cracked up the mystery behind CSS Grids."),"\n",l.createElement(t.p,null,"Recently, I played a game that has like 80 levels in it, which progressively teaches you about CSS grids. It took me 3 days to complete all the levels. I played it during my leisure time, it was fun. Thanks to the creator. You can give it a try, it's interesting."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Play it here - ",l.createElement(t.a,{href:"https://codingfantasy.com/games/css-grid-attack"},"Coding fantasy - CSS Grid game")),"\n"),"\n",l.createElement(t.h2,null,"Do we need media queries? I guess not."),"\n",l.createElement(t.p,null,"There are functions in CSS!! Yes, you heard me - functions! What if I told you that you are already using them!? Yes, ",l.createElement(t.code,null,"rgb()"),", ",l.createElement(t.code,null,"rgba()"),", ",l.createElement(t.code,null,"hsl()"),", ",l.createElement(t.code,null,"calc()"),", etc all these are CSS functions. Grids introduce few new functions to use ",l.createElement(t.code,null,"repeat()"),"and ",l.createElement(t.code,null,"minmax()"),"."),"\n",l.createElement(t.h3,null,"WTH is ",l.createElement(t.code,null,"minmax()"),"?"),"\n",l.createElement(t.p,null,"With ",l.createElement(t.code,null,"minmax()")," we can avoid writing media queries and breakpoints. All you have to do is define a minimum width and a maximum width for your grid cells. The rest would be taken care of by CSS."),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"minmax(minimum-value, max-value)"),"\nThe values can be any of these ",l.createElement(t.code,null,"px"),", ",l.createElement(t.code,null,"%"),", ",l.createElement(t.code,null,"fr"),", ",l.createElement(t.code,null,"min-content"),", ",l.createElement(t.code,null,"max-content"),".  Alright, we have talked a lot about CSS and grids. Let's see some code."),"\n",l.createElement(t.h2,null,"Tile layout"),"\n",l.createElement(t.p,null,"Previously, tile layout was difficult and we had to write a bunch of CSS code. Now with grid, it has become a breeze. I use the CSS grid for my ",l.createElement(t.a,{href:"https://samuellawrentz.com/blog/"},"blog listing page"),". Do check it out!"),"\n",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="css"  >\n          <code slot="code">.grid {\n  display: grid;\n  grid-gap: 15px;\n  // auto-fit takes care of the number of columns it can fit into\n  // the given space\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  grid-auto-rows: 200px;\n  grid-auto-flow: dense;\n}</code>\n        </deckgo-highlight-code>'}}),"\n",l.createElement(t.h2,null,"Breaking down into bits"),"\n",l.createElement(t.p,null,"Okay, let me break down the above style into some readable components"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null,"display: grid"),"\nObviously, This is required."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"grid-gap:15px"),"\nThis is used to define a gap between the grid cells. Forget about margins. If it is a grid, we use ",l.createElement(t.code,null,"gap")," or ",l.createElement(t.code,null,"grid-gap")),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"grid-template-columns"),"\nThis is used to define the blueprint of the grid columns - describes how many columns and the width of each column."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"repeat()"),"\nAs mentioned earlier, this is a CSS function, that repeats whatever is passed as a 2nd argument for the number of times passed in the 1st argument."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"auto-fit"),"\nCalculates the number of columns that need to be generated based on the specified width."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"minmax()"),"\nThis also is a CSS function, we've already covered it above."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"grid-auto-rows"),"\nThis property defines a standard height for the rows so that you don't have to specify explicit heights."),"\n",l.createElement(t.li,null,l.createElement(t.code,null,"grid-auto-flow"),"\nThis property is used to specify the algorithm that is used to fill the grid. By default it is ",l.createElement(t.code,null,"row"),". ",l.createElement(t.code,null,"dense")," fills the gap with smaller items wherever possible. This makes the grid look dense."),"\n"),"\n",l.createElement(t.p,null,"I've shared my thoughts and understanding. Feedbacks are valuable. Do follow this blog for more updates."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"Written with ",l.createElement(t.a,{href:"https://stackedit.io/"},"StackEdit"),"."),"\n"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},i=n(9861),s=n(6162),c=n(9202),m=n(2092),d=n(6243),u=n(1528),h=n(4021),g=n(9931);const p={Banner:u.Z};function f(e){return(0,l.useEffect)((()=>{(0,c.q)()}),[]),l.createElement("div",{className:"blog-content"},l.createElement(m.Z,{title:`Samuel Lawrentz | ${e.data.mdx.frontmatter.title}`,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),l.createElement(s.Z,{fluid:e.data.mdx.frontmatter.heroImage.childImageSharp.fluid,className:"hero-image"}),l.createElement("h1",null,e.data.mdx.frontmatter.title),l.createElement(d.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>l.createElement("div",{className:"tag"},e)))),l.createElement("p",{className:"regularLight"},l.createElement("div",{className:"text-regularLight"},e.data.mdx.frontmatter.date)),l.createElement(d.g,{className:"blog-cont text-regular",spacing:[72]},l.createElement(a.Z,{components:p},l.createElement("div",null,e.children))),l.createElement(d.g,{spacing:[32]},"Consider subscribing to the newsletter for more tips and hacks like this.",l.createElement("div",{style:{marginTop:8}}),l.createElement(g.J,null)),l.createElement(i.Z,{repo:"samuellawrentz/blog-comments",repoId:"R_kgDOH0vDow",category:"General",categoryId:"DIC_kwDOH0vDo84CQ111",mapping:"pathname",reactionsEnabled:"0",emitMetadata:"0",theme:"dark"}),l.createElement(h.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this post by Samuel Lawrentz on - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}\n            `,subject:`Samuel Lawrentz Blog - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}))}function E(e){return l.createElement(f,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-blog-my-take-on-css-grids-post-mdx-1f5f2956ecd386f85150.js.map