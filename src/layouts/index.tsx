import React, { useEffect, useState } from 'react'
// @ts-ignore
import { DrawCanvas, initCanvas } from "../components/bg-canvas/index.js"
import img from "../assets/logo.svg"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import Footer from '../components/footer'
import { Icon } from '../components/icon'
import { Block } from '../components/block'
import CircularProgress from '../components/circular-progress'
import { StaticImage } from 'gatsby-plugin-image'

interface LayoutProps {
  children?: React.ReactNode
}
const texts = ['Can you stay a bit longer?', 'Little more please?', 'Yay, thank you for your time!']
const TimerBlock = () => {
  const [tick, setTick] = useState(0)
  const percent = tick / 0.6
  var date = new Date(0);
  date.setSeconds(tick);
  var timeString = date.toISOString().substr(14, 5);
  useEffect(() => {
    const interval = setInterval(() => 
      setTick(p => {
        if(p > 60)
          clearInterval(interval)
        return (p + 1)})
    , 1000)
  }, [])
  return  <div className={`timer ${percent < 100 ? 'visible' : ''}`} title="This helps me increase the session time of my site. Thank you!"><Block display='flex' alignItems='center' gap={16}><CircularProgress percent={percent} /><div>{timeString}</div></Block>
  <div className="text-caption">{texts[Math.floor(percent/39)]}</div></div>
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Helmet htmlAttributes={{
        lang: 'en',
        "color-mode": "dark"
      }}>
        <meta name="ahrefs-site-verification" content="6c3839f0b764fa4c45002167b36cb3f3236bcedbbe54ab9c262661b28995374a"></meta>
        <title>Samuel Lawrentz - The Frontend Dev - Blog, portfolio, web development</title>
      </Helmet>
      <Block className="logo" display='flex' justifyContent='space-between' alignItems='center'>
        <Link to="/" style={{textDecoration: 'none'}}><Block display='inline-flex' gap={16}><StaticImage src="../assets/logo.jpg" alt="Samuel Lawrentz Logo" width={60}/><div>
          <div>Samuel Lawrentz</div>
          <div className='text-caption'>The Frontend dev</div>
          </div></Block></Link>
        <Link className="rss" to="/rss.xml"><Icon name='rss_feed' size={32} title="RSS feed" /></Link>
      </Block>
      {/* <canvas id="canvas" className="background-canvas"></canvas>./ */}
      <main>{children}</main>
      <div className='time'>
        <TimerBlock />
      </div>
      <Footer />
    </div>
  )
}

export default Layout