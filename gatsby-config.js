require("dotenv").config()
const path = require("path")

module.exports = {
  siteMetadata: {
    title: `kvande.com`,
    description:
      "Bjørn Jarle Kvande",
    author: `@bjornjarlekvande`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`],
        defaultLayouts: {
          default: require.resolve("./src/layout/layout_blog.js"),
        },
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
