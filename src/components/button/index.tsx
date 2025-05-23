import { Link } from 'gatsby'
import React, { ReactNode } from 'react'
import './index.scss'

interface Prop {
    children: ReactNode,
    type?: string,
    size?: string,
    disabled?: boolean,
    onClick?: any,
}

function Button({type = "primary", size="regular", children, disabled, ...props} : Prop) {
  return (
    <span className={['button', `button-${type}`, `button-${size}`, `button-${disabled ? 'disabled': ''}`].join(' ')} {...props}>{children}</span>
  )
}

export const LinkButton = ({to, target, className, ...props}: any) => <Link to={to} className={"link-button " + className} target={target}><Button {...props}></Button></Link>
export default Button