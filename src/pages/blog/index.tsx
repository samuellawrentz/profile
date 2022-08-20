import { graphql, Link } from 'gatsby'
import React, { useState } from 'react'
import SEO from '../../components/seo'
import './index.scss'
import Img from 'gatsby-image'
import { Block } from '../../components/block'
import Input from '../../components/input'
import Button from '../../components/button'

function Blog({ data }: any) {
  const [searchTerm, setSearchTerm] = useState('')
  const blogs = data.allMdx.nodes.filter(({excerpt, frontmatter: {title, description, tags}}: any) => `${excerpt}|${title}|${description}|${tags.join('|')}`.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
  return (
    <div>
        <SEO title="Samuel Lawrentz - Tech Blog, Web development, CSS, JS"
    description="How I work with frontend stack and automate stuff to solve the problem of maintaining, modifying, and upgrading frontend technologies."
    />
    <div className="blog-page-title">
      <h1>THE BLOG </h1>
      <div className="search-bar">
      <Block display='flex' spacing={[0, 32]} className='input-block-search'><Input maxlength="30" placeholder="Search for a blog or topic..." onChange={({target}: any) => setSearchTerm(target.value)} icon="search"/></Block>
      </div>
    </div>
    <div className="blogs home-blog">
        {blogs.map(({excerpt, frontmatter: {date, title, path, heroImage, description, tags}}: any, i: number) => {
          i = i + 1
            return <Link to={path} className={``}>
                <div className="card">
                <div className="card__image"><Img fluid={heroImage.childImageSharp.fluid} alt={title}/></div>
                <div className="card__date text-regularLight">{date}</div>
            <div className="card__details">
            <div className="card__title"><h3>{title}</h3></div>
            {!(i % 2 && i % 5) && <div className='subtext'>{description.length > 150 ? excerpt : description}</div>}
            <Block display="flex" gap={48} alignItems="center" className="date-tag">            
            <div className="tags">{tags.map((tag:any) => <div className="tag">{tag}</div>)}</div>
            </Block>
            </div>
                </div>
            </Link>
            
            })}
            {!blogs.length && <div className='not-found'>
              <div className='man-emoji'>
            ¯\_(ツ)_/¯
            </div>
            <div>Say that again? I'm pretty sure, we don't do that here.</div>
            </div>}
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
        excerpt(pruneLength: 150)
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