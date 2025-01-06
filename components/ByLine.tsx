export function ByLine(
  props: { author: string; text?: string },
) {
  return (
    <div className="text-gray-600 italic flex items-center text-sm sm:text-base">
      <img
        alt="author profile"
        className="shadow w-8 h-8 rounded-full mr-3"
        src={"https://res.cloudinary.com/trailguide-as/image/upload/c_limit,w_400/v1/bjorn/bjorn-portrait-2"}
      />
      {props.author && (
        <span>
          {props.author}
          {props.text ? props.text : ""}
        </span>
      )}
    </div>
  );
}
