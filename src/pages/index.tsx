/* eslint-disable react/no-unescaped-entities */
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect } from "react"
import Avatar from "../components/avatar"
import { Block } from "../components/block"
// import Button from "../components/button"
// import { Icon } from "../components/icon"
import Sheet from "../components/sheet"
import Text, { TextBlock } from "../components/typography"
import "../style.scss"

function IndexPage({data}: any) {
	return (
		<>
				<main>
			<Sheet background="#5386e4" >
				<Block display="flex" alignItems="flex-end">
					<Block flex="1 0 82%">
						<TextBlock type="title0" spacing={[17]}>
				Hi, I’m Samuel Lawrentz
						</TextBlock>
						<TextBlock type="title1" spacing={[36]}>
				I design and code beautifully <br/>simple things
						</TextBlock>
						<TextBlock type="heading0" spacing={[25]} className="blockquote">
				Software is a great combination between <br/>artistry and engineering
						</TextBlock>
						<TextBlock>
						Which makes me a <Text type="regularBold" inline> Frontend Engineer</Text>
						</TextBlock>
					</Block>
					<Block>
						<Avatar/>
					</Block>
				</Block>
			</Sheet>
			<Sheet background="#F6F930">
				<Block display="flex" justifyContent="space-between" alignItems="center" spacing={[40]}>
					<TextBlock type="title1">Recent Thoughts</TextBlock>
					{/* <Block display="flex" gap={16}>
						<Button type="primary">Blog</Button>
						<Button type="secondary">Tweets</Button>
					</Block> */}
				</Block>
				{data.allMdx.nodes.map(({excerpt, frontmatter: {date, title, path}}: any) => <Block spacing={[0, 10]}>
					<Block display="flex" gap={40}>
						<TextBlock type="regularLight">{date}</TextBlock>
						<Block flex="0 1 480px">
							<TextBlock type="title2"><Link to={path}>{title}</Link></TextBlock>
							<TextBlock type="regular2">{excerpt}</TextBlock>
						</Block>
					</Block>
				</Block>)}
				{/* <Block spacing={[0, 20]} horizontalSpacing={[140]}>
					<Button type="secondary">Read More</Button>
				</Block> */}
				<Avatar eyeType="Happy" />
			</Sheet>
			<Sheet background="#FF674D" type="timeline-sheet">
			<div className="timeline-holder">
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2017</TextBlock>
						<TextBlock type="title2">First Job - Burning Glass</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				I was hired as intern during campus placements, where I worked with C, C++ after which I became a full-time SDE 
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2018</TextBlock>
						<TextBlock type="title2">Got into the Web development team</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				Not sure if it was my luck or destiny, I was moved to the web development that was incharge of building SPAs and dynamic web apps.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2019</TextBlock>
						<TextBlock type="title2">Frontend Developer - Plivo</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				As a Frontend Developer, I was given total freedom to implement my learnings. My job was to build performant web pages.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2020</TextBlock>
						<TextBlock type="title2">Covid - WFH - WTH</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				TBH, This year and the next year went by within a wink. All I did was sanitize my hands 3 times a day.
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2021</TextBlock>
						<TextBlock type="title2">Became SDE - UI, Contacto</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				I moved into a product engineering team at Plivo called "Contacto", where I worked with awesome tech stack - Electron, React, Vue, Redux, SCSS, etc
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2022</TextBlock>
						<TextBlock type="title2">Engineering teams are great</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				It's been a good year till now. Let's hope I learn more and more new things and implement and experiment those teachings in my work.
				</TextBlock>
			</Block>
			</div>
			<div className="rectangle"></div>
			<Avatar align="left" eyeType="Side" mouthType="Twinkle"/>
			</Sheet>
			<Sheet background="#49306B">
			<TextBlock type="title1">We can be friends..</TextBlock>
				<TextBlock spacing={[0, 25]}>
				I’m the kind of person who likes to connect with new people.<br/>
Who also likes to learn new technologies.<br/>
<TextBlock type="regular2" spacing={[40, 20]}>There is lot more, try searching me on <a href="https://www.google.com/search?q=samuel lawrentz" target="_blank">Google!</a> </TextBlock>
				</TextBlock>
				<Block display="flex" alignItems="center" gap={16}><Avatar style={{width: 150, height: 150}} eyeType='Hearts' mouthType="Smile"/>
				<Block>
					<Text type="heading0">Samuel Lawrentz</Text>
					<TextBlock type="regular2" spacing={[16]}>Software Development Engineer UI - Plivo</TextBlock>
					<Block display="flex" gap={12}>
						<Text type="small"><a href="https://github.com/samuellawrentz" target="_blank">Github</a></Text>
						<Text type="small"><a href="https://in.linkedin.com/in/samuel-lawrentz">Linkedin</a></Text>
						<Text type="small"><a href="https://twitter.com/samuellawrentz">Twitter</a></Text>
						<Text type="small"><a href="https://codepen.io/samuellawrentz">Codepen</a></Text>
					</Block>
				</Block>
				</Block>
			</Sheet>
		</main>
		</>
	)
}

export default IndexPage


export const query = graphql`
  {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 90)
        frontmatter {
          title
          date(formatString: "DD MMM, YYYY")
		  path
        }
      }
    }
  }`