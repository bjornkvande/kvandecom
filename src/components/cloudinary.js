import React from "react"
import { Link } from "gatsby"

const version = "v1682408754"

/*
 * This returns an image with the src prepended to the
 * cloudinary image service.
 */
export function Image(props) {
  const { href, ...rest } = props
  if (href) {
    return (
      <Link to={href}>
        <Img className="my-8" {...rest} />
      </Link>
    )
  } else {
    return <Img className="my-8" {...rest} />
  }
}

/**
 * This returns a smaller right-floating.
 */
export function RightImage(props) {
  const { className = "", ...rest } = props
  return (
    <FloatImage
      className={`md:float-right md:ml-12 ${className}`.trim()}
      {...rest}
    />
  )
}

/**
 * This image is only shown on large screens.
 */
export function DesktopRightImage(props) {
  return <RightImage className="hidden sm:block" {...props} />
}

/**
 * Returns the cloudinary url.
 * @image the image name, including the path
 * @size - the width of the image in pixels.
 */
export function img(image, size = 1600) {
  return `https://res.cloudinary.com/trailguide-as/image/upload/c_limit,dpr_auto,w_auto:100:${size}/${version}/${image}`
}

function FloatImage(props) {
  const { className = "", ...rest } = props
  return <Image w={400} className={`mt-8 mb-4 ${className}`.trim()} {...rest} />
}

function Img(props) {
  const { src, w = 1600, className = "", children, ...rest } = props
  return (
    <div className={className}>
      <img alt="" className="rounded" {...rest} src={img(src, w)} />
      {children && <div className="p-2 text-sm text-gray-700">{children}</div>}
    </div>
  )
}
