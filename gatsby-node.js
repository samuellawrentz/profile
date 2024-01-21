const path = require("path");

exports.onPostBuild = ({ reporter }) => {
    reporter.info(`Your Gatsby site has been built!`);
};

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    id
                    frontmatter {
                        path
                        title
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panicOnBuild("Error loading MDX result", result.errors);
    }
    result.data.allMdx.nodes.forEach((node) => {
        createPage({
            path: `${node.frontmatter.path}`,
            component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            context: {
                title: node.frontmatter.title,
                id: node.id,
            },
        });
    });
};

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            fallback: {
                fs: false,
            },
        },
    });
};
