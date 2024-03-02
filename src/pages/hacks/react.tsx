import { graphql } from "gatsby";
import React from "react";

import "./../blog/index.scss";
import { HacksTemplate } from "../../templates/hacks-home";

function Hacks({ data }: any) {
  return <HacksTemplate data={data} pageType="react" />;
}

export default Hacks;

export const query = graphql`
  {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: {
        frontmatter: { type: { eq: "hack" }, category: { eq: "react" } }
      }
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
          category
        }
      }
    }
  }
`;
