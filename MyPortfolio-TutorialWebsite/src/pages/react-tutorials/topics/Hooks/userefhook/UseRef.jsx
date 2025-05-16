import React from "react";

import CodeBox from "../../../../../components/CodeBox";
import FocusInput from "./examples/FocusInput";
import PreviousValueCompo from "./examples/PreviousValueCompo";

function UseRef() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">useRef Hook in React</h2>

      <p>
        <strong>useRef()</strong> is a React Hook that returns a mutable object which persists for the full lifetime of the component.
      </p>

      <h5 className="text-dark fw-semibold mt-4">🎯 Why useRef?</h5>
      <ul>
        <li>✅ Persists across renders (doesn’t reset).</li>
        <li>✅ Doesn’t cause re-renders when updated.</li>
        <li>✅ Useful for accessing/modifying DOM elements directly.</li>
        <li>✅ Great for storing previous values or mutable state.</li>
      </ul>

      <h5 className="text-dark fw-semibold mt-4">🔧 Syntax:</h5>
      <CodeBox
        language="javascript"
        code={`const myRef = useRef(initialValue);`}
      />

      <h3 className="mt-5 mb-3 border-bottom pb-1">Example 1: Focus Input Field</h3>
      <CodeBox
        language="javascript"
        code={`import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.value = "Auto filled Text"
    inputRef.current.focus();
  };

  return (
    <>
      <h2>Focus the Input Field</h2>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type Something"
        className="form-control w-50"
      />
      <br /> <br />
      <button className="btn btn-primary my-3" onClick={handleFocusInput}>
        Focus Input
      </button>
    </>
  );
}

export default FocusInput;`}
      />
      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <FocusInput
       />

      <h3 className="mt-5 mb-3 border-bottom pb-1">Example 2: Track Previous Value</h3>
      <CodeBox
        language="javascript"
        code={`import React, { useEffect, useRef, useState } from "react";

function PreviousValueCompo() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <>
      <h1>Current : {count}</h1>
      <h2>Previous : {prevCount.current}</h2>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default PreviousValueCompo;`}
      />
      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <PreviousValueCompo />
    </div>
  );
}

export default UseRef;
