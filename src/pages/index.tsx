/* eslint-disable react/no-unescaped-entities */
import Avatar from "avataaars"
import React from "react"
import { Block } from "../components/block"
import Sheet from "../components/sheet"
import Text, { TextBlock } from "../components/typography"
import "../style.scss"

function IndexPage() {
	return (
		<main>
			<Sheet background="#5386e4" >
				<Block display="flex" alignItems="center">
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
						<TextBlock>
				So, I’m an <Text type="regularBold" inline>Artist</Text> & an <Text type="regularBold" inline>Engineer</Text> - The <Text type="regularBold" inline>Frontend developer</Text>
						</TextBlock>
					</Block>
					<Block>
						<Avatar
							style={{width: "150px", height: "150px", position: "relative", right: 10}}
							avatarStyle='Circle'
							topType='ShortHairShortCurly'
							accessoriesType='Blank'
							hairColor='Black'
							facialHairType='BeardLight'
							facialHairColor='Black'
							clotheType='BlazerSweater'
							eyeType='Default'
							eyebrowType='DefaultNatural'
							mouthType='Twinkle'
							skinColor='Light'
						/>
					</Block>
				</Block>
			</Sheet>
			<Sheet background="#F6F930">
				<h1>About me</h1>
			</Sheet>
			<Sheet background="#FF674D">
				<h1>Projects</h1>
			</Sheet>
			<Sheet background="#058C42">
				<h1>Get in touch</h1>
			</Sheet>
		</main>
	)
}

export default IndexPage