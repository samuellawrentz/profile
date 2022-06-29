/* eslint-disable react/no-unescaped-entities */
import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useEffect } from "react"
import Avatar from "../components/avatar"
import { Block } from "../components/block"
import Button from "../components/button"
import Sheet from "../components/sheet"
import { TextBlock } from "../components/typography"
import "../style.scss"

function IndexPage({data}: any) {
	useEffect(() => {
		const timelineElement = document.querySelector('.timeline-holder')!
		timelineElement.scrollTop = timelineElement?.scrollHeight || 0
	}, [])	
	return (
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
						<TextBlock type="heading0" spacing={[30]} className="blockquote">
				Software is a great combination between <br/>artistry and engineering
						</TextBlock>
						{/* <TextBlock>
				So, I’m an <Text type="regularBold" inline>Artist</Text
				> & an <Text type="regularBold" inline>Engineer</Text> - Th
				e <Text type="regularBold" inline>Frontend developer</Text>
						</TextBlock> */}
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
			<TextBlock type="title1">Timeline</TextBlock>
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
			<Avatar align="left"/>
			</Sheet>
			<Sheet background="#49306B">
			<TextBlock type="title1">I would want us to work together</TextBlock>
				<TextBlock spacing={[0, 25]}>
				I’m a kind of person who likes to connect with new people.<br/>
Get along with everyone easily.<br/>
Feel free to contact me. I’m available on almost all the platforms.<br/>
You could try google searching me for more info - Samuel Lawrentz
				</TextBlock>
				<Avatar />
			</Sheet>
		</main>
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