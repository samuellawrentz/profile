const canvas = require('../../canvas.js')
const fs = require('fs')
const path = require('path')
exports.createPages = async ({ actions, graphql }) => {
    const folderpath = './public/og-images'
    if (!fs.existsSync(folderpath)) fs.mkdirSync(path.resolve(folderpath))
    const result = await graphql(`
    {
        allMdx(
            sort: {fields: [frontmatter___date], order: DESC}
            filter: {frontmatter: {published: {eq: true}}}
          ) {
            nodes {
              id
              excerpt(pruneLength: 100)
              frontmatter {
                title
                date(formatString: "DD MMM, YYYY")
                    path
              }
            }
          }
}
    `)
  
    if (result.errors) {
      console.error(errors)
      return console.error({...result.errors})
    }
  
    const posts = result.data.allMdx.nodes
  
    for (const node of posts) {
        canvas.gen(node.frontmatter.title, node.id)
     }
  }