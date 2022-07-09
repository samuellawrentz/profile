import React, { ReactNode } from "react"
import { Block, Blockprops } from "../block"

interface Prop {
    children: ReactNode,
    type?: "title0" | "title1" | "heading0" | "regular" | "regularBold" | "regularLight" | "regular1" | "regular2" | "title2" | "regular3" | "small",
	inline?: boolean,
}

interface TextblockProp extends Blockprops, Prop {}

function Text({children, inline = false, type = "regular"}: Prop) {
	const Tag = inline ? "span" : "div"
	return (
		<Tag className={["text", `text-${type}`].join(" ")}>{children}</Tag>
	)
}

function Textblock({children, inline=false, type="regular", ...blockProps} : TextblockProp){
	return <Block {...blockProps}><Text {...{inline, type}}>{children}</Text></Block>
}

export default Text
export const TextBlock = Textblock