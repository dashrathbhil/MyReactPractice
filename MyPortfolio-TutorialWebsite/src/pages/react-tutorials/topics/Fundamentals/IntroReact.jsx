import React from "react";
import CodeBox from "../../../../components/CodeBox";
function IntroReact() {
  return (
    <div className="container   py-4">
      <h2 className="text-primary mb-4 fw-bold fs-3 fs-md-2">What is React?</h2>

      <p>
        <strong>React</strong> is a popular <strong>JavaScript library</strong> used to build modern and interactive <strong>user interfaces (UIs)</strong> for web applications. It was developed by <strong>Facebook</strong> and is maintained by <strong>Meta</strong> along with a large developer community.
      </p>

      <h5 className="mt-4 text-dark fw-semibold">🎯 Why Learn React?</h5>
      <ul className="list-unstyled ps-3">
        <li>✅ Build fast and responsive user interfaces</li>
        <li>✅ Reuse components to save development time</li>
        <li>✅ Manage complex UIs with ease</li>
        <li>✅ Used by top companies like Facebook, Instagram, and Netflix</li>
      </ul>

      <h5 className="mt-4 text-dark fw-semibold">🧠 How Does React Work?</h5>
      <p>
        React uses a <strong>Virtual DOM</strong> — a lightweight copy of the browser's DOM. Instead of reloading the whole page when something changes, React updates only the specific part that changed. This makes your app faster and more efficient.
      </p>

      <h5 className="mt-4 text-dark fw-semibold">🧱 Component-Based Architecture</h5>
      <p>
        In React, everything is built using <strong>components</strong>. These are like building blocks — small pieces of UI that you can reuse and combine to build complex interfaces.
      </p>

      <div className="alert alert-info mt-4">
        <strong>In simple words:</strong> React helps you build fast, user-friendly websites by organizing your code into components and updating only what’s needed — making development smoother and easier.
      </div>
       <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">React Components and Getting Started</h2>

      <p>
        React apps are built using <strong>components</strong>. These are small, reusable building blocks that define parts of your UI. You can think of a component as a JavaScript function that returns HTML.
      </p>

      <h5 className="text-dark fw-semibold mt-5 mb-3 border-bottom pb-1">✅ How to Get Started</h5>

      <p><strong>Option 1:</strong> Use CDN (for quick demos)</p>
      <CodeBox
        language="html"
        code={`<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
      />

      <p><strong>Option 2:</strong> Using Create React App (Recommended)</p>
      <CodeBox
        code={`npx create-react-app my-app
cd my-app
npm start`}
      />

      <h5 className="text-dark fw-semibold mt-5 mb-3 border-bottom pb-1">✅ Hello World Example</h5>
      <CodeBox
        language="javascript"
        code={`import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello React!</h1>);`}
      />

      <p className="mt-3">
        This will display <strong>Hello React!</strong> on the screen using a simple React component.
      </p>
    </div>
    </div>
  );
}

export default IntroReact;
