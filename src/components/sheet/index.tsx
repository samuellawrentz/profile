import React, { forwardRef, MutableRefObject, ReactNode, Ref, useEffect, useRef } from "react"
import "./index.scss"
import { pickTextColorBasedOnBgColorSimple } from "./sheet.util"

interface Props {
  children?: ReactNode,
  background: string,
  type ?: string,
  autoHeight?: boolean
}


const Sheet = (({children, background, type, autoHeight} : Props) => {
	const color = pickTextColorBasedOnBgColorSimple(background, "#fff", "#444")
	const sheetRef = useRef<HTMLDivElement>(null)
	useEffect(()=> {
		if(autoHeight)
		sheetRef.current?.style.setProperty('--sheet-height', sheetRef.current.querySelector('.sheet-content')!.scrollHeight + 120 + 'px')
	  }, [])
	return (
		<div className={`sheet ${type}`} style={{color}} ref={sheetRef}>
			<div className="sheet-content">
			{children}
			</div>
		</div>
	)
})

export default Sheet