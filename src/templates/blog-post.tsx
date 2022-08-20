import React, { useEffect, useRef } from 'react'
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Giscus from "@giscus/react";
import './blog.scss'
import Img from 'gatsby-image'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import SEO from '../components/seo'
import { Block } from '../components/block'
import Banner from '../components/banner'
import { MDXProvider } from '@mdx-js/react'
import {InlineReactionButtons} from 'sharethis-reactjs';
import {StickyShareButtons} from 'sharethis-reactjs';

deckDeckGoHighlightElement();

const components = { Banner }

function Blog(props: any) {

  return (
    <div className="blog-content">
      <SEO title={`Samuel Lawrentz | ${props.data.mdx.frontmatter.title}`} description={props.data.mdx.frontmatter.description} image={`/og-images/${props.data.mdx.frontmatter.path.replace(/[/-]/gi, '')}.png`} article/>
      <Img fluid={props.data.mdx.frontmatter.heroImage.childImageSharp.fluid} className="hero-image"/>
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <Block className="tags" spacing={[0]}>{props.data.mdx.frontmatter.tags.map((tag: any) => <div className='tag'>{tag}</div>)}</Block>
      <p className="regularLight">
        <div className='text-regularLight'>{props.data.mdx.frontmatter.date}</div>
      </p>
      <Block className='blog-cont text-regular' spacing={[72]}>
        <MDXProvider components={components}> 
        <div><MDXRenderer>{props.data.mdx.body}</MDXRenderer></div>
        </MDXProvider>
      </Block>
      <h4>Your opinion matters</h4>
      <p>This is a rating plugin that I've used from <a href="https://sharethis.com" target={"_blank"}>Share This</a>. Please do leave a rating, helps me improve the quality of my blog.
      Do share this with a friend or a collegue.
      </p>
      <InlineReactionButtons
          config={{
            alignment: 'left',  // alignment of buttons (left, center, right)
            enabled: true,        // show/hide buttons (true, false)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            padding: 12,          // padding within buttons (INTEGER)
            reactions: [          // which reactions to include (see REACTIONS)
              'slight_smile',
              'heart_eyes',
              'astonished',
              'rage'
            ],
            size: 48,             // the size of each button (INTEGER)
            spacing: 8,           // the spacing between buttons (INTEGER)

            // OPTIONAL PARAMETERS
            url: `https://samuellawrentz.com${props.data.mdx.frontmatter.path}` // (defaults to current url)
          }}
        />
        <Giscus
      repo="samuellawrentz/blog-comments"
      repoId="R_kgDOH0vDow"
      category="General"
      categoryId="DIC_kwDOH0vDo84CQ111"
      mapping="pathname"
      reactionsEnabled="0"
      emitMetadata="0"
      theme="dark"
    />
      <StickyShareButtons
          config={{
            alignment: 'left',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email',
              'whatsapp',
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page
 
            // OPTIONAL PARAMETERS
            url: `https://samuellawrentz.com${props.data.mdx.frontmatter.path}`, // (defaults to current url)
            description: props.data.mdx.frontmatter.description,       // (defaults to og:description or twitter:description)
            title: props.data.mdx.frontmatter.title,            // (defaults to og:title or twitter:title)
            message: `Check out this post by Samuel Lawrentz on - ${props.data.mdx.frontmatter.title}.
            Find it here - https://samuellawrentz.com${props.data.mdx.frontmatter.path}
            `,     // (only for email sharing)
            subject: `Samuel Lawrentz Blog - ${props.data.mdx.frontmatter.title}`,  // (only for email sharing)
            username: 'samuellawrentz' // (only for twitter sharing)
 
          }}
        />
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
        path
        tags
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