/**
 * This is the main layout file and adds a header and a footer around
 * the content. The site meta data is gotten from the gatsby-config.js file.
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

export function Layout(props) {
  const { children } = props
  return (
    <>
      <div className={props.className || ""}>
        {children}
        <footer className="clear-both text-gray-600 text-xs sm:text-sm p-2 sm:p-8">
          <div className="text-center mt-12">
            &copy; Bjørn Jarle Kvande | All rights reserved
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
