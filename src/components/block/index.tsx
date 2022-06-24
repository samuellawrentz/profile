/**
 * A block element which provides spacing options like margin-bottom and margin-top.
 * This helps in accurate spacing.
 */

import React, { ReactNode } from "react"

export interface Blockprops {
    children: ReactNode,
	className?: string,
	spacing?: number[],
	style?: {[key:string] : string | number},
	display?: string,
	justifyContent?: string,
	alignItems?: string,
	horizontalSpacing?: number[],
	padding?: string,
	gap?: number,
    flex?: string,
}

export const Block = ({
	className = "",
	spacing,
	style,
	display,
	justifyContent,
	alignItems,
	horizontalSpacing,
	padding,
	gap,
	flex,
	...props
}: Blockprops) => {
	return (
		<div
			className={["block", className].join(" ")}
			style={{
				...style,
				marginTop: spacing?.[1],
				marginBottom: spacing?.[0],
				marginLeft: horizontalSpacing?.[0],
				marginRight:
            horizontalSpacing?.length === 1 ? horizontalSpacing?.[0] : horizontalSpacing?.[1],
				padding,
				display,
				justifyContent,
				alignItems,
				flex,
				gap,
			}}
			{...props}
		/>
	)
}