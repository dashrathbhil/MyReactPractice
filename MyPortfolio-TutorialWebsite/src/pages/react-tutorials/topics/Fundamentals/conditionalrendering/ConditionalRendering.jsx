import React from "react";
import CodeBox from "../../../../../components/CodeBox"; // Ensure you have this component for code display
import ConditionalCompo from "./ConditionalCompo";
import Greetings from "./Greetings";
import UserStatus from "./examples/UserStatus";


function ConditionalRendering() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">Conditional Rendering in React</h2>

      <p>
        In React, <strong>conditional rendering</strong> allows you to render different UI elements based on certain conditions, such as whether a user is logged in, if a task is completed, or whether some data exists. It helps in building dynamic user interfaces that change according to the state or props.
      </p>

      <h3>Different Ways of Conditional Rendering</h3>
      <p>
        React provides multiple ways to implement conditional rendering:
      </p>

      <ul>
        <li><strong>Using Ternary Operator</strong>: This is a shorthand for if-else conditions and is often used in JSX to make the code more concise.</li>
        <li><strong>Using If-Else Statements</strong>: Traditional if-else conditions can be used within the component’s render function to decide which JSX should be displayed.</li>
        <li><strong>Using Logical AND (&&) Operator</strong>: The && operator is used to conditionally render elements without the need for an else block.</li>
      </ul>

      <h3>Practical Example: Conditional Rendering Using Ternary Operator</h3>
      <p>
        In this example, we conditionally render a message based on whether the user is online or offline.
      </p>

      <CodeBox
        language="javascript"
        code={`import React from 'react';

function UserStatus({ isOnline }) {
  return (
    <>
      <h5>Using Ternary Operator</h5>
      <p>{isOnline ? 'User is Online' : 'User is Offline'}</p>
    </>
  );
}

export default UserStatus;`}
      />

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Output of UserStatus:</h5>
      <UserStatus
       isOnline={true} /> {/* Example output showing user online */}

      <h3>Practical Example: Conditional Rendering Using If-Else Statements</h3>
      <p>
        Here, we conditionally render different greetings based on the user’s login status.
      </p>

      <CodeBox
        language="javascript"
        code={`import React from "react";

function Greetings({ isLoggedIn }) {
  if (isLoggedIn) {
    return (
      <>
        <h5>Using If Statements</h5>
        <h6>Welcome Back!</h6>
      </>
    );
  }
  return (
    <>
      <h5>Using If Statements</h5>
      <h6>Please Log In!</h6>
    </>
  );
}

export default Greetings;`}
      />

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Output of Greetings:</h5>
      <Greetings isLoggedIn={true} /> {/* Example output showing welcome message */}

      <h3>Practical Example: Combining Conditional Components</h3>
      <p>
        In this example, we combine both <code>UserStatus</code> and <code>Greetings</code> components to conditionally render messages based on both the user’s login status and online status.
      </p>

      <CodeBox
        language="javascript"
        code={`import React from 'react';
import Greetings from './Greetings';
import UserStatus from './UserStatus';

function ConditionalCompo() {
  const userOnline = false;
  const isLoggedIn = true;

  return (
    <>
      <h2>Conditional Rendering</h2>
      <ol>
        <li><Greetings isLoggedIn={isLoggedIn} /></li>
        <li><UserStatus isOnline={userOnline} /></li>
      </ol>
    </>
  );
}

export default ConditionalCompo;`}
      />

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Output of ConditionalCompo:</h5>
      <ConditionalCompo /> {/* Example output showing both greetings and user status */}

      <h3>Explanation</h3>
      <ul>
        <li><strong>Ternary Operator</strong>: This operator allows us to conditionally render content in a concise manner. It’s a quick way to return one value if the condition is true and another value if it’s false.</li>
        <li><strong>If-Else Statements</strong>: With this method, we can evaluate the condition and return different JSX based on whether the condition is true or false.</li>
        <li><strong>Logical AND (&&) Operator</strong>: This method is useful when we only need to display something when the condition is true. No “else” block is needed.</li>
      </ul>

      <h3>Why Use Conditional Rendering?</h3>
      <ul>
        <li><strong>Dynamic User Interfaces</strong>: It allows you to build dynamic UIs that change based on the state or props of your application.</li>
        <li><strong>Improve User Experience</strong>: You can show different content or UI elements based on the user's status, improving user engagement and interaction.</li>
        <li><strong>Performance</strong>: React optimizes updates and minimizes re-renders when conditional rendering is done efficiently.</li>
      </ul>
    </div>
  );
}

export default ConditionalRendering;
