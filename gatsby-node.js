const path = require("path")

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`)
  }


  // Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
    const result = await graphql(`
      query {
        allMdx {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
    result.data.allMdx.edges.forEach(edge => {
      createPage({
        path: `${edge.node.slug}`,
        component: blogPostTemplate,
        context: {
          title: edge.node.title,
        },
      })
    })
  }