import React, { ReactNode } from 'react'
import './index.scss'

interface Prop {
    children: ReactNode,
    type: string,
}

function Button({type, children} : Prop) {
  return (
    <span className={['button', `button-${type}`].join(' ')}>{children}</span>
  )
}

export default Button