import React, { ReactNode } from "react"
import "./index.scss"
import { pickTextColorBasedOnBgColorSimple } from "./sheet.util"

interface Props {
  children?: ReactNode,
  background: string,
  type ?: string,
}

function Sheet({children, background, type} : Props) {
	const color = pickTextColorBasedOnBgColorSimple(background, "#fff", "#444")
	return (
		<div className={`sheet ${type}`} style={{color}}>
			{children}
		</div>
	)
}

export default Sheet