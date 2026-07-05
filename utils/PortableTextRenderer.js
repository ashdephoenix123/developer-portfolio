import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/imageBuilder";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // choose your theme
import CodeBlock from "@/app/component/blogs/CodeBlock";

const headingStyle = "font-bold tracking-wide mb-6 font-serif";

export const PortableTextRenderer = ({ value }) => {
  const components = {
    types: {
      image: SampleImageComponent,
      code: ({ value }) => <CodeBlock value={value} />,
    },
    block: {
      normal: ({ children }) => <p className="mb-6">{children}</p>,
      h1: ({ children }) => (
        <h1 className={`${headingStyle} text-2xl`}>{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className={`${headingStyle} text-xl`}>{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className={`${headingStyle} text-lg`}>{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className={`${headingStyle} text-lg`}>{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className={`${headingStyle} text-lg`}>{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className={`${headingStyle} text-lg`}>{children}</h6>
      ),
      // Add more block renderers if needed
    },
    list: {
      // Ex. 1: customizing common list types
      bullet: ({ children }) => (
        <ul
          className="listItemStyle mb-6"
          style={{ listStyle: "disc", marginLeft: "20px" }}
        >
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol
          className="listItemStyle mb-6 list-decimal"
          style={{ listStyle: "decimal", marginLeft: "20px" }}
        >
          {children}
        </ol>
      ),

      // Ex. 2: rendering custom lists
      checkmarks: ({ children }) => (
        <ol className="m-auto text-lg">{children}</ol>
      ),
    },
    marks: {
      link: ({ value, children }) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <a
            href={value.href}
            rel={rel}
            target={value.blank ? "_blank" : "_self"}
            className="underline"
          >
            {children}
          </a>
        );
      },
    },
  };
  return <PortableText value={value} components={components} />;
};

export const SampleImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  return (
    <div className="my-12">
      <Image
        alt={value.alt || ""}
        src={urlFor(value).url()}
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
        width={width}
        height={height}
        className="mx-auto"
      />
    </div>
  );
};
