import React from "react";

import CounterCompo from "./examples/CounterCompo";
import FormCompo from "./examples/FormCompo";
import CodeBox from "../../../../../components/CodeBox";

function UseStateTutorial() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">useState Hook in React</h2>

      <p>
        <strong>useState</strong> is a Hook that lets you add state to functional components.
        It's one of the most commonly used hooks in React and is essential for tracking and updating
        values like form inputs, counters, toggles, etc.
      </p>

      <h5 className="text-dark fw-semibold mt-4">🎯 Why useState?</h5>
      <ul>
        <li>✅ Helps in storing data within a component.</li>
        <li>✅ Allows re-rendering when the state changes.</li>
        <li>✅ Works without converting a function to a class component.</li>
      </ul>

      <h5 className="text-dark fw-semibold mt-4">🔧 Syntax:</h5>
      <CodeBox
        language="javascript"
        code={`const [state, setState] = useState(initialValue);`}
      />

      <h3 className="mt-5 mb-3 border-bottom pb-1">Example 1: Counter Using useState</h3>
      <CodeBox
        language="javascript"
        code={`import React, { useState } from "react";

function CounterCompo() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter Using useState</h1>
      <button onClick={decrement}>Decrement</button>
      <span>Count: {count}</span>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterCompo;`}
      />
      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <CounterCompo />

      <h3 className="mt-5 mb-3 border-bottom pb-1">Example 2: Form Using useState</h3>
      <CodeBox
        language="javascript"
        code={`import React, { useState } from "react";

function FormCompo() {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => setUserName(e.target.value);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={userName}
        onChange={handleChange}
      />
      <p>Hello {userName}</p>
    </div>
  );
}

export default FormCompo;`}
      />
      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <FormCompo />
    </div>
  );
}

export default UseStateTutorial;
