module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx"],"defaultLayouts":{"default":"/Users/bjornjarle/projects/kvandecom/src/layout/layout_blog.js"},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/bjornjarle/projects/kvandecom","commonmark":false,"JSFrontmatterEngine":false,"engines":{}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
