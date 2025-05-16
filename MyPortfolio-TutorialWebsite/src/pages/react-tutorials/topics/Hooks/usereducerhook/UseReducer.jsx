import React from "react";
import CodeBox from "../../../../../components/CodeBox";
import CounterReducer from "./examples/CounterReducer";


function UseReducer() {
  return (
    <div className="py-4">
      <h2 className="text-primary fw-bold mb-4">useReducer Hook in React</h2>

      <p>
        The <code>useReducer</code> hook is a React hook used for managing complex state
        logic. It is an alternative to <code>useState</code> and is particularly useful
        when state transitions depend on the previous state or involve
        multiple sub-values. It takes a reducer function and an initial
        state as arguments and returns the current state and a <code>dispatch</code>
        function. The <code>dispatch</code> function is used to trigger state updates.
      </p>

      <h5 className="text-dark fw-semibold mt-4">🔧 Syntax:</h5>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`const [state, dispatch] = useReducer(reducer, initialState);`}
        />
      </div>

      <h3 className="mt-5 mb-3 border-bottom pb-1">Example 1: CounterReducer.jsx</h3>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`import React, { useReducer } from 'react';
import DisplayCounter from './DisplayCounter';

const initialValue = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <DisplayCounter count={state.count} dispatch={dispatch} />
    </>
  );
}

export default CounterReducer;`}
        />
      </div>

      <h3 className="mt-5 mb-3 border-bottom pb-1">file-2: DisplayCounter.jsx</h3>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`import React from "react";

function DisplayCounter({ count, dispatch }) {
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "increment" })} className="btn btn-success">
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })} className="btn btn-danger mx-3">
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })} className="btn btn-info">
        Reset
      </button>
    </>
  );
}

export default DisplayCounter;`}
        />
      </div>

      <h6 className="fw-semibold mt-3">✅ Output:</h6>
      <CounterReducer />
    </div>
  );
}

export default UseReducer;
