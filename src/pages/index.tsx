/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Avatar from "../components/avatar"
import { Block } from "../components/block"
import Button from "../components/button"
import Sheet from "../components/sheet"
import { TextBlock } from "../components/typography"
import "../style.scss"

function IndexPage() {
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
					<Block display="flex" gap={16}>
						<Button type="primary">Blog</Button>
						<Button type="secondary">Tweets</Button>
					</Block>
				</Block>
				{[1,2,3].map(i => <Block spacing={[0, 10]}>
					<Block display="flex" gap={40}>
						<TextBlock type="regularLight">10.08.2022</TextBlock>
						<Block flex="0 1 480px">
							<TextBlock type="title2">Working with the Instagram API</TextBlock>
							<TextBlock type="regular2">lorem ipsum is the godfather of the things that are beingh askededskjla</TextBlock>
						</Block>
					</Block>
				</Block>)}
				<Block spacing={[0, 20]} horizontalSpacing={[140]}>
					<Button type="secondary">Read More</Button>
				</Block>
				<Avatar eyeType="Happy" />
			</Sheet>
			<Sheet background="#FF674D" type="timeline-sheet">
			<TextBlock type="title1">Timeline</TextBlock>
			<div className="timeline-holder">
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2017</TextBlock>
						<TextBlock type="title2">First Job</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
					Got campus placement at Burning Glass Inc,. I was hired as intern, where I worked with C, C++.. Then I was hired as a full time Software Engineer
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2018</TextBlock>
						<TextBlock type="title2">Got into the Web development team</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				After struggling with C and C++ modules for about 6 months. Not sure if it was my luck or destiny, I was moved to the web development that was incharge of building SPAs and dynamic web apps. This was the time before the dawn of React, Vue JS
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2018</TextBlock>
						<TextBlock type="title2">Got into the Web development team</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				After struggling with C and C++ modules for about 6 months. Not sure if it was my luck or destiny, I was moved to the web development that was incharge of building SPAs and dynamic web apps. This was the time before the dawn of React, Vue JS
				</TextBlock>
			</Block>
			<Block className="timeline" spacing={[30]}>
					<Block spacing={[5]} className="year">
						<TextBlock type="regularLight" style={{height: 24}}>2018</TextBlock>
						<TextBlock type="title2">Got into the Web development team</TextBlock>
					</Block>
				<TextBlock type="regular2" style={{width: 480}}>
				After struggling with C and C++ modules for about 6 months. Not sure if it was my luck or destiny, I was moved to the web development that was incharge of building SPAs and dynamic web apps. This was the time before the dawn of React, Vue JS
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