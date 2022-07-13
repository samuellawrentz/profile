import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		title: "Samuel Lawrentz - The frontend Developer",
		siteUrl: "https://samuellawrentz.com",
		description: "I'm a frontend engineer, creative, smart and fuelled by the passion to develop new things. This is my portfolio built using React, GatsbyJS. I write on CSS3, HTML, Javascript and Typescript",
		image: '/ogimage.png',
		twitterUsername: "@samuellawrentz",
	},
	// More easily incorporate content into your pages through automatic 
	// TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: ["gatsby-plugin-sass", "gatsby-plugin-layout", {
		resolve: "gatsby-plugin-google-analytics",
		options: {
			"trackingId": "UA-122999794-1",
		},
	}, "gatsby-plugin-image", "gatsby-plugin-react-helmet",
	"gatsby-plugin-sitemap",{
		resolve: `gatsby-plugin-mdx`,
		options: {
		  extensions: [".mdx", ".md"],
		  gatsbyRemarkPlugins: [
			{
			  resolve: `gatsby-remark-highlight-code`,
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
	  },{
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
	},
    {
		resolve: `gatsby-source-twitter`,
		options: {
		  credentials: {
			consumer_key: "zksXR5cHChvfucJUOgyhvhZ1m",
			consumer_secret: "UtSqvBs1W3IrQYAnHzKANVDbmdiDeQDD7x63ybM8bB1ZxhHIkv",
			bearer_token: "AAAAAAAAAAAAAAAAAAAAAKgSewEAAAAAL%2Fo70W8H3aBGuxZA0i3olXXMYKw%3Dv6kQVIAS5dA1botigNQHsp8X6JE04HSrzNnaAZdKZb2Ce9nuHd",
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
	  }],
}

export default config
