import React, { useEffect, useRef } from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Sheet from '../components/sheet'
import './blog.scss'
import Text, { TextBlock } from '../components/typography'
import Img from 'gatsby-image'

function Blog(props: any) {
console.log(props);

  return (
    <div className="blog-content">
      <Img fluid={props.data.mdx.frontmatter.heroImage.childImageSharp.fluid} className="hero-image" />
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <p className="regularLight">
        <div className='text-regularLight'>{props.data.mdx.frontmatter.date}</div>
      </p>
      <div className="text-regular content">
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </div>
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
        heroImage {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }`