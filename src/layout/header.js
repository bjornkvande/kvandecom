import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

export function Header(props) {
  return (
    <header className="h-16 flex items-center bg-gray-700">
      <Link className="h-full flex items-center" to="/">
        <span className="inline-block w-12 h-12 mx-4">
          {portrait()}
        </span>
      </Link>
      <div className="inline-block text-gray-400 mx-2 text-4xl">
        Bjørn Jarle Kvande
      </div>
      <div>
        <NavBar />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function NavBar(props) {
  return (
    <nav className="h-16 px-4 text-base flex justify-end">
    </nav>
  )
}

function portrait() {
  return (<img
    alt="author profile"
    className="shadow rounded-full border border-gray-300"
    src="https://res.cloudinary.com/trailguide-as/image/upload/c_limit,w_400/v1/bjorn/bjorn-portrait-2019"
  />)
}
