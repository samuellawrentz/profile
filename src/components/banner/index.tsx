import React, { ReactNode } from 'react'
import { Block } from '../block'
import { Icon } from '../icon'
import './index.scss'
interface BannerProps {
    type?: string,
    children?: ReactNode,
}

function Banner({type, children, ...props}: BannerProps) {
  return (
    <Block className='banner' display='flex' gap={16} alignItems="center">
        <div style={{fontSize: 0}}><Icon name="info" size={42}/></div>
        <div>{children}</div>
    </Block>
  )
}

export default Banner