import React from 'react'
import { Icon } from '../icon'
import './index.scss'

function Input(props: any) {
  return (
    <div className='input-wrapper'>
      {props.icon && <Icon color="surface2" name={props.icon} className="sl-icon"/>}
      <input {...props} />
    </div>
  )
}

export default Input