import React from 'react'
import { Block } from '../../../components/block'
import Button from '../../../components/button'
import Input from '../../../components/input'

function PastTenser() {
  return (
    <Block display='flex'>
        <Block flex='1 1 70%'>
        <h1>PastTenser</h1>
        <h2>A quick API that gives you the past tense of the requested verb.</h2>
        <Block display='flex' spacing={[0, 24]} className='input-block'><Input placeholder="Enter a verb"/><Button>Find</Button></Block>
        </Block>
        <Block flex='1 0 30%'>
            
        </Block>
    </Block>
  )
}

export default PastTenser