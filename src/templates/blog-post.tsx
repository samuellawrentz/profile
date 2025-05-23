import React, { useEffect, useRef } from "react";
import { Link, graphql } from "gatsby";
import Giscus from "@giscus/react";
import "./blog.scss";
import Img from "gatsby-image";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import SEO from "../components/seo";
import { Block } from "../components/block";
import Banner from "../components/banner";
import { MDXProvider } from "@mdx-js/react";
import { StickyShareButtons } from "sharethis-reactjs";
import { getNumbersFromString } from "../components/utils";
import { EmailBlock } from "../components/email-bar";

const components = { Banner };

function Blog(props: any) {
  useEffect(() => {
    deckDeckGoHighlightElement();
  }, []);

  const postNumbers = getNumbersFromString(
    props.data.mdx.frontmatter.title,
    props.pageContext.nodes.length,
  );
  return (
    <div className="blog-content">
      <SEO
        title={`Samuel Lawrentz | ${props.data.mdx.frontmatter.title}`}
        description={props.data.mdx.frontmatter.description}
        image={`/og-images/${props.data.mdx.frontmatter.path.replace(
          /[/-]/gi,
          "",
        )}.png`}
        article
      />
      <Img
        fluid={props.data.mdx.frontmatter.heroImage.childImageSharp.fluid}
        className="hero-image"
      />
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <Block className="tags" spacing={[0]}>
        {props.data.mdx.frontmatter.tags.map((tag: any) => (
          <div className="tag">{tag}</div>
        ))}
      </Block>
      <p className="regularLight">
        <div className="text-regularLight">
          {props.data.mdx.frontmatter.date}
        </div>
      </p>
      <Block className="blog-cont text-regular" spacing={[72]}>
        <MDXProvider components={components}>
          <div>{props.children}</div>
        </MDXProvider>
      </Block>
      <Block spacing={[32]}>
        <h3 className="hacks-cont">Explore more articles</h3>
        <ul>
          {postNumbers.map((i) => {
            const posts = props.pageContext.nodes;
            const randomPost = posts[i];
            return (
              <li key={i}>
                <Link to={randomPost.frontmatter.path} className="gradient">
                  <div>{randomPost.frontmatter.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Block>
      <Block spacing={[32]}>
        That's it for now, thanks for reading! You can find me at{" "}
        <a href="https://x.com/samuellawrentz"> @samuellawrentz</a> on X.
      </Block>
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
          alignment: "left", // alignment of buttons (left, right)
          color: "social", // set the color of buttons (social, white)
          enabled: true, // show/hide buttons (true, false)
          font_size: 16, // font size for the buttons
          hide_desktop: false, // hide buttons on desktop (true, false)
          labels: "counts", // button labels (cta, counts, null)
          language: "en", // which language to use (see LANGUAGES)
          min_count: 0, // hide react counts less than min_count (INTEGER)
          networks: [
            // which networks to include (see SHARING NETWORKS)
            "linkedin",
            "facebook",
            "twitter",
            "pinterest",
            "email",
            "whatsapp",
          ],
          padding: 12, // padding within buttons (INTEGER)
          radius: 4, // the corner radius on each button (INTEGER)
          show_total: true, // show/hide the total share count (true, false)
          show_mobile: true, // show/hide the buttons on mobile (true, false)
          show_toggle: true, // show/hide the toggle buttons (true, false)
          size: 48, // the size of each button (INTEGER)
          top: 160, // offset in pixels from the top of the page

          // OPTIONAL PARAMETERS
          url: `https://samuellawrentz.com${props.data.mdx.frontmatter.path}`, // (defaults to current url)
          description: props.data.mdx.frontmatter.description, // (defaults to og:description or twitter:description)
          title: props.data.mdx.frontmatter.title, // (defaults to og:title or twitter:title)
          message: `Check out this post by Samuel Lawrentz on - ${props.data.mdx.frontmatter.title}.
            Find it here - https://samuellawrentz.com${props.data.mdx.frontmatter.path}
            `, // (only for email sharing)
          subject: `Samuel Lawrentz Blog - ${props.data.mdx.frontmatter.title}`, // (only for email sharing)
          username: "samuellawrentz", // (only for twitter sharing)
        }}
      />
    </div>
  );
}

export default Blog;

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
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
  }
`;
