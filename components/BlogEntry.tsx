import { JSX } from "preact";

export function BlogEntry(props: { children: JSX.Element }) {
  return (
    <div className="p-2 my-8 sm:p-8 sm:my-12 sm:rounded sm:bg-white sm:border border-gray-400 sm:shadow-md">
      {props.children}
      <div className="clearfix" />
    </div>
  );
}
