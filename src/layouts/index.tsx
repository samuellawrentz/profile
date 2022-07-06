import React, { useEffect } from 'react'
// @ts-ignore
import {DrawCanvas, initCanvas} from "../components/bg-canvas/index.js"
import  Img from "../assets/logo.svg"
import { Link } from 'gatsby'

interface LayoutProps {
    children?: React.ReactNode
}

function Layout({children} : LayoutProps) {
    useEffect(() => {
		
		setTimeout(() => {
			initCanvas()
			DrawCanvas()
		}, 3000);
	}, [])
  return (
    <div>
        <div className="logo"><Link to="/"><Img /></Link></div>
        <canvas id="canvas" className="background-canvas"></canvas>
        <div>{children}</div>
    </div>
  )
}

export default Layout