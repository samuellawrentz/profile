import React, { ReactNode } from "react"
import { Block, Blockprops } from "../block"

interface Prop {
    children: ReactNode,
    type?: "title0" | "title1" | "heading0" | "regular" | "regularBold" | "regularLight" | "regular1" | "regular2" | "title2" | "regular3" | "small",
	inline?: boolean,
}

interface TextblockProp extends Blockprops, Prop {}

const textStyles : { [key: string]: React.CSSProperties } = {
	title0: {
		fontSize: 46,
		fontWeight: 300,
		lineHeight: "65px",
	},
	title1: {
		fontSize: 32,
		fontWeight: 600,
		lineHeight: "44px",
	},
	title2: {
		fontSize: 20,
		fontWeight: 600,
		lineHeight: "38px",
	},
	heading0: {
		fontSize: 24,
		fontWeight: 300,
		lineHeight: "38px",
	},
	regular: {
		fontSize: 20,
		lineHeight: "38px",
	},
	regular1: {
		fontSize: 20,
		lineHeight: "30px",
	},
	regular2: {
		fontSize: 16,
		lineHeight: "25px",
		fontWeight: 300,
	},
	regularLight: {
		fontSize: 20,
		lineHeight: "38px",
		fontWeight: 300,
	},
	regularBold: {
		fontSize: 20,
		lineHeight: "38px",
		fontWeight: 600,
	},
	small: {
		fontSize: 14,
		lineHeight: "20px",
		fontWeight: 300,
	},
}

function Text({children, inline = false, type = "regular"}: Prop) {
	const Tag = inline ? "span" : "div"
	return (
		<Tag className={["text", `text--${type}`].join(" ")} style={textStyles[type]}>{children}</Tag>
	)
}

function Textblock({children, inline=false, type="regular", ...blockProps} : TextblockProp){
	return <Block {...blockProps}><Text {...{inline, type}}>{children}</Text></Block>
}

export default Text
export const TextBlock = Textblock