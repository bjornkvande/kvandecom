import { Image } from "./Image.tsx";

export function BlogEntry(
  props: {
    title: string;
    date: string;
    image: string;
    url: string;
    children: string;
  },
) {
  return (
    <div className="p-2 my-8 sm:p-8 sm:my-12 sm:rounded sm:bg-white sm:border border-gray-400 sm:shadow-md">
      <h3 className="text-3xl text-gray-700 leading-10">{props.title}</h3>

      <a href={`/blog/${props.url}`}>
        <Image
          className="w-56 ml-8 mt-8 rounded md:float-right"
          src={props.image}
        />
      </a>

      <div className="text-gray-600 italic flex items-center text-sm sm:text-base my-6">
        <img
          className="shadow w-8 h-8 rounded-full mr-3"
          src={"https://res.cloudinary.com/trailguide-as/image/upload/c_limit,w_400/v1/bjorn/bjorn-portrait-2"}
        />
        Bjørn Jarle, {props.date}
      </div>

      <div className="leading-7">{props.children}</div>

      <a className="text-blue-600 block mt-4" href={`/blog/${props.url}`}>
        Read more...
      </a>
      <div className="clear-both" />
    </div>
  );
}
