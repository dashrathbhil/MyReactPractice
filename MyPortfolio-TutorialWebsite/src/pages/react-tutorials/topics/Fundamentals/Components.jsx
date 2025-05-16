import React from "react";
import CodeBox from "../../../../components/CodeBox";


function Components() {
  return (
   <> 
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">What is a Component?</h2>

      <p>
        In React, components are the fundamental building blocks of user
        interfaces, allowing developers to create reusable and modular UI
        elements.
      </p>

      <p>
        A <strong>Component</strong> in React is a JavaScript function or class that accepts input (called <strong>props</strong>) and returns a React element (the UI) that can be rendered on the page.
      </p>
      <p>
        Components are the building blocks of any React app. They allow you to break down the UI into smaller, reusable pieces of code, making your application more maintainable and easier to scale.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Types of Components</h5>
      <ul className="list-unstyled ps-3">
        <li>🔹 <strong>Functional Components</strong>: A simpler way of writing components using functions.</li>
        <li>🔹 <strong>Class Components</strong>: A more traditional way of writing components, using ES6 classes (less common in modern React). </li>
      </ul>

      <h2>Functional Component</h2>
      <p>
        These are simple JavaScript functions that take props as input and
        return JSX elements.
      </p>
      <p>
        Here’s an example of a functional component:
      </p>

      <CodeBox
        language="javascript"
        code={`import React from "react";

function Welcome() {
  return <h1>Hello, React Component!</h1>;
}

export default Welcome;`}
      />

      <p>
        This simple component called <code>Welcome</code> returns a heading element. This is an example of a <strong>functional component</strong>.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Class Component Example</h5>
      <p>Here’s an example of a class-based component:</p>

      <CodeBox
        language="javascript"
        code={`import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, Class Component!</h1>;
  }
}

export default Welcome;`}
      />

      <p>
        In this example, the <code>Welcome</code> component is written as a class that extends React’s <code>Component</code> class. It includes a <code>render()</code> method that returns the JSX.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Props in Components</h5>
      <p>
        Props (short for properties) are inputs to a component. They are used to pass data from a parent component to a child component.
      </p>

      <CodeBox
        language="javascript"
        code={`function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Welcome;`}
      />

      <p>
        Here, <code>{`props.name`}</code> is used to display the name passed to the <code>Welcome</code> component when it is used in a parent component:
      </p>

      <CodeBox
        language="javascript"
        code={`function App() {
  return <Welcome name="React Developer" />;
}

export default App;`}
      />

      <p>
        The parent component <code>App</code> passes a <code>name</code> prop to the <code>Welcome</code> component.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Component Composition</h5>
      <p>
        You can also create <strong>nested components</strong> by including one component inside another. This makes your app more modular.
      </p>

      <CodeBox
        language="javascript"
        code={`function Header() {
  return <h1>Welcome to My React App</h1>;
}

function Footer() {
  return <footer>Footer Content</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default App;`}
      />
      
      <p>
        Here, the <code>App</code> component is composed of two smaller components, <code>Header</code> and <code>Footer</code>.
      </p>
    </div>
   </>
  );
}

export default Components;
