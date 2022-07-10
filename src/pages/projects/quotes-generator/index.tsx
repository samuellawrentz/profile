import React, { useEffect } from 'react'
import './style.css'
//@ts-ignore
import {initImage, refreshImage, downloadImage} from "../../../utils/scripts/quote.js"
import { Icon } from '../../../components/icon'



function QuotesGenerator() {
    useEffect(() => {
        initImage()
        
    })
  return (
    <div className="container quotes-page">
<div className='intro quotes-intro'>
<h1>Image Quote Generator</h1>
<div className="sub-heading text-regularLight">Built with ❤️ by Samuellawrentz</div>
<div>
  <p>This is a simple image generator that helps you put your quotes and download them as an image.</p>
  <h3>How to use it?</h3>
  <p>
    <ol>
      <li>The card loads up with some random picture</li>
      <li>Enter your text/quote</li>
      <li>Change/remove the author name</li>
      <li>Use the refresh button to change the image</li>
      <li>Click the download button once you are done with the changes</li>
    </ol>
  </p>
  <p className='text-regularLight blockquote'>
    More features like custom image, filters are on the way! Stay tuned.
  </p>
</div>
</div>
<div id="sam-container">
    <div className="contents">
      <div className="quote-container">
        <div className="image-container" style={{filter: 'brightness(1)'}}></div>
        <div className='quote'>
          <div className="text" contentEditable>Type here.</div>
          <div className="author" contentEditable>Samuel Lawrentz</div>
        </div>
      </div>
    </div>
    <div className="controls">
      <div className="image-selector control">
        <span className="button1" onClick={refreshImage}><Icon name="refresh" color='surface2'/></span>
        <span className="button1" onClick={downloadImage}><Icon name="download" color='surface2'/></span>
      </div>
    </div>
  </div>
    </div>
  )
}

export default QuotesGenerator