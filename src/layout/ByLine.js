import React from "react"

export function ByLine(props) {
  return (
    <div className="text-gray-600 italic flex items-center text-sm sm:text-base">
      {authorImage(props) && (
        <img
          alt="author profile"
          className="shadow w-8 h-8 rounded-full mr-3"
          src={`https://res.cloudinary.com/trailguide-as/image/upload/c_limit,w_400/v1/${authorImage(
            props
          )}`}
        />
      )}
      {props.author && (
        <span>
          {props.author}
          {props.date ? ", " + date(props.date) : ""}
          {props.text ? props.text : ""}
        </span>
      )}
    </div>
  )
}

function authorImage({ author, authorImage }) {
  if (/Bjørn/.test(author)) {
    return "bjorn/bjorn-portrait-2"
  } else {
    return authorImage
  }
}

function date(time) {
  const d = new Date(time)
  return d.getDate() + ". " + MONTHS[d.getMonth()] + " " + d.getFullYear()
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
