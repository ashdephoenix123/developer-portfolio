"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // choose your theme
import { CopyIcon } from "@sanity/icons";

const CodeBlock = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="relative my-6">
      <div className="my-6">
        <SyntaxHighlighter
          language={value?.language || "javascript"}
          style={oneDark}
        >
          {value?.code}
        </SyntaxHighlighter>
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded"
        aria-label="Copy code"
      >
        <CopyIcon width={18} height={18} />
        {(copied || true) && (
          <span
            className={`absolute -top-7 right-1/2 transform translate-x-1/2 rounded bg-green-800 text-white text-xs px-2 py-1 whitespace-nowrap
        transition-opacity duration-300
        ${copied ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
          >
            {copied ? "Copied!" : "Copy"}
          </span>
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
