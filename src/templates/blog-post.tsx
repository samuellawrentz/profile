import React, { useEffect, useRef } from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import './blog.scss'
import Img from 'gatsby-image'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import SEO from '../components/seo'
import { Block } from '../components/block'
deckDeckGoHighlightElement();

function Blog(props: any) {

  return (
    <div className="blog-content">
      <SEO title={props.data.mdx.frontmatter.title} description={props.data.mdx.frontmatter.description} image={`/og-images/${props.data.mdx.id}.png`}/>
      <Img fluid={props.data.mdx.frontmatter.heroImage.childImageSharp.fluid} className="hero-image"/>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <p className="regularLight">
        <div className='text-regularLight'>{props.data.mdx.frontmatter.date}</div>
      </p>
      <Block className='blog-cont text-regular'>
        <div><MDXRenderer>{props.data.mdx.body}</MDXRenderer></div>
      </Block>
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