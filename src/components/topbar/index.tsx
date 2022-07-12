import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import Button from '../button'
import './index.scss'

function TopBar() {
    const shouldShow = !JSON.parse(localStorage.getItem('visitedQuotes') || "false")
  return (
    <>{shouldShow ? (<div className='topbar'>
    <div className="topbar-content">
        <span className='topbar-text'>Check out the <Link to="projects/quotes-generator">quotes generator!</Link> It's awesome!</span> <Link className='button-cont' to='projects/quotes-generator'><Button type='secondary' size="small">Try now</Button></Link>
    </div>
</div>) : null}</>
  )
}

export default TopBar