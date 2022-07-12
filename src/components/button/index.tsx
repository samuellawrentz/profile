import React, { ReactNode } from 'react'
import './index.scss'

interface Prop {
    children: ReactNode,
    type?: string,
    size?: string,
}

function Button({type = "primary", size="regular", children} : Prop) {
  return (
    <span className={['button', `button-${type}`, `button-${size}`].join(' ')}>{children}</span>
  )
}

export default Button