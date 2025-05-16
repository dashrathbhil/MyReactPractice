import React from "react";
import CodeBox from "../../../../../components/CodeBox"; // for displaying static code
import StyleExample from "./examples/StyleExample";
import ExternalCssExample from "./examples/ExternalCssExample";

function StylingInReact() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">Styling in React</h2>

      <p>React supports multiple ways to add styles to your components:</p>
      <ul>
        <li>✅ Inline Styling</li>
        <li>✅ CSS Stylesheets (External CSS)</li>
        <li>✅ CSS Modules</li>
        <li>✅ Styled Components (via library, optional)</li>
      </ul>

      {/* ✅ Inline Styling */}
      <h4 className="mt-4">1️⃣ Inline Styling</h4>
      <p>
        Inline styles are defined as JavaScript objects with camelCased properties. You pass the object to the <code>style</code> prop.
      </p>

      <CodeBox
        language="javascript"
        code={`function InlineStyleExample() {
  const headingStyle = {
    color: "blue",
    fontSize: "24px",
    textAlign: "center",
  };

  return <h3 style={headingStyle}>This is styled using inline CSS!</h3>;
}

export default InlineStyleExample;`}
      />
      <h6 className="fw-semibold">✅ Output:</h6>
      <StyleExample/>

      {/* ✅ External CSS */}
      <h4 className="mt-4">2️⃣ External CSS File</h4>
      <p>
        You can create a <code>.css</code> file and import it into your component. This is similar to traditional HTML/CSS.
      </p>

      <CodeBox
        language="javascript"
        code={`// ExternalCssExample.jsx
import "./ExternalStyles.css";

function ExternalCssExample() {
  return <h3 className="external-text">Styled using external CSS file</h3>;
}

export default ExternalCssExample;`}
      />
      <CodeBox
        language="css"
        code={`/* ExternalStyles.css */
.style-container {
  margin: 20px;
  border: 1px solid #ccc;
  padding: 15px;
}

.external-style {
  color: darkblue;
  background-color: lightblue;
  padding: 10px;
  border-radius: 5px;
}`}
      />
      <h6 className="fw-semibold">✅ Output:</h6>
      <ExternalCssExample />

      {/* ✅ CSS Modules */}
      <h4 className="mt-4">3️⃣ CSS Modules</h4>
      <p>
        CSS Modules allow scoped CSS styles to a specific component, preventing naming conflicts.
      </p>

      <CodeBox
        language="javascript"
        code={`// CssModuleExample.jsx
import styles from "./ModuleStyles.module.css";

function CssModuleExample() {
  return <h3 className={styles.moduleText}>Styled using CSS Modules</h3>;
}

export default CssModuleExample;`}
      />
      <CodeBox
        language="css"
        code={`/* ModuleStyles.module.css */
.moduleText {
  color: purple;
  font-size: 22px;
  background-color: #f3f3f3;
  padding: 10px;
}`}
      />
      <h6 className="fw-semibold">✅ Output:</h6>
      {/* <CssModuleExample /> */}

      <h4 className="mt-4">🧠 Summary</h4>
      <ul>
        <li><strong>Inline Styling</strong>: Good for dynamic styles, but not ideal for complex styling.</li>
        <li><strong>External CSS</strong>: Simple and familiar, but may cause conflicts in large apps.</li>
        <li><strong>CSS Modules</strong>: Best for scoped and reusable styles.</li>
      </ul>
    </div>
  );
}

export default StylingInReact;
