/* eslint-disable react/no-unescaped-entities */
import { graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import { Block } from "../components/block"
import Text, { TextBlock } from "../components/typography"
import Img from 'gatsby-image'
import "../style.scss"
import Avatar from "../components/avatar"
import SEO from "../components/seo"
import Button, { LinkButton } from "../components/button"
import { EmailBlock } from "../components/email-bar"
import { Icon } from "../components/icon"

function IndexPage({ data }: any) {
  useEffect(()=> {
    setTimeout(() => document.querySelector('.heart-image')?.classList.add('tilt'), 100)
  }, [])
  return (
<div className="main-content">
  <SEO />
<div className="container">
        <div className="intro"><h1>HI, I'M SAM</h1>
          <h2 className="subtext">I design and code beautifully simple things.</h2>
            <p>I'm that <b>Frontend Engineer</b> who comes up with creative CSS ideas at 2.00 am. Who always tries to reduce the no. of lines in any given file. <br /><br /> A <b>Javascript developer</b> who thinks that - <em>"There is always a simpler way to solve a problem."</em></p>
            <p>❤ ❤ ❤</p>
            </div>
        <div className="image heart-image"><div className="heart"></div><div className="hcard"></div></div>
      </div>
      <div className="section blog">
        <div className="section__title">Blog</div>
        <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill-opacity="1" d="M0,320L34.3,298.7C68.6,277,137,235,206,234.7C274.3,235,343,277,411,293.3C480,309,549,299,617,266.7C685.7,235,754,181,823,133.3C891.4,85,960,43,1029,37.3C1097.1,32,1166,64,1234,106.7C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
        <div className="end"></div>
        </div>
        <div className="blogs">
        {data.allMdx.nodes.map(({frontmatter: {date, title, path, heroImage, tags}}: any) => <Link to={path}><div className="card">
            <div className="card__image"><Img fluid={heroImage?.childImageSharp?.fluid} alt={title}/></div>
            <div className="card__date text-regularLight">{date}</div>
            <div className="card__details">
            <div className="card__title"><h3>{title}</h3></div>
            <Block display="flex" gap={48} alignItems="center" className="date-tag">            
            <div className="tags">{tags.map((tag:any) => <div className="tag">{tag}</div>)}</div>
            </Block>
            </div>
          </div></Link>)}
         <div className="card read-more">
            <div className="card__image"><Img fixed={data.book.childImageSharp.fixed}></Img></div>
            <div className="card__details">
            <div className="card__title"><h2>I write about Javascript, CSS, and all things web.</h2></div>
            <div className="card__description">If you love to read tech blogs? I got you covered. I post new content <b>every week.</b> I write about web, <b>ReactJS, Typescript, NodeJS, CSS, Developer productivity tips, </b> etc.</div>
            <Block spacing={[24, 34]} display="flex" gap={16} className="subscribe-container">
            <EmailBlock />
            <Link to={'/blog/'} className="gradient"><Button type="secondary">Read more</Button></Link></Block>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="section__title">Projects</div>
        <div className="cards">
        <Link to="/projects/quotes-generator" className="gradient card-container">
          <div className="card featured card__details">
            <div className="card__title text-title2"><h3>Quotes Generator</h3></div>
            <div className="card__description">A tool that helps you to create motivational quotes with backgrounds.</div>
            <div className="text-caption technologies">HTML Canvas, CSS, jQuery, UnsplashAPI, React</div>
            
          </div>
          </Link>
          <Link to="/projects/pasttenser" className="gradient card-container">
          <div className="card card__details"> 
            <div className="card__title text-title2"><h3>PastTenser</h3></div>
            <div className="card__description">An API that can give you the pastense of any verb that is provided.</div>
            <div className="text-caption technologies">ExpressJS, KnockoutJS, jQuery, NodeJs, CSS3, HTML5</div>
          </div>
          </Link>
          <a href="https://samuellawrentz.github.io/highcharts-networkChart/" target="_blank" className="gradient card-container">
          <div className="card card__details">
            <div className="card__title text-title2"><h3>Network chart</h3></div>
            <div className="card__description">This is a network chart built using Highchart APIs - helps you visualise connections.</div>
            <div className="text-caption technologies">Vannila Javascript, Highcharts Custom module, SVG, HTML, CSS</div>
          </div>
          </a>
        </div>
      </div>
      <div className="section">
        <div className="section__title">MY JOURNEY</div>
        <div className="timeline-holder">
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2017</TextBlock>
						<TextBlock type="title2">First Job - Burning Glass</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				I was hired as intern during campus placements, where I worked with C, C++ after which I became a full-time SDE 
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2018</TextBlock>
						<TextBlock type="title2">Got into the Web development team</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				Not sure if it was my luck or destiny, I was moved to the web development team that was incharge of building SPAs and dynamic web apps.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2019</TextBlock>
						<TextBlock type="title2">Frontend Developer - Plivo</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				As a Frontend Developer, I was given total freedom to implement my learnings. My job was to build performant web pages.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2020</TextBlock>
						<TextBlock type="title2">Covid - WFH - WTH</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				TBH, This year and the next year went by within a wink. All I did was sanitize my hands 3 times a day.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2021</TextBlock>
						<TextBlock type="title2">Became SDE - UI, Contacto</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				I moved into a product engineering team at <a href="https://plivo.com">Plivo</a> called <a href="https://www.contacto.com/" target="_blank">Contacto</a>, where I worked with awesome tech stack - Electron, React, Vue, Redux, SCSS, etc
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2022</TextBlock>
						<TextBlock type="title2">Deep Dive into React</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				I can say, that I've mastered React at this point*. It's all about understanding how values are passed, event loops, and other core concepts. This year helped me learn a lot of things and manage people. 
				</TextBlock>
			</Block>
      <Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2023</TextBlock>
						<TextBlock type="title2">Promoted! SDE-2 Driving Performance</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}} className="subtext">
				In 2023, as a Senior UI engineer at Plivo, I am focused on exciting new feature development and optimizing performance for large user data handling. I am eager to expand my skillset and explore the applications of machine learning and artificial intelligence to enhance Plivo's products and services.
				</TextBlock>
			</Block>
			</div>
      </div>
      <div className="section">
        <div className="section__title">MY CODING ACTIVITY</div>
        <TextBlock spacing={[40, 25]}>
          I use WakaTime to track my coding activity. It's a great tool to track your coding activity and helps you improve your productivity. It's facinating how IDE's have evolved over the years. 
          <p></p>
          I started with Notepad++, then moved to Visual Studio, and now I am using VSCode and NeoVim. Tracking time helps me to understand how much time I spend on each project and helps me to improve my productivity.
        </TextBlock>
        <div className="coding-activity">
        <figure><embed src="https://wakatime.com/share/@c2883fa9-c937-4e8e-8956-e5b47d6dbf96/ff4a5ca7-7dee-4ef7-b7e2-af05dcea72f0.svg"></embed></figure>
        </div>
      </div>
      {/* <div className="section">
      <div className="gh">
          <h3>My Github Contibutions</h3>
          <h5>Work Profile <a href="https://github.com/samuellawerentz" target="_blank"><Icon name="launch" size={16}/></a></h5>
          <Img fluid={data.work.childImageSharp.fluid} alt="Work Profile" />   
          <h5>Personal Profile <a href="https://github.com/samuellawrentz" target="_blank"><Icon name="launch" size={16}/></a></h5>
          <Img fluid={data.personal.childImageSharp.fluid} alt="Personal Profile" />
        </div>
      </div> */}
      <div className="section">
        <div className="section__title friends-title">We can be <Img fixed={data.friendsLogo.childImageSharp.fixed} alt="We can be friends"  className="friendsLogo" /></div>
        <div>
        <TextBlock spacing={[0, 25]}>
				I’m the kind of person who likes to connect with new people.<br/>
Who also likes to learn new technologies.<br/>
<TextBlock type="regular" spacing={[40, 20]}>There is lot more, try searching me on <a href="https://www.google.com/search?q=samuel lawrentz" target="_blank">Google!</a> </TextBlock>
				</TextBlock>
        <Block display="flex" alignItems="center" gap={16}><Avatar style={{width: 150, height: 150, marginTop: -18}} eyeType='Hearts' mouthType="Smile"/>
				<Block>
					<Text type="title2">Samuel Lawrentz</Text>
					<TextBlock type="regular" spacing={[16]}>Software Development Engineer UI - <a href="https://plivo.com" target="_blank">Plivo</a></TextBlock>
					<Block display="flex" gap={12} spacing={[12]}>
						<Text type="caption"><a href="https://github.com/samuellawrentz" target="_blank">Github</a></Text>
						<Text type="caption"><a href="https://in.linkedin.com/in/samuel-lawrentz">Linkedin</a></Text>
						<Text type="caption"><a href="https://twitter.com/samuellawrentz">Twitter</a></Text>
						<Text type="caption"><a href="https://codepen.io/samuellawrentz">Codepen</a></Text>
					</Block>
          <Block>
            <LinkButton className="gradient" type="secondary" size="small" target="_blank" to="https://resume.io/r/71xcDAIDW">
              <Block display="flex" gap={8} alignItems="center">
              <Icon name="launch" size={16}></Icon>
              <span>View Resume</span>
              </Block>
            </LinkButton>
          </Block>
				</Block>
				</Block>
        </div>
      </div>
</div>
  )
}

export default IndexPage


export const query = graphql`
  {
    friendsLogo: file(relativePath: { eq: "home/friends_logo.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    },
    work: file(relativePath: { eq: "home/work.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    personal: file(relativePath: { eq: "home/personal.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    book: file(relativePath: { eq: "home/book.webp" }) {
      childImageSharp {
        fixed(height: 350) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
      limit: 4
    ) {
      nodes {
        id
        excerpt(pruneLength: 140)
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
		      path
          tags
          heroImage {
            childImageSharp {
              fluid(maxWidth: 240) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`