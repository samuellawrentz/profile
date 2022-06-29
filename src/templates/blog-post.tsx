import React, { useEffect, useRef } from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Sheet from '../components/sheet'
import './blog.scss'
import Text, { TextBlock } from '../components/typography'

function Blog(props: any) {

  return (
    <div className="blog-content">
      <Sheet background='#fff' autoHeight>
        <div className="title-content">
        <Text type='title1'>{props.data.mdx.frontmatter.title}</Text>
        <TextBlock type='regularLight' spacing={[16, 16]}>{props.data.mdx.frontmatter.description}</TextBlock>
        <Text type='heading0'>{props.data.mdx.frontmatter.date}</Text>
        </div>
      </Sheet>
      <Sheet background='#F6F930' autoHeight>
      <div className="content">
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </div>
    </Sheet>
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter{
        title
        description
        date(formatString: "DD MMM, YYYY")
      }
    }
  }`