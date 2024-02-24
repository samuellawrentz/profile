import React, { useEffect } from "react";
import { graphql } from "gatsby";
import "./blog.scss";
import Img from "gatsby-image";
import SEO from "../components/seo";
import { Block } from "../components/block";
import { MDXProvider } from "@mdx-js/react";
import { StickyShareButtons } from "sharethis-reactjs";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const components = {};

function Hack(props: any) {
  useEffect(() => {
    deckDeckGoHighlightElement();
  }, []);
  return (
    <div className="hacks-content">
      <SEO
        title={props.data.mdx.frontmatter.title}
        description={props.data.mdx.frontmatter.description}
        image={`/og-images/${props.data.mdx.frontmatter.path.replace(
          /[/-]/gi,
          "",
        )}.png`}
        article
      />
      <h1>{props.data.mdx.frontmatter.title}</h1>
      <Block className="tags" spacing={[0]}>
        {props.data.mdx.frontmatter.tags.map((tag: any) => (
          <div className="tag" key={tag}>
            {tag}
          </div>
        ))}
      </Block>
      <Block className="hacks-cont text-regular" spacing={[72]}>
        <MDXProvider components={components}>
          <div>{props.children}</div>
        </MDXProvider>
      </Block>
      <StickyShareButtons
        config={{
          alignment: "left",
          color: "social",
          enabled: true,
          font_size: 16,
          hide_desktop: false,
          labels: "counts",
          language: "en",
          min_count: 0,
          networks: [
            "linkedin",
            "facebook",
            "twitter",
            "pinterest",
            "email",
            "whatsapp",
          ],
          padding: 12,
          radius: 4,
          show_total: true,
          show_mobile: true,
          show_toggle: true,
          size: 48,
          top: 160,

          url: `https://samuellawrentz.com${props.data.mdx.frontmatter.path}`,
          description: props.data.mdx.frontmatter.description,
          title: props.data.mdx.frontmatter.title,
          message: `Check out this hack by Samuel Lawrentz - ${props.data.mdx.frontmatter.title}.
            Find it here - https://samuellawrentz.com${props.data.mdx.frontmatter.path}`,
          subject: `Samuel Lawrentz Hacks - ${props.data.mdx.frontmatter.title}`,
          username: "samuellawrentz",
        }}
      />
      <Block spacing={[32]}>
        Keep experimenting and happy coding! You can find me at{" "}
        <a href="https://x.com/samuellawrentz"> @samuellawrentz</a> on X.
      </Block>
    </div>
  );
}

export default Hack;

export const pageQuery = graphql`
  query HackQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
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
