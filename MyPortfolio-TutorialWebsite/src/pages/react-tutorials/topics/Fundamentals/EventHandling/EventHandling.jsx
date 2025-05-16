import React from "react";

import CodeBox from "../../../../../components/CodeBox";
import ButtonClickExample from "./expamples/ButtonClickExample";
import InputChangeExample from "./expamples/InputChangeExample";
import FormSubmitExample from "./expamples/FormSubmitExample";

function EventHandling() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">Event Handling in React</h2>

      <p>
        In React, event handling is similar to handling events in JavaScript. However, React events are named using camelCase and you pass a function as the event handler.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example 1: Button Click</h5>
      <p>Let's handle a button click event:</p>
      
      

      <CodeBox
        language="javascript"
        code={`function ButtonClickExample() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default ButtonClickExample;`}

      /><ButtonClickExample />

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example 2: Input Change</h5>
      <p>Let's handle an input change event:</p>

  

      <CodeBox
        language="javascript"
        code={`function InputChangeExample() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something"
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default InputChangeExample;`}
      />
    <InputChangeExample />
      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example 3: Form Submit</h5>
      <p>Here’s how to handle a form submit event:</p>

    

      <CodeBox
        language="javascript"
        code={`function FormSubmitExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmitExample;`}
      />
        <FormSubmitExample />
    </div>
  );
}

export default EventHandling;
