import React, { useEffect, useState } from 'react'
import './index.scss'
interface LoaderProps {
    size?: number,
    percent?: number,
}

function CircularProgress({size = 40, percent = 0}: LoaderProps) {
  const center = size / 2,
        strokeWidth = size/14,
        radius = center - strokeWidth,
        dashArray = 2 * Math.PI * radius,
        dashOffset = dashArray * ((100 - percent) / 100)
    const hue = 360 - percent * 240/100 
    
    return (
        <div id="cont">
            <svg id="svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`} version="1.1" xmlns="http://www.w3.org/2000/svg" strokeWidth={strokeWidth}>
                <circle r={radius} cx={center} cy={center} fill="transparent" stroke-dasharray={dashArray} stroke-dashoffset={dashOffset}></circle>
                <circle id="bar" stroke={`hsl(${hue}, 50%, 50%)`} r={radius} cx={center} cy={center} fill="transparent" stroke-dasharray={dashArray} stroke-dashoffset={dashOffset}></circle>
            </svg>
        </div>
    )
}

export default CircularProgress