import { JSX } from "preact";

const version = "v1682408754";

/*
 * This returns an image with the src prepended to the
 * cloudinary image service.
 */
export function Image(
  props: {
    src: string;
    w?: number;
    className?: string;
    children?: JSX.Element;
  },
) {
  const { src, w = 1600, className = "", children, ...rest } = props;
  return (
    <div className={className}>
      <img className="rounded" {...rest} src={img(src, w)} />
      {children && <div className="p-2 text-sm text-gray-700">{children}</div>}
    </div>
  );
}

/**
 * Returns the cloudinary url.
 * @image - the image name, including the path
 * @size - the width of the image in pixels.
 */
function img(image: string, size = 1600) {
  return `https://res.cloudinary.com/trailguide-as/image/upload/c_limit,dpr_auto,w_auto:100:${size}/${version}/${image}`;
}
