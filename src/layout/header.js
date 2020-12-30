import React from "react"
import PropTypes from "prop-types"

export function Header(props) {
  return <header></header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
