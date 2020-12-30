import React from "react"

/**
 * Wraps an svg icon.
 */
export function Svg(props) {
  return <span>{useCurrentColor(props.children || props.icon)}</span>
}

function useCurrentColor(Component) {
  if (typeof Component === "function") {
    return clone(<Component />, { className: "fill-current" })
  } else {
    return clone(Component, { className: "fill-current" })
  }
}

function clone(Component, extraProps) {
  return <Component.type {...Component.props} {...extraProps} />
}

/*
 * This wraps an icon in a disk.
 * @icon - an svg document
 * @size - default is 8
 */
export function RoundIcon(props) {
  const { color = "blue", className = "", size = 8 } = props
  const classes = `
    w-${size} h-${size} text-${color}-100 bg-${color}-800
    inline-block rounded-full p-2 flex-none
    ${className}
  `
  return (
    <span className={classes.trim()}>
      <Svg icon={props.icon} />
    </span>
  )
}
