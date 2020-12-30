import React from "react"

export function Footer(props) {
  const { className = "" } = props
  return (
    <footer
      className={`clear-both text-sm p-4 sm:p-8 leading-relaxed ${className}`}
    >
      <div className="text-center mt-12 mb-6">
        &copy; Bjørn Jarle Kvande 1996 - {new Date().getFullYear()} | All rights
        reserved
      </div>
    </footer>
  )
}
