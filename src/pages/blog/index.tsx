import { graphql, Link } from 'gatsby'
import React from 'react'
import SEO from '../../components/seo'
import './index.scss'
import Img from 'gatsby-image'
import { Block } from '../../components/block'

function Blog({ data }: any) {
  return (
    <div>
        <SEO title="Samuel Lawrentz - Tech Blog, Web development, CSS, JS"
    description="How I work with frontend stack and automate stuff to solve the problem of maintaining, modifying, and upgrading frontend technologies."
    />
    <h1 className="blog-page-title">THE BLOG </h1>
    <div className="blogs home-blog">
        {data.allMdx.nodes.map(({excerpt, frontmatter: {date, title, path, heroImage, description, tags}}: any, i: number) => { 
            const isFirst = i === 0
            const TitleTag = isFirst ? "h2" : "h3"
            return <Link to={path} className={``}>
                <div className="card">
                <div className="card__image"><Img fluid={heroImage.childImageSharp.fluid} alt={title}/></div>
                <div className="card__date text-regularLight">{date}</div>
            <div className="card__details">
            <div className="card__title"><h3>{title}</h3></div>
            <Block display="flex" gap={48} alignItems="center" className="date-tag">            
            <div className="tags">{tags.map((tag:any) => <div className="tag">{tag}</div>)}</div>
            </Block>
            </div>
                </div>
            </Link>
            
            })}
    </div>
    </div>
  )
}

export default Blog

export const query = graphql`
  {
    allMdx(
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      nodes {
        id
        excerpt(pruneLength: 90)
        frontmatter {
          title
          tags
          description
          date(formatString: "DD MMM, YYYY")
		      path
          heroImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`