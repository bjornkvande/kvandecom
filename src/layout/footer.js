import React from "react"

export function Footer(props) {
  const { className = "" } = props
  return (
    <footer
      className={`clear-both text-xs text-center mt-12 p-12 leading-relaxed ${className}`}
    >
      &copy; Bjørn Jarle Kvande | Trailguide AS | ObjectPlanet AS <br/>
      1998 - {new Date().getFullYear()}<br/>
      All rights reserved
    </footer>
  )
}
