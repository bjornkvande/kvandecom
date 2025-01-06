import { ByLine } from "./ByLine.tsx";

export function BlogHeader(
  props: {
    heading: string;
    ingress: string;
    author: string;
    date: number;
  },
) {
  const { heading, ingress, author, date } = props;
  if (heading || ingress || date) {
    return (
      <div className="pb-4 mb-8 relative">
        <div className="flex items-start justify-center text-center">
          {heading && <h1>{heading}</h1>}
        </div>
        {ingress && (
          <p className="text-base sm:text-center sm:text-lg text-gray-900 my-4">
            {ingress}
          </p>
        )}

        {(author || date) && (
          <div className="sm:mt-16 sm:flex sm:justify-end">
            <ByLine {...props} />
          </div>
        )}
      </div>
    );
  } else {
    return "";
  }
}
