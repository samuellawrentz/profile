import React, { ReactNode } from "react"

interface Prop {
    children: ReactNode,
    type: string,
}

const textStyles : { [key: string]: {[key: string] : number | string} } = {
	title: {
		fontSize: 50,
		fontWeight: 600,
		lineHeight: 1.3,
	}
}

function Text({children, type}: Prop) {
	return (
		<div className={["text", `text--${type}`].join(" ")} style={textStyles[type]}>{children}</div>
	)
}

export default Text