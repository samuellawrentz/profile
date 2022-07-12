import React, { useEffect, useRef } from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import './blog.scss'
import Img from 'gatsby-image'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

function Blog(props: any) {

  return (
    <div className="blog-content">
      <Img fluid={props.data.mdx.frontmatter.heroImage.childImageSharp.fluid} className="hero-image"/>
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