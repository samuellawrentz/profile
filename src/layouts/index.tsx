import React, { useEffect } from 'react'
// @ts-ignore
import {DrawCanvas, initCanvas} from "../components/bg-canvas/index.js"
import  Img from "../assets/logo.svg"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import TopBar from '../components/topbar'
import Footer from '../components/footer'
import { Icon } from '../components/icon'
import { Block } from '../components/block'

interface LayoutProps {
    children?: React.ReactNode
}

function Layout({children} : LayoutProps) {
  return (
    <div>
        <Helmet   htmlAttributes={{
    lang: 'en',
    "color-mode": "dark"
  }}>
    <meta name="ahrefs-site-verification" content="6c3839f0b764fa4c45002167b36cb3f3236bcedbbe54ab9c262661b28995374a"></meta>
            <title>Samuel Lawrentz - The Frontend Dev - Blog, portfolio, web development</title>
        </Helmet>
        <Block className="logo" display='flex' justifyContent='space-between' alignItems='center'>
          <Link to="/"><Img /></Link>
          <Link className="rss" to="/rss.xml"><Icon name='rss_feed' size={32} title="RSS feed"/></Link>
          </Block>
        {/* <canvas id="canvas" className="background-canvas"></canvas> */}
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout