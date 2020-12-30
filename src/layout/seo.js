/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export function SEO(props) {
  const { description, lang, title, page = {} } = props
  const { heading, ingress } = page

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const body = bodyText(ingress, props.children)

  // <meta property="og:url" content="{{ facebook_og.url }}" />
  // <meta property="og:description" content="{{ facebook_og.description }}" />
  // <meta property="og:image" content="{{ facebook_og.image }}" />

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { property: `og:title`, content: heading || title },
        { property: `og:description`, content: body || metaDescription },
        { property: `og:type`, content: `website` },
        { name: `twitter:card`, content: `summary` },
        { name: `twitter:creator`, content: site.siteMetadata.author },
        { name: `twitter:title`, content: heading || title },
        { name: `twitter:description`, content: body || metaDescription },
      ].concat()}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

function bodyText(ingress, children) {
  if (Array.isArray(children)) {
    const paragraphs = children
      .filter(c => c.props && c.props.mdxType === "p")
      .map(c => c.props.children)
    const body = paragraphs.length ? paragraphs[0] : ""
    return `
      ${ingress}.
      ${body}
    `.trim()
  } else {
    return ""
  }
}
