require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Bjørn Jarle Kvande`,
    description: `
      Programmer at ObjectPlanet AS, and Trailguide AS.
    `,
    author: `@sjoggno`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `javascript`,
        path: `${__dirname}/src/pages/javascript/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: { plugins: [{ resolve: `gatsby-remark-highlight-code` }] },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: { default: require.resolve("./src/layout/default.js") },
        gatsbyRemarkPlugins: [{ resolve: `gatsby-remark-highlight-code` }],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true,
        tailwind: true, // Enable tailwindcss support
        develop: true, // Enable while using `gatsby develop`
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
