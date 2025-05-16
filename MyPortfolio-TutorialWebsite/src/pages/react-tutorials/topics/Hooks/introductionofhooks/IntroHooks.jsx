import React from "react";

function HooksIntro() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4 fs-3 fs-md-2">
        What Are Hooks in React?
      </h2>

      <p className="fs-6">
        Hooks are functions introduced in <strong>React 16.8</strong> that allow
        you to use state and other React features in functional components.
        Before hooks, only class components could manage state and lifecycle
        methods.
      </p>

      <h3 className="fw-semibold mt-4 fs-5 fs-md-4">Why Were Hooks Introduced?</h3>
      <ul className="fs-6">
        <li>
          To use state and lifecycle features in functional components without
          converting them to class components.
        </li>
        <li>To improve code reuse and logic sharing between components.</li>
        <li>To make components easier to understand and test.</li>
      </ul>

      <h3 className="fw-semibold mt-4 fs-5 fs-md-4">Commonly Used Hooks:</h3>
      <ul className="fs-6">
        <li>
          <code>useState</code>: Lets you add state to functional components.
        </li>
        <li>
          <code>useEffect</code>: Performs side effects like fetching data,
          updating the DOM, etc.
        </li>
        <li>
          <code>useContext</code>: Accesses global data (like themes or user
          authentication) without prop drilling.
        </li>
      </ul>

      <div className="alert alert-info mt-4 fs-6">
        <strong>Note:</strong> All React Hooks start with the word <code>use</code>. You can also create custom hooks to reuse logic across multiple components.
      </div>

      <p className="mt-4 fs-6">
        In the next sections, we will look at each hook in detail with examples.
      </p>
    </div>
  );
}

export default HooksIntro;
