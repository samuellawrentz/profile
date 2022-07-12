/* eslint-disable react/no-unescaped-entities */
import { graphql, Link } from "gatsby"
import React from "react"
import { Block } from "../components/block"
// import Button from "../components/button"
// import { Icon } from "../components/icon"
import Text, { TextBlock } from "../components/typography"
import Img from 'gatsby-image'
import "../style.scss"
import Button from "../components/button"
import Avatar from "../components/avatar"

function IndexPage({ data }: any) {
  
  return (
<div className="main-content">
<div className="container">
        <div className="intro"><h1>HI, I'M SAM</h1>
          <h2>I design and code beautifully simple things.</h2>
          <p>One of my favorite quotes from Bill Gates - 
            <em>"Software is a great combination between
            artistry and engineering."
            </em>
            </p>
            <p>In my words, Web development is a mix of creativity, artistry and engineering. And that is why I call myself a <b>Frontend Engineer.</b></p>
            <p>❤ ❤ ❤</p>
            </div>
        <div className="image"><div className="heart"></div></div>
      </div>
      <div className="section">
        <div className="section__title">Blog</div>
        <div className="cards">
        {data.allMdx.nodes.map(({excerpt, frontmatter: {date, title, path, heroImage}}: any) => <Link to={path}><div className="card">
            <div className="card__image"><Img fluid={heroImage.childImageSharp.fluid} alt=""/></div>
            <div className="card__title text-title2"><h3>{title}</h3></div>
            <div className="card__description">{excerpt}</div>
            <div className="card__date text-regularLight">{date}</div>
          </div></Link>)}
        </div>
      </div>
      <div className="section">
        <div className="section__title">Projects</div>
        <div className="cards">
        <Link to="/projects/quotes-generator">
          <div className="card">
            <div className="card__title text-title2"><h3>Quotes Generator</h3></div>
            <div className="card__description">A tool that helps you to create motivational quotes with backgrounds.</div>
            <div className="text-caption technologies">HTML Canvas, CSS, jQuery, UnsplashAPI, React</div>
            
          </div>
          </Link>
          <a href="https://samuellawrentz.github.io/PastTenser/" target="_blank">
          <div className="card"> 
            <div className="card__title text-title2"><h3>PastTenser</h3></div>
            <div className="card__description">An API that can give you the pastense of any verb that is provided.</div>
            <div className="text-caption technologies">ExpressJS, KnockoutJS, jQuery, NodeJs, CSS3, HTML5</div>
          </div>
          </a>
          <a href="https://samuellawrentz.github.io/highcharts-networkChart/" target="_blank">
          <div className="card">
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
				<TextBlock type="regular" style={{maxWidth: 480}}>
				I was hired as intern during campus placements, where I worked with C, C++ after which I became a full-time SDE 
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2018</TextBlock>
						<TextBlock type="title2">Got into the Web development team</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}}>
				Not sure if it was my luck or destiny, I was moved to the web development that was incharge of building SPAs and dynamic web apps.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2019</TextBlock>
						<TextBlock type="title2">Frontend Developer - Plivo</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}}>
				As a Frontend Developer, I was given total freedom to implement my learnings. My job was to build performant web pages.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2020</TextBlock>
						<TextBlock type="title2">Covid - WFH - WTH</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}}>
				TBH, This year and the next year went by within a wink. All I did was sanitize my hands 3 times a day.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2021</TextBlock>
						<TextBlock type="title2">Became SDE - UI, Contacto</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}}>
				I moved into a product engineering team at Plivo called "Contacto", where I worked with awesome tech stack - Electron, React, Vue, Redux, SCSS, etc
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[40]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2022</TextBlock>
						<TextBlock type="title2">Engineering teams are great</TextBlock>
					</Block>
				<TextBlock type="regular" style={{maxWidth: 480}}>
				It's been a good year till now. Let's hope I learn more and more new things and implement and experiment those teachings in my work.
				</TextBlock>
			</Block>
			</div>
      </div>
      <div className="section">
        <div className="section__title friends-title">We can be <Img fixed={data.friendsLogo.childImageSharp.fixed} alt=""  className="friendsLogo" /></div>
        <div>
        <TextBlock spacing={[0, 25]}>
				I’m the kind of person who likes to connect with new people.<br/>
Who also likes to learn new technologies.<br/>
<TextBlock type="regular" spacing={[40, 20]}>There is lot more, try searching me on <a href="https://www.google.com/search?q=samuel lawrentz" target="_blank">Google!</a> </TextBlock>
				</TextBlock>
        <Block display="flex" alignItems="center" gap={16}><Avatar style={{width: 150, height: 150}} eyeType='Hearts' mouthType="Smile"/>
				<Block>
					<Text type="title2">Samuel Lawrentz</Text>
					<TextBlock type="regular" spacing={[16]}>Software Development Engineer UI - Plivo</TextBlock>
					<Block display="flex" gap={12}>
						<Text type="caption"><a href="https://github.com/samuellawrentz" target="_blank">Github</a></Text>
						<Text type="caption"><a href="https://in.linkedin.com/in/samuel-lawrentz">Linkedin</a></Text>
						<Text type="caption"><a href="https://twitter.com/samuellawrentz">Twitter</a></Text>
						<Text type="caption"><a href="https://codepen.io/samuellawrentz">Codepen</a></Text>
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
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
		      path
          heroImage {
            childImageSharp {
              fluid(maxWidth: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`