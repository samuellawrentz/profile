import React, { useState } from "react"
import { Block } from "../block"
import Button from "../button"
import Input from "../input"

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export const EmailBlock = () => {
    const [email, setEmail] = useState('')
    const isValid = !!validateEmail(email)
    return <Block display='flex' className='input-block'><Input maxlength="50" placeholder="Your email address" value={email} onChange={(({target}:any) => {
      if(email !== 'Thank you!') setEmail(target.value)
    })} type="email" /><Button disabled={email.length === 0 ? false: !isValid} onClick={() => {
      if(email.length)
      window.fetch('https://samuels-personal-bot.herokuapp.com/api/subscribe', {
        method: 'post',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({email}),
      }).then(res => res.status === 200 && setEmail('Thank you!')).catch(e => {
        console.log(e);
      })
    }}>Subscribe</Button></Block>
  }