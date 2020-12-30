/**
 * This is the main layout file and adds a header and a footer around
 * the content. The site meta data is gotten from the gatsby-config.js file.
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer } from "./footer"
import "./layout.css"

import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

export function Layout(props) {
  const { children } = props
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        className={props.header || ""}
        home={props.home || ""}
        siteTitle={data.site.siteMetadata.title}
        path={props.path}
      />
      <div className={props.className || ""}>
        <div className="p-12">{children}</div>
        <Footer className={props.footer} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
