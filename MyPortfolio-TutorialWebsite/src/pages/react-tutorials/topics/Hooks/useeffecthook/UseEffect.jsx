import React from "react";
import CodeBox from "../../../../../components/CodeBox";
import ExampleUseEffectCompo from "./ExampleUseEffectCompo";
import ProductList from "./ProductList";

function UseEffect() {
  return (
    <>
    <div className="container py-4">
     
        <h2 className="text-primary fw-bold mb-4">useEffect Hook Explained</h2>
        <p className="mt-3">
          The <strong>useEffect</strong> hook is a powerful tool in React.js for managing
          side effects in function components. Whether you're fetching data,
          subscribing to events, or cleaning up listeners, <code>useEffect</code> empowers
          you to write efficient and responsive components.
        </p>
      

      <h4 className="fw-bold mt-4">🛠 Syntax</h4>
      <CodeBox
        language="javascript"
        code={`useEffect(() => {
  // Side effect logic here

  return () => {
    // Optional cleanup logic
  };
}, [dependencies]);`}
      />

      <h4 className="fw-bold mt-5 mb-3 border-bottom pb-2">🔎 When to Use useEffect?</h4>
      <ul>
        <li>✅ Fetch data when component mounts</li>
        <li>✅ Respond to prop/state changes</li>
        <li>✅ Cleanup listeners or timers when a component unmounts</li>
      </ul>

      <h4 className="fw-bold mt-5 mb-3 border-bottom pb-2">Practical Example 1: Track State Changes</h4>
      <CodeBox
        language="javascript"
        code={`useEffect(() => {
  console.log("Count changed:", count);
}, [count]);`}
      />

      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <ExampleUseEffectCompo />

      <h4 className="fw-bold mt-5 mb-3 border-bottom pb-2">Practical Example 2: Fetching API Data</h4>
      <CodeBox
        language="javascript"
        code={`useEffect(() => {
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.log(err));
}, []);`}
      />
       <ProductList />
    </div>
    </>
  );
}

export default UseEffect;
