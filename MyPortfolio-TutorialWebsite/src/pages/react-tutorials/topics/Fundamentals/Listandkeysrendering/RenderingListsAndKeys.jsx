import React from "react";
import CodeBox from "../../../../../components/CodeBox"; // Ensure you have this component for code display
import FruitList from "./examples/FruitList";

function RenderingListsAndKeys() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">Rendering Lists and Keys in React</h2>

      <p>
        In React, rendering a list of elements is an essential concept. When rendering a list of items, you often need to display dynamic content. The way React handles lists is by using the <code>map()</code> function to iterate over an array of items and display each item inside a component.
      </p>

      <p>
        However, when rendering lists, React requires that each element have a unique identifier (key) to optimize performance and manage updates efficiently. This helps React identify which items have changed, added, or removed. Keys should be stable, unique, and consistent.
      </p>

      <h3>Why Do We Need Keys?</h3>
      <p>
        When React updates the DOM, it needs to know which elements have changed, been added, or been removed. Keys help React to identify which items in the list are the same between renders, so it can minimize the number of DOM updates.
      </p>

      <ul>
        <li><strong>Without keys</strong>: React will re-render all items in the list, even if only one item has changed.</li>
        <li><strong>With keys</strong>: React can efficiently update only the items that have changed, improving performance.</li>
      </ul>

      <h3>Practical Example: Rendering List and Keys in React</h3>
      <p>
        Let’s take an example where we render a list of fruits dynamically from an array of objects.
      </p>

      <CodeBox
        language="javascript"
        code={`import React from "react";

function FruitList() {
  // Define an array of fruits with unique id and name
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Gauava" },
    { id: 5, name: "Grapes" },
    { id: 6, name: "Banana" },
  ];

  return (
    <>
      <div className="border p-3">
        <h5>Fruit List</h5>
        <ul>
          {fruits.map((fruit) => (
            // Using the fruit.id as a unique key for each list item
            <li key={fruit.id}>
              {fruit.name} = {fruit.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FruitList;`}
      />
       <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Output of FruitList:</h5>
<FruitList/>

      <h3>Explanation</h3>
      <ul>
        <li><strong>Array of Objects</strong>: We define an array of objects where each object represents a fruit with an <code>id</code> and <code>name</code>.</li>
        <li><strong>Mapping Over the Array</strong>: We use the <code>.map()</code> method to iterate over the <code>fruits</code> array. This method returns a new array of <code>&lt;li&gt;</code> elements.</li>
        <li><strong>Unique Key</strong>: Each <code>&lt;li&gt;</code> element has a <code>key</code> prop, which we set to the <code>id</code> of the fruit. This ensures that React can efficiently track changes in the list.</li>
        <li><strong>Rendering the List</strong>: The <code>fruit.name</code> and <code>fruit.id</code> are displayed for each fruit in the list.</li>
      </ul>

      <h3>Why Use Keys?</h3>
      <ul>
        <li><strong>Efficiency</strong>: Using a unique key ensures that React can quickly determine which items are new or have changed and re-render only those items, thus improving performance.</li>
        <li><strong>Unique Identifier</strong>: The <code>id</code> is used as a unique identifier to avoid key collisions. Avoid using indices (<code>index</code>) as keys, as they can cause issues when the list changes dynamically.</li>
      </ul>
    </div>
  );
}

export default RenderingListsAndKeys;
