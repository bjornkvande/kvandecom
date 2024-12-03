import React from "react"
import { Link } from "gatsby"

import { ByLine } from "./ByLine"

export function BlogHeader(props) {
  const { heading, ingress, authorImage, author, date } = props
  if (heading || ingress || authorImage || author || date) {
    return (
      <div className="pb-4 mb-8 relative">
        <div className="flex items-start justify-center text-center">
          {heading && <h1>{heading}</h1>}
        </div>
        <Breadcrumbs {...props} />
        {ingress && (
          <p className="text-base sm:text-center sm:text-lg text-gray-900 my-4">
            {ingress}
          </p>
        )}

        {(authorImage || author || date) && (
          <div className="sm:mt-16 sm:flex sm:justify-end">
            <ByLine {...props} />
          </div>
        )}
      </div>
    )
  } else {
    return ""
  }
}

function Breadcrumbs(props) {
  if (/\/destination\//.test(props.path) === false) {
    return ""
  }

  const crumbs = pathLabels(props.path)
  const links = crumbs.map((p, i) => (
    <Link
      className={`mr-2 text-xs ${i === crumbs.length - 1 ? "font-bold" : ""}`}
      key={p}
      to={getPath(crumbs, i)}
    >
      {p} {i < crumbs.length - 1 ? "›" : ""}
    </Link>
  ))
  return (
    <div>
      <Link to="/" className="mr-2 text-xs">
        Trailguide ›
      </Link>
      {links}
    </div>
  )
}

function pathLabels(path) {
  const firstLetterUpperCase = (p) => p.replace(/^./, p[0].toUpperCase())
  return path
    .split("/")
    .filter((p) => p)
    .map(firstLetterUpperCase)
}

function getPath(crumbs, index) {
  const path = [...crumbs]
  path.length = index + 1
  return "/" + path.map((c) => c.toLowerCase()).join("/")
}
