import React from 'react'
import './index.scss'

function Input(props: any) {
  return (
    <div className='input-wrapper'><input {...props} /></div>
  )
}

export default Input