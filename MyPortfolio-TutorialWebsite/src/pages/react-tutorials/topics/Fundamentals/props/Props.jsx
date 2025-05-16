import React from "react";
import CodeBox from "../../../../../components/CodeBox";
import StudentDetails from "./examples/StudentsDetails";


function Props() {
  return (
    <div className="container py-4">
      <h2 className="text-primary fw-bold mb-4">Understanding Props</h2>
      
      <p>
        <strong>Props</strong> is a special keyword in React that stands for properties. It is used for passing data from one component to another. Data with props are passed in a unidirectional flow, meaning from the parent component to the child component.
      </p>
      
      <p>
        Props are read-only and cannot be modified by the child component. They are used to make components dynamic by passing data and making them reusable.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example of Props in Action</h5>
      <p>
        Let's see an example where we pass data from a parent component to a child component using props:
      </p>

      <CodeBox
        language="javascript"
        code={`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;`}
      />

      <p>
        In the above code, the <code>Greeting</code> component takes a prop called <code>name</code> and displays it inside the <code>h1</code> tag.
      </p>

      <p>
        Now, let's see how the parent component passes the value for the <code>name</code> prop:
      </p>

      <CodeBox
        language="javascript"
        code={`function App() {
  return <Greeting name="John" />;
}

export default App;`}
      />

      <p>
        In this code, the parent component <code>App</code> passes the value <code>"John"</code> to the <code>Greeting</code> component using the <code>name</code> prop.
      </p>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example: Student Data with Props</h5>
      <p>
        Now, let's take a look at a more complex example, where we pass student data using props to a component:
      </p>

      <CodeBox
        language="javascript"
        code={`function StudentData(props) {
  return (
    <table border={1}>
      <tbody>
        <tr>
          <th>Student Name</th>
          <td>{props.name}</td>
        </tr>
        <tr>
          <th>Student Age</th>
          <td>{props.age}</td>
        </tr>
        <tr>
          <th>Student Phone</th>
          <td>{props.phone}</td>
        </tr>
        <tr>
          <th>Student Email</th>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StudentData;`}
      />


      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example: Student Data with Props Destructuring</h5>
      <p>
        Now, let's see an example where we use destructuring to access props in the function:
      </p>

      <CodeBox
        language="javascript"
        code={`function StudentDataProps({ name, age, phone, email }) {
  return (
    <table border={1}>
      <tbody>
        <tr>
          <th>Student Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Student Age</th>
          <td>{age}</td>
        </tr>
        <tr>
          <th>Student Phone</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>Student Email</th>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StudentDataProps;`}
      />

    

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Example: Student Data with Props Destructuring - Final Version</h5>
      <p>
        Here's a final version where we destructure props in the parent component:
      </p>

      <CodeBox
        language="javascript"
        code={`function StudentDataDestructing(props) {
  const { name, age, phone, email } = props;
  return (
    <table border={1}>
      <tbody>
        <tr>
          <th>Student Name</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Student Age</th>
          <td>{age}</td>
        </tr>
        <tr>
          <th>Student Phone</th>
          <td>{phone}</td>
        </tr>
        <tr>
          <th>Student Email</th>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default StudentDataDestructing;`}
      />

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Output of Student Data Destructuring Example:</h5>
     
      <br />
        <StudentDetails/>

      <h5 className="text-dark fw-semibold mt-4 mb-3 border-bottom pb-1">✅ Default Props</h5>
      <p>
        You can set default values for props in case the parent component does not pass a value. This can be done using <code>defaultProps</code>.
      </p>

      <CodeBox
        language="javascript"
        code={`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

Greeting.defaultProps = {
  name: 'Guest',
};

export default Greeting;`}
      />
    </div>
  );
}

export default Props;
