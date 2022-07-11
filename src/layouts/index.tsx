import React, { useEffect } from 'react'
// @ts-ignore
import {DrawCanvas, initCanvas} from "../components/bg-canvas/index.js"
import  Img from "../assets/logo.svg"
import { Link } from 'gatsby'
import Helmet from "react-helmet"

interface LayoutProps {
    children?: React.ReactNode
}

function Layout({children} : LayoutProps) {
    useEffect(() => {
		
		setTimeout(() => {
			// initCanvas()
			// DrawCanvas()
		}, 3000);
	}, [])
  return (
    <div>
        <Helmet   htmlAttributes={{
    lang: 'en',
    "color-mode": "dark"
  }}>
            <title>Samuel Lawrentz - The Frontend Dev - Blog, portfolio, web development</title>
        </Helmet>
        <div className="logo"><Link to="/"><Img /></Link></div>
        {/* <canvas id="canvas" className="background-canvas"></canvas> */}
        <main>{children}</main>
    </div>
  )
}

export default Layout