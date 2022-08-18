"use strict";(self.webpackChunksamuellawrentz_s_portfolio=self.webpackChunksamuellawrentz_s_portfolio||[]).push([[6691],{5775:function(e,t,a){a.d(t,{Q:function(){return m}});var l=a(3366),n=a(1597),r=a(7294),c=["type","size","children","disabled"],s=["to","target","className"];function i(e){var t=e.type,a=void 0===t?"primary":t,n=e.size,s=void 0===n?"regular":n,i=e.children,m=e.disabled,o=(0,l.Z)(e,c);return r.createElement("span",Object.assign({className:["button","button-"+a,"button-"+s,"button-"+(m?"disabled":"")].join(" ")},o),i)}var m=function(e){var t=e.to,a=e.target,c=e.className,m=(0,l.Z)(e,s);return r.createElement(n.rU,{to:t,className:"link-button "+c,target:a},r.createElement(i,m))};t.Z=i},1356:function(e,t,a){var l=a(7294);t.Z=function(e){return l.createElement("div",{className:"input-wrapper"},l.createElement("input",e))}},9149:function(e,t,a){a.r(t);var l=a(1597),n=a(7294),r=a(7809),c=a(8764),s=a(6162),i=a(2502),m=a(7572),o=a(5775),d=a(1356),u=function(){var e=(0,n.useState)(""),t=e[0],a=e[1],l=!!function(e){return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}(t);return n.createElement(r.g,{display:"flex",className:"input-block"},n.createElement(d.Z,{maxlength:"50",placeholder:"Your email address",value:t,onChange:function(e){var l=e.target;"Thank you!"!==t&&a(l.value)},type:"email"}),n.createElement(o.Z,{disabled:0!==t.length&&!l,onClick:function(){t.length&&window.fetch("https://samuels-personal-bot.herokuapp.com/api/subscribe",{method:"post",headers:{"content-type":"application/json;charset=UTF-8"},body:JSON.stringify({email:t})}).then((function(e){return 200===e.status&&a("Thank you!")})).catch((function(e){console.log(e)}))}},"Subscribe"))};t.default=function(e){var t=e.data;return(0,n.useEffect)((function(){setTimeout((function(){var e;return null===(e=document.querySelector(".heart-image"))||void 0===e?void 0:e.classList.add("tilt")}),100)}),[]),n.createElement("div",{className:"main-content"},n.createElement(m.Z,null),n.createElement("div",{className:"container"},n.createElement("div",{className:"intro"},n.createElement("h1",null,"HI, I'M SAM"),n.createElement("h2",{className:"subtext"},"I design and code beautifully simple things."),n.createElement("p",null,"I'm that ",n.createElement("b",null,"Frontend Engineer")," who comes up with creative CSS ideas at 2.00 am. Who always tries to reduce the no. of lines in any given file. ",n.createElement("br",null),n.createElement("br",null)," A ",n.createElement("b",null,"Javascript developer")," who thinks that - ",n.createElement("em",null,'"There is always a simpler way to solve a problem."')),n.createElement("p",null,"❤ ❤ ❤")),n.createElement("div",{className:"image heart-image"},n.createElement("div",{className:"heart"}),n.createElement("div",{className:"hcard"}))),n.createElement("div",{className:"section blog"},n.createElement("div",{className:"section__title"},"Blog"),n.createElement("div",{className:"wave"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},n.createElement("path",{"fill-opacity":"1",d:"M0,320L34.3,298.7C68.6,277,137,235,206,234.7C274.3,235,343,277,411,293.3C480,309,549,299,617,266.7C685.7,235,754,181,823,133.3C891.4,85,960,43,1029,37.3C1097.1,32,1166,64,1234,106.7C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"})),n.createElement("div",{className:"end"})),n.createElement("div",{className:"blogs"},t.allMdx.nodes.map((function(e){var t=e.frontmatter,a=t.date,c=t.title,i=t.path,m=t.heroImage,o=t.tags;return n.createElement(l.rU,{to:i},n.createElement("div",{className:"card"},n.createElement("div",{className:"card__image"},n.createElement(s.Z,{fluid:m.childImageSharp.fluid,alt:c})),n.createElement("div",{className:"card__date text-regularLight"},a),n.createElement("div",{className:"card__details"},n.createElement("div",{className:"card__title"},n.createElement("h3",null,c)),n.createElement(r.g,{display:"flex",gap:48,alignItems:"center",className:"date-tag"},n.createElement("div",{className:"tags"},o.map((function(e){return n.createElement("div",{className:"tag"},e)})))))))})),n.createElement("div",{className:"card read-more"},n.createElement("div",{className:"card__image"},n.createElement(s.Z,{fixed:t.book.childImageSharp.fixed})),n.createElement("div",{className:"card__details"},n.createElement("div",{className:"card__title"},n.createElement("h2",null,"I write about Javascript, CSS, and all things web.")),n.createElement("div",{className:"card__description"},"If you love to read tech blogs? I got you covered. I post new content ",n.createElement("b",null,"every week.")," I write about web, ",n.createElement("b",null,"ReactJS, Typescript, NodeJS, CSS, Developer productivity tips, ")," etc."),n.createElement(r.g,{spacing:[24,34],display:"flex",gap:16,className:"subscribe-container"},n.createElement(u,null),n.createElement(l.rU,{to:"/blog",className:"gradient"},n.createElement(o.Z,{type:"secondary"},"Read more"))))))),n.createElement("div",{className:"section"},n.createElement("div",{className:"section__title"},"Projects"),n.createElement("div",{className:"cards"},n.createElement(l.rU,{to:"/projects/quotes-generator",className:"gradient"},n.createElement("div",{className:"card featured card__details"},n.createElement("div",{className:"card__title text-title2"},n.createElement("h3",null,"Quotes Generator")),n.createElement("div",{className:"card__description"},"A tool that helps you to create motivational quotes with backgrounds."),n.createElement("div",{className:"text-caption technologies"},"HTML Canvas, CSS, jQuery, UnsplashAPI, React"))),n.createElement(l.rU,{to:"/projects/pasttenser",className:"gradient"},n.createElement("div",{className:"card card__details"},n.createElement("div",{className:"card__title text-title2"},n.createElement("h3",null,"PastTenser")),n.createElement("div",{className:"card__description"},"An API that can give you the pastense of any verb that is provided."),n.createElement("div",{className:"text-caption technologies"},"ExpressJS, KnockoutJS, jQuery, NodeJs, CSS3, HTML5"))),n.createElement("a",{href:"https://samuellawrentz.github.io/highcharts-networkChart/",target:"_blank",className:"gradient"},n.createElement("div",{className:"card card__details"},n.createElement("div",{className:"card__title text-title2"},n.createElement("h3",null,"Network chart")),n.createElement("div",{className:"card__description"},"This is a network chart built using Highchart APIs - helps you visualise connections."),n.createElement("div",{className:"text-caption technologies"},"Vannila Javascript, Highcharts Custom module, SVG, HTML, CSS"))))),n.createElement("div",{className:"section"},n.createElement("div",{className:"section__title"},"MY JOURNEY"),n.createElement("div",{className:"timeline-holder"},n.createElement(r.g,{className:"timeline",spacing:[40]},n.createElement(r.g,{spacing:[5],className:"year"},n.createElement(c.a,{type:"regularLight",style:{height:24}},"2017"),n.createElement(c.a,{type:"title2"},"First Job - Burning Glass")),n.createElement(c.a,{type:"regular",style:{maxWidth:480},className:"subtext"},"I was hired as intern during campus placements, where I worked with C, C++ after which I became a full-time SDE")),n.createElement(r.g,{className:"timeline",spacing:[40]},n.createElement(r.g,{spacing:[5],className:"year"},n.createElement(c.a,{type:"regularLight",style:{height:24}},"2018"),n.createElement(c.a,{type:"title2"},"Got into the Web development team")),n.createElement(c.a,{type:"regular",style:{maxWidth:480},className:"subtext"},"Not sure if it was my luck or destiny, I was moved to the web development that was incharge of building SPAs and dynamic web apps.")),n.createElement(r.g,{className:"timeline",spacing:[40]},n.createElement(r.g,{spacing:[5],className:"year"},n.createElement(c.a,{type:"regularLight",style:{height:24}},"2019"),n.createElement(c.a,{type:"title2"},"Frontend Developer - Plivo")),n.createElement(c.a,{type:"regular",style:{maxWidth:480},className:"subtext"},"As a Frontend Developer, I was given total freedom to implement my learnings. My job was to build performant web pages.")),n.createElement(r.g,{className:"timeline",spacing:[40]},n.createElement(r.g,{spacing:[5],className:"year"},n.createElement(c.a,{type:"regularLight",style:{height:24}},"2020"),n.createElement(c.a,{type:"title2"},"Covid - WFH - WTH")),n.createElement(c.a,{type:"regular",style:{maxWidth:480},className:"subtext"},"TBH, This year and the next year went by within a wink. All I did was sanitize my hands 3 times a day.")),n.createElement(r.g,{className:"timeline",spacing:[40]},n.createElement(r.g,{spacing:[5],className:"year"},n.createElement(c.a,{type:"regularLight",style:{height:24}},"2021"),n.createElement(c.a,{type:"title2"},"Became SDE - UI, Contacto")),n.createElement(c.a,{type:"regular",style:{maxWidth:480},className:"subtext"},"I moved into a product engineering team at ",n.createElement("a",{href:"https://plivo.com"},"Plivo")," called ",n.createElement("a",{href:"https://www.contacto.com/",target:"_blank"},"Contacto"),", where I worked with awesome tech stack - Electron, React, Vue, Redux, SCSS, etc")),n.createElement(r.g,{className:"timeline",spacing:[40]},n.createElement(r.g,{spacing:[5],className:"year"},n.createElement(c.a,{type:"regularLight",style:{height:24}},"2022"),n.createElement(c.a,{type:"title2"},"Engineering teams are great")),n.createElement(c.a,{type:"regular",style:{maxWidth:480},className:"subtext"},"It's been a good year till now. I want to learn more new things, implement and experiment those learnings in my work.")))),n.createElement("div",{className:"section"},n.createElement("div",{className:"section__title friends-title"},"We can be ",n.createElement(s.Z,{fixed:t.friendsLogo.childImageSharp.fixed,alt:"We can be friends",className:"friendsLogo"})),n.createElement("div",null,n.createElement(c.a,{spacing:[0,25]},"I’m the kind of person who likes to connect with new people.",n.createElement("br",null),"Who also likes to learn new technologies.",n.createElement("br",null),n.createElement(c.a,{type:"regular",spacing:[40,20]},"There is lot more, try searching me on ",n.createElement("a",{href:"https://www.google.com/search?q=samuel lawrentz",target:"_blank"},"Google!")," ")),n.createElement(r.g,{display:"flex",alignItems:"center",gap:16},n.createElement(i.Z,{style:{width:150,height:150},eyeType:"Hearts",mouthType:"Smile"}),n.createElement(r.g,null,n.createElement(c.Z,{type:"title2"},"Samuel Lawrentz"),n.createElement(c.a,{type:"regular",spacing:[16]},"Software Development Engineer UI - ",n.createElement("a",{href:"https://plivo.com",target:"_blank"},"Plivo")),n.createElement(r.g,{display:"flex",gap:12},n.createElement(c.Z,{type:"caption"},n.createElement("a",{href:"https://github.com/samuellawrentz",target:"_blank"},"Github")),n.createElement(c.Z,{type:"caption"},n.createElement("a",{href:"https://in.linkedin.com/in/samuel-lawrentz"},"Linkedin")),n.createElement(c.Z,{type:"caption"},n.createElement("a",{href:"https://twitter.com/samuellawrentz"},"Twitter")),n.createElement(c.Z,{type:"caption"},n.createElement("a",{href:"https://codepen.io/samuellawrentz"},"Codepen"))),n.createElement(r.g,null))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-eca51bece9748fc8320d.js.map