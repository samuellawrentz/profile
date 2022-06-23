/* eslint-disable react/no-unescaped-entities */
import React from "react"
import Sheet from "../components/sheet"
import Text from "../components/typography"
import avatar from "../images/AvatarMaker.svg"
import "../style.scss"

function IndexPage() {
	return (
		<main>
			<Sheet background="#5386e4">
				<Text type="title">
					Hi there, <br />
					I'm Samuel Lawrentz
				</Text>
				<div style={{display: "flex"}}>
					<div>
						I'm a frontend developer
					</div>
					<div style={{textAlign: "right"}}>
						<img src={avatar} style={{width: 250}}></img>
					</div>
				</div>
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