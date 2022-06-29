import React, { forwardRef, MutableRefObject, ReactNode, Ref } from "react"
import "./index.scss"
import { pickTextColorBasedOnBgColorSimple } from "./sheet.util"

interface Props {
  children?: ReactNode,
  background: string,
  type ?: string,
}

const Sheet = forwardRef<HTMLDivElement, Props>(({children, background, type}, ref) => {
	const color = pickTextColorBasedOnBgColorSimple(background, "#fff", "#444")
	
	return (
		<div className={`sheet ${type}`} style={{color}} ref={ref}>
			{children}
		</div>
	)
})

export default Sheet