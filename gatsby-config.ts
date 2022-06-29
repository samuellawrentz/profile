import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Samuel Lawrentz - The frontend Developer",
		siteUrl: "https://www.yourdomain.tld",
	},
	// More easily incorporate content into your pages through automatic 
	// TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-sass", {
		resolve: "gatsby-plugin-google-analytics",
		options: {
			"trackingId": "UA-122999794-1",
		},
	}, "gatsby-plugin-image", "gatsby-plugin-react-helmet",
	"gatsby-plugin-sitemap", "gatsby-plugin-mdx",
	"gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
	},{
		resolve: "gatsby-source-filesystem",
		options: {
			"name": "blog",
			"path": "./blog/",
		},
	}],
}

export default config
