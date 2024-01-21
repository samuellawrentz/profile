import React from 'react'
import './style.scss'
//@ts-ignore
import { useless_facts } from '../../assets/json/facts.js'

function Footer() {
    const fact = useless_facts[Math.floor(Math. random() * useless_facts.length)];
  return (
    <div className='footer'>
        <h3>Wow! You've reached the end. Here's a useless fact before you leave.</h3>

        <div className="text-caption">Did you know?</div>
        <div className="fact-container">
        {fact}
        </div>
    </div>
  )
}

export default Footer