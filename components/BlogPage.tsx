import { JSX } from "preact";

export function BlogPage(
  props: {
    title: string;
    ingress?: string;
    date: string;
    children: JSX.Element | JSX.Element[];
  },
) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-center my-8">{props.title}</h1>
      {props.ingress && (
        <div className="text-lg text-center text-gray-700">
          {props.ingress}
        </div>
      )}

      <div className="text-gray-600 italic flex items-center text-sm sm:text-base my-8">
        <img
          className="shadow w-8 h-8 rounded-full mr-3"
          src={"https://res.cloudinary.com/trailguide-as/image/upload/c_limit,w_400/v1/bjorn/bjorn-portrait-2"}
        />
        Bjørn Jarle, {props.date}
      </div>

      <div>
        {props.children}
      </div>

      <footer class="clear-both text-gray-600 text-xs sm:text-sm p-2 sm:p-8">
        <div class="text-center mt-12">
          © Bjørn Jarle Kvande | All rights reserved
        </div>
      </footer>
    </div>
  );
}
