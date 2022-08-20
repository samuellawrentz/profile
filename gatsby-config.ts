import type { GatsbyConfig } from "gatsby"
require("dotenv").config({
	path: `.env`,
})

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Samuel Lawrentz - The frontend Developer",
		siteUrl: "https://samuellawrentz.com",
		description: "I'm a frontend engineer, creative, smart and fuelled by the passion to develop new things. This is my portfolio built using React, GatsbyJS. I write on CSS3, HTML, Javascript and Typescript",
		image: '/ogimage.png',
		author: "Samuel Lawrentz",
		twitterUsername: "@samuellawrentz",
		keywords: ['frontend', 'web development', 'samuellawrentz', 'tech blog']
	},
	// More easily incorporate content into your pages through automatic 
	// TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-layout",
		'gatsby-plugin-robots-txt',
		"og-image-plugin",
		{
			resolve: "gatsby-plugin-google-analytics",
			options: {
				"trackingId": "UA-122999794-1",
			},
		}, {
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-MKMH3FD",

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: true,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: "gatsby" },
			},
		},
		"gatsby-plugin-image", "gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap", {
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							lineNumbers: true,
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200,
						},
					},
				],
			},
		},
		"gatsby-plugin-sharp", "gatsby-transformer-sharp", {
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/ // See below to configure properly
				}
			}
		}, {
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "images",
				"path": "./src/images/",
			},
			__key: "images",
		}, {
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "pages",
				"path": "./src/pages/",
			},
			__key: "pages",
		}, {
			resolve: "gatsby-source-filesystem",
			options: {
				"name": "blog",
				"path": "./blog/",
			},
		},
		{
			resolve: `gatsby-source-twitter`,
			options: {
				credentials: {
					consumer_key: process.env.T_KEY,
					consumer_secret: process.env.T_SECRET,
					bearer_token: process.env.T_TOKEN,
				},
				queries: {
					latestTweets: {
						endpoint: "search/tweets",
						params: {
							q: "#(#webdev, OR #css) (from:samuellawrentz)",
							tweet_mode: "extended",
						},
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
			{
			  site {
				siteMetadata {
				  title
				  description
				  siteUrl
				  site_url: siteUrl
				}
			  }
			}
		  `,
				feeds: [
					{
						serialize: ({ query: { site, allMdx } }: any) => {
							return allMdx.nodes.map((node: any) => {
								return Object.assign({}, node.frontmatter, {
									description: node.excerpt,
									date: node.frontmatter.date,
									url: site.siteMetadata.siteUrl + node.frontmatter.path,
									guid: site.siteMetadata.siteUrl + node.frontmatter.path,
									custom_elements: [{ "content:encoded": node.html }],
								})
							})
						},
						query: `
			  {
			  allMdx(
				sort: {fields: [frontmatter___date], order: DESC}
				filter: {frontmatter: {published: {eq: true}}}
			  ) {
				nodes {
				  id
				  excerpt(pruneLength: 100)
				  html
				  frontmatter {
					title
					date(formatString: "DD MMM, YYYY")
					path
				  }
				}
			  }
			}
			  `,
						output: "/rss.xml",
						title: "Samuel Lawrentz - The frontend Dev - Tech Blog",
						// optional configuration to insert feed reference in pages:
						// if `string` is used, it will be used to create RegExp and then test if pathname of
						// current page satisfied this regular expression;
						// if not provided or `undefined`, all pages will have feed reference inserted
						match: "^/blog/",
						// optional configuration to specify external rss feed, such as feedburner
						//   link: "https://feeds.feedburner.com/gatsby/blog",
					},
				],
			},
		}],
}

export default config
