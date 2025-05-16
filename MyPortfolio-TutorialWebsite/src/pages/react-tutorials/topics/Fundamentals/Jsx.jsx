import React from "react";
import CodeBox from "../../../../components/CodeBox";

function Jsx() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">What is JSX?</h2>

      <p>
        <strong>JSX</strong> stands for <strong>JavaScript XML</strong>. It is a
        syntax extension for JavaScript used with React to describe what the UI
        should look like.
      </p>
      <p>
        JSX allows us to write HTML-like code directly within our JavaScript.
        Even though it looks like HTML, it's actually a syntactic sugar over
        JavaScript that gets compiled into React elements.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">
        ✅ Why Use JSX?
      </h5>
      <ul className="list-unstyled ps-3">
        <li>🔹 Makes code easier to understand and write.</li>
        <li>
          🔹 JSX gets compiled into JavaScript by Babel before rendering in the
          browser.
        </li>
        <li>
          🔹 React components are written using JSX, which makes them more
          readable and declarative.
        </li>
      </ul>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">
        ✅ JSX Syntax
      </h5>
      <p>Here's an example of JSX in action:</p>

      <CodeBox
        language="javascript"
        code={`import React from "react";

function Welcome() {
  return <h1>Hello, JSX!</h1>;
}

export default Welcome;`}
      />

      <p>
        In the above example, JSX allows us to return HTML-like code inside the
        JavaScript `return` statement.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">
        ✅ Important Points About JSX
      </h5>
      <ul className="list-unstyled ps-3">
        <li>
          🔹 JSX elements must have a closing tag (self-closing or paired). For
          example, <code>&lt;br/&gt;</code> or{" "}
          <code>&lt;div&gt;&lt;/div&gt;</code>.
        </li>
        <li>
          🔹 You can embed JavaScript expressions in JSX using curly braces:{" "}
          <code>{`{2 + 2}`}</code>
        </li>
        <li>
          🔹 JSX is case-sensitive. HTML attributes in JSX are written in
          camelCase (e.g., <code>className</code> instead of <code>class</code>
          ).
        </li>
      </ul>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">
        ✅ JSX Expressions
      </h5>
      <p>
        You can use JavaScript expressions inside JSX. This allows dynamic
        content to be rendered:
      </p>

      <CodeBox
        language="javascript"
        code={`const user = "John Doe";
const element = <h1>Hello, {user}!</h1>;`}
      />

      <p>
        This renders a greeting based on the value of the <code>user</code>{" "}
        variable.
      </p>
    </div>
  );
}

export default Jsx;
