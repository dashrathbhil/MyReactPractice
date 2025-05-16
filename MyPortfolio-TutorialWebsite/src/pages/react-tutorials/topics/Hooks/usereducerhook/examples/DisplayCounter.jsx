import React from "react";

function DisplayCounter({ count, dispatch }) {
  return (
    <div className="text-center">
      <h4 className="mb-3">Count: {count}</h4>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-success mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-danger mx-1"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-warning mx-1"
      >
        Reset
      </button>
    </div>
  );
}

export default DisplayCounter;
