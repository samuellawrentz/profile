"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[6358],{4895:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(1151),o=n(7294);function r(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",h3:"h3",strong:"strong",span:"span",h4:"h4"},(0,a.a)(),e.components),{Banner:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Banner",!0),o.createElement(o.Fragment,null,o.createElement(t.p,null,"So this website is built using ",o.createElement(t.a,{href:"https://www.gatsbyjs.com/"},"GatsbyJS"),", which is super cool and super easy to get started. If you want to learn more about my experience with Gatsby, you can check out my other blog posts about ",o.createElement(t.a,{href:"https://samuellawrentz.com/blog/gatsby-incremental-faster-builds-github-actions/"},"Gatsby and incremental faster builds"),". This is the 6th blog post here on this website and if you try sharing this blog post on the internet you would see a image with the title. This image is called the OG image."),"\n",o.createElement(t.h2,null,"What is an OG image?"),"\n",o.createElement(t.p,null,"Open Graph Images is a simple way to add images to your posts. An open graph image or OG image is the image that appears when you post a link to a web page or video content on your social media sites. This forms part of an important group of meta tags that directly impact how the content links perform on social media platforms."),"\n",o.createElement(n,null,"Try sharing this link on twitter or linkedin, you would find the OG being rendered."),"\n",o.createElement(t.h2,null,"GatsbyJS and OG images"),"\n",o.createElement(t.p,null,"Gatsby ecosystem is growing everyday and new plugins popup every day. There are few plugins which creates OG images from HTML/JSX content. These plugins use ",o.createElement(t.a,{href:"https://pptr.dev/"},o.createElement(t.code,null,"pupeteer"))," to load that HTML content and then it takes a screenshot of the page and then saves it as a ",o.createElement(t.code,null,".png"),". It is a quite awesome plugin."),"\n",o.createElement(t.h3,null,"Pupeteer"),"\n",o.createElement(t.p,null,o.createElement(t.code,null,"pupeteer")," is nothing but a Chrome browser that runs headlessly and there are options to integrate the live chrome browser as well. The issue with this thing is that, it takes ",o.createElement(t.code,null,"~280mb")," to run and I'm personally a person who doesn't like apps or bundles that takes a lot of space. Eventhough ",o.createElement(t.code,null,"pupeteer")," is a dev dependency, I wanted a simple solution to generate my OG images."),"\n",o.createElement(t.h2,null,"The solution"),"\n",o.createElement(t.p,null,"After doing some intensive google searches, I figured out there is actually another way to create OG images - ",o.createElement(t.strong,null,"The canvas way"),". Why to use a heavy package as ",o.createElement(t.code,null,"pupeteer")," when you just want a canvas that can be exported as a PNG image. Then I came across this package called ",o.createElement(t.code,null,"node-canvas")," which does the same thing as HTML canvas but it does it in nodeJS, so that you don't need to fire up a browser inorder to screenshot your page."),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1200px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/2312cdfb2bf43fc91f2408819b546442/c1b63/07407175-d0dc-51f4-9df7-ae572692cbba.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52.66666666666667%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5klEQVR42i2TyW8bdRiGfeLAAQ4cOIAESCCBKFVAlApaVAFRBVKLgNomnniNt7E9jseeeOJ4Gcf22ONlHC9N3QaFOITSAmpTVVCRQg8BVaJVDwjxBz38GvfwXV897/I5Lvybw/0gi3So4j8Qt58mdE0hspNEniRRNpJkWgmyRpwVPYaejrIWDVP2LmE4g9TOBTA/8dM65aPzjhdH8r8GyqMayl8G8QMd7VeD/M0yq9eK5LZypLsJ1LqMthYnn41SSEQoBsNUFkKsnw/SmPfTPOOn866L3ptOHMv/mGgPm2iHddTfymT3i6g/COHtPLmLKstNmWxF0OVjrKYjrEVmdNUvBZ0rQOMLP9ZJD+aZCtZ7BRzS/Ry+eyrBX1TCNzJEpgrRPZnYTpR0S35CJ6yqgk6OUAouzejOBam7/JgXhNU5F8b5n6nN7+HwHWoED7KEb6nErmeQp8skrqRYHqVQmwk0Q0bX4xREdqVolMpjOucS9c9DR1atE166b0vYr3sYvLyAw3NXYfF2Ct/1BIHdOMlLCpotxJtLZKox1HwYNRlgJRxA93gpCZvGpxLVU27M04u0T3rpvSXRf83D8MWvcZT+tin83sC406K238K4WkUbZRl9b2NYGmZzlaFVwy6uMS5U6HiTDDIlJnmTjY8jtOcE3RsSg1cWGD0vBK17HXp/XsK+O2DjTp/uj12KmzqT74Y0Wqv0WmV2RgN27QFT06bvTmBVGgy/2Wb0QYjOMQ8br87oLj7nxtE5aNP6Y0T9dp3KjRXGP40Z7/XZnPa4stVnPZ9h0jTZblhsF0wq8xL10x7qx520j3tEdtJRdmNBt/mMC0f8Vp7orkJiSyE1TJFuy0fZlTWdajZHIR6m5BcjdosSnDEaZwO0PvTTPeGjd2yR/mO6F2Z0k6eFYORqmvi3aZKbQswWX2GKAReT3Aw+4nJoih7xYkhh1r8Su/tMzOQjH9b7otm5xVmzLz2he9bF5aec/A/hQgUFXBtJkgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Generated Image"\n        title="The Gatsby OG image generated using node canvas"\n        src="/static/2312cdfb2bf43fc91f2408819b546442/c1b63/07407175-d0dc-51f4-9df7-ae572692cbba.png"\n        srcset="/static/2312cdfb2bf43fc91f2408819b546442/5a46d/07407175-d0dc-51f4-9df7-ae572692cbba.png 300w,\n/static/2312cdfb2bf43fc91f2408819b546442/0a47e/07407175-d0dc-51f4-9df7-ae572692cbba.png 600w,\n/static/2312cdfb2bf43fc91f2408819b546442/c1b63/07407175-d0dc-51f4-9df7-ae572692cbba.png 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",o.createElement(t.p,null,"The above image was generated using the following code and its the OG image for this blog."),"\n",o.createElement(t.h3,null,"Integrating ",o.createElement(t.a,{href:"https://github.com/Automattic/node-canvas"},o.createElement(t.code,null,"node-canvas"))," into the Gatsby Ecosystem"),"\n",o.createElement(t.p,null,"It is time to implement our idea. This is where the concept of ",o.createElement(t.code,null,"plugins")," come into picture. If you're interested in how plugins work and contribute to the coding standards, you can check out my ",o.createElement(t.a,{href:"https://samuellawrentz.com/blog/coding-standards-husky-typescript-lint-staged"},"coding standards blog post"),"."),"\n",o.createElement(t.h4,null,"Gatsby Plugins"),"\n",o.createElement(t.p,null,"Gatsby has almost 3000 plugins for each of your requirement be it meta tags, RSS feeds, image optimization, etc. These plugins tap into your website content/data and then create assets or does stuff that you want to before build, post build, etc."),"\n",o.createElement(t.h4,null,"The plugin"),"\n",o.createElement(t.p,null,"A local plugin can be created by creating a folder with package.json in it. The code goes into the ",o.createElement(t.code,null,"gatsby-node.js")," file. You can also learn more about creating plugins and how they can be used in your workflow by checking out my ",o.createElement(t.a,{href:"https://samuellawrentz.com/blog/jira-git-commit-workflow-vscode-extension/"},"Jira Git Commit Workflow VSCode Extension")," blog post."),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="js"  >\n          <code slot="code">// plugins/gatsby-node.js\nconst canvas = require(&#39;../../canvas.js&#39;)\nconst fs = require(&#39;fs&#39;)\nconst path = require(&#39;path&#39;)\nexports.createPages = async ({ actions, graphql }) =&gt; {\n\tconst folderpath = &#39;./public/og-images&#39;\n\tif (!fs.existsSync(folderpath)) \n          fs.mkdirSync(path.resolve(folderpath))\n\tconst result = await graphql(`{{query}}`)\n\n if (result.errors) {\n\tconsole.error(errors)\n\treturn console.error({ ...result.errors })\n\t}\n\n\tconst posts = result.data.allMdx.nodes\n\n\tfor (const node of posts) {\n\tcanvas.gen(node.frontmatter.title, node.id)\n\t}\n}</code>\n        </deckgo-highlight-code>'}}),"\n",o.createElement(t.p,null,"This code is nothing but a simple graphQL query which returns you the list of posts and then renders an OF image using the title of each post."),"\n",o.createElement(t.h2,null,"The Canvas"),"\n",o.createElement(t.p,null,"Canvas is a very fun thing to work in the HTML world. Canvas is pretty useful to do paint related stuff in browser. Thanks to ",o.createElement(t.code,null,"node-canvas")," we now have the capablity to play with canvas even on ",o.createElement(t.code,null,"node")," environments."),"\n",o.createElement(t.p,null,"The code for generating canvas can be found below. You can play with the canvas. This is the code that generates my OG images on the fly."),"\n",o.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<deckgo-highlight-code language="js"  >\n          <code slot="code">// canvas.js\nconst { createCanvas, loadImage } = require(&#39;canvas&#39;)\nconst fs = require(&#39;fs&#39;)\nconst path = require(&#39;path&#39;)\n// Size for the OG image\nconst canvas = createCanvas(1200, 630)\nconst ctx = canvas.getContext(&#39;2d&#39;)\n\nlet drawCircle = function (x, y, d) {\n  // Draw circle\n};\n\n\nexports.gen = function gen(title, id) {\n\n\n  // Linear Gradient\n  var grd = ctx.createLinearGradient(0, 0, 1200, 630);\n  grd.addColorStop(0, &#39;hsl(&#39; + 360 * Math.random() + &#39;,70%,60%)&#39;);\n  grd.addColorStop(1, &#39;hsl(&#39; + 360 * Math.random() + &#39;,100%,30%)&#39;);\n  ctx.fillStyle = grd;\n  ctx.fillRect(0, 0, 1200, 630);\n  const noOfSircles = Math.ceil(Math.random() * 7)\n  const noOfRect = Math.ceil(Math.random() * 7)\n  // Set fontstyle\n  ctx.font = &#39;900 70px Courier&#39;;\n  ctx.fillStyle = &#39;white&#39;;\n  d\n  // call helper method to get number of lines\n  const lines = getLines(ctx, title, 1080)\n  lines.forEach((line, i) =&gt; ctx.fillText(line, 60, 580 - (80 * (lines.length - i))))\n  // Set fontstyle\n  ctx.font = &#39;48px Courier&#39;;\n  ctx.fillText(&#39;{{Author Name}}&#39;, 60, 120)\n  ctx.font = &#39;100 24px Courier&#39;;\n  ctx.fillText(&#39;{{slogan}}&#39;, 60, 150)\n\n  const buffer = canvas.toBuffer(&#39;image/png&#39;)\n  console.info(&#39;Generating for&#39;, id)\n  // write as .png\n  fs.writeFileSync(path.resolve(`./public/og-images/${id}.png`), buffer)\n}\n</code>\n        </deckgo-highlight-code>'}}),"\n",o.createElement(t.p,null,"That is how the OG image for this blog is getting generated. Hope you liked this post. Stay tuned for more. You can explore more of my posts on ",o.createElement(t.a,{href:"https://samuellawrentz.com/hacks/react/understanding-arrow-functions-in-event-handlers"},"React")," and ",o.createElement(t.a,{href:"https://samuellawrentz.com/hacks/"},"other hacks")," I have shared."),"\n",o.createElement(t.p,null,"❤️❤️❤️"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?o.createElement(t,e,o.createElement(r,e)):r(e)};var l=n(4160),i=n(9861),c=n(6162),m=n(9202),d=n(2092),h=n(6243),g=n(1528),p=n(4021),u=n(9043);const f={Banner:g.Z};function b(e){(0,o.useEffect)((()=>{(0,m.q)()}),[]);const t=(0,u.u)(e.data.mdx.frontmatter.title,e.pageContext.nodes.length);return o.createElement("div",{className:"blog-content"},o.createElement(d.Z,{title:`Samuel Lawrentz | ${e.data.mdx.frontmatter.title}`,description:e.data.mdx.frontmatter.description,image:`/og-images/${e.data.mdx.frontmatter.path.replace(/[/-]/gi,"")}.png`,article:!0}),o.createElement(c.Z,{fluid:e.data.mdx.frontmatter.heroImage.childImageSharp.fluid,className:"hero-image"}),o.createElement("h1",null,e.data.mdx.frontmatter.title),o.createElement(h.g,{className:"tags",spacing:[0]},e.data.mdx.frontmatter.tags.map((e=>o.createElement("div",{className:"tag"},e)))),o.createElement("p",{className:"regularLight"},o.createElement("div",{className:"text-regularLight"},e.data.mdx.frontmatter.date)),o.createElement(h.g,{className:"blog-cont text-regular",spacing:[72]},o.createElement(a.Z,{components:f},o.createElement("div",null,e.children))),o.createElement(h.g,{spacing:[32]},o.createElement("h3",{className:"hacks-cont"},"Explore more articles"),o.createElement("ul",null,t.map((t=>{const n=e.pageContext.nodes[t];return o.createElement("li",{key:t},o.createElement(l.rU,{to:n.frontmatter.path,className:"gradient"},o.createElement("div",null,n.frontmatter.title)))})))),o.createElement(h.g,{spacing:[32]},"That's it for now, thanks for reading! You can find me at"," ",o.createElement("a",{href:"https://x.com/samuellawrentz"}," @samuellawrentz")," on X."),o.createElement(i.Z,{repo:"samuellawrentz/blog-comments",repoId:"R_kgDOH0vDow",category:"General",categoryId:"DIC_kwDOH0vDo84CQ111",mapping:"pathname",reactionsEnabled:"0",emitMetadata:"0",theme:"dark"}),o.createElement(p.do,{config:{alignment:"left",color:"social",enabled:!0,font_size:16,hide_desktop:!1,labels:"counts",language:"en",min_count:0,networks:["linkedin","facebook","twitter","pinterest","email","whatsapp"],padding:12,radius:4,show_total:!0,show_mobile:!0,show_toggle:!0,size:48,top:160,url:`https://samuellawrentz.com${e.data.mdx.frontmatter.path}`,description:e.data.mdx.frontmatter.description,title:e.data.mdx.frontmatter.title,message:`Check out this post by Samuel Lawrentz on - ${e.data.mdx.frontmatter.title}.\n            Find it here - https://samuellawrentz.com${e.data.mdx.frontmatter.path}\n            `,subject:`Samuel Lawrentz Blog - ${e.data.mdx.frontmatter.title}`,username:"samuellawrentz"}}))}function y(e){return o.createElement(b,e,o.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-blog-gatsby-og-image-post-mdx-0ad2dcb4beec4036a9c1.js.map