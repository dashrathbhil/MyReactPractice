import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // dark theme
import "prismjs/components/prism-javascript"; // import language

function CodeBox({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll(); // trigger syntax highlighting
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <>
    <div
  className="position-relative mb-4"
  // style={{ maxWidth: "90%" }}
>
  <pre className="rounded overflow-auto" style={{ whiteSpace: "pre", margin: 0 }}>
    <code className={`language-${language}`}>{code}</code>
  </pre>
  <button
    className="btn btn-light btn-sm position-absolute top-0 end-0 m-2"
    onClick={handleCopy}
  >
    {copied ? "Copied!" : "Copy"}
  </button>
</div>

        </>
  );
}

export default CodeBox;
