import React, { useEffect } from 'react'
import './style.css'
//@ts-ignore
import {initImage, refreshImage, downloadImage} from "../../../utils/scripts/quote.js"
import { Icon } from '../../../components/icon'
import { Helmet } from 'react-helmet'


function QuotesGenerator() {
    useEffect(() => {
        initImage()
    })
  return (
    <div id="sam-container">
      <Helmet>
      <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="></script>
      </Helmet>
    <div className="heading">
      <h1>Image Quote Generator</h1>
      <div className="sub-heading">Built with ❤️ by Samuellawrentz</div>
    </div>
    <div className="contents">
      <div className="quote-container">
        <div className="image" style={{filter: 'brightness(1)'}}></div>
        <div className='quote'>
          <div className="text" contentEditable>Type your quote here and then press download</div>
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
  )
}

export default QuotesGenerator