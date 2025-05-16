import React, { useState } from "react";

function CounterCompo() {
  const [count, setCount] = useState(0);

  return (
    <div className="border rounded p-4 my-4 mx-auto" style={{ maxWidth: "400px" }}>
      <h4 className="text-center mb-3">Counter with useState</h4>
      <div className="d-flex justify-content-around align-items-center">
        <button className="btn btn-outline-danger btn-sm " onClick={() => setCount(count - 1)}>
          -
        </button>
        <span className="mx-3 fs-5">Count: {count}</span>
        <button className="btn btn-outline-success btn-sm" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CounterCompo;
