import React from 'react'
import { Link, graphql } from "gatsby"

function Blog(props: any) {
  return (
    <div>{JSON.stringify(props)}</div>
  )
}

export default Blog