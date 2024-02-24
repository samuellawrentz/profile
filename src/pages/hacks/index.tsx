import { graphql, Link } from "gatsby";
import React, { useState } from "react";

import SEO from "../../components/seo";
import "./../blog/index.scss";
import { Block } from "../../components/block";
import Input from "../../components/input";

function Hacks({ data }: any) {
  const [searchTerm, setSearchTerm] = useState("");
  const hacks = data.allMdx.nodes.filter(
    ({ excerpt, frontmatter: { title, description, tags } }: any) =>
      `${excerpt}|${title}|${description}|${tags.join("|")}`
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1,
  );
  return (
    <div>
      <SEO
        title="Hacks for Developers - Web development, CSS, JS"
        description=" Unlock top-tier web development, terminal, database, and computer science hacks on our unique platform. Discover easy-to-follow tutorials, in-depth guides, and time-saving shortcuts for beginners and professionals alike. Boost your coding skills and tech knowledge today!"
      />
      <div className="blog-page-title">
        <h1>THE HACKS</h1>
        <div className="search-bar">
          <Block
            display="flex"
            spacing={[0, 32]}
            className="input-block-search"
          >
            <Input
              maxlength="30"
              placeholder="Search for a hack or topic..."
              onChange={({ target }: any) => setSearchTerm(target.value)}
              icon="search"
            />
          </Block>
        </div>
      </div>
      <div className="hacks">
        {hacks.map(
          (
            {
              excerpt,
              frontmatter: { date, title, path, description, tags },
            }: any,
            i: number,
          ) => {
            i = i + 1;
            return (
              <Link to={path} className={``} key={i}>
                <div className="gradient">
                  <h4>{title}</h4>
                  <div className="subtext text-subtext">{description}</div>
                  <Block display="flex" gap={8} style={{ fontSize: 14 }}>
                    <em>
                      <b>Tags: </b>
                      {tags.join(", ")}
                    </em>
                  </Block>
                </div>
              </Link>
            );
          },
        )}
        {!hacks.length && (
          <div className="not-found">
            <div className="man-emoji">¯\_(ツ)_/¯</div>
            <div>Say that again? I'm pretty sure, we don't do that here.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hacks;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { type: { eq: "hack" } } }
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
        }
      }
    }
  }
`;
