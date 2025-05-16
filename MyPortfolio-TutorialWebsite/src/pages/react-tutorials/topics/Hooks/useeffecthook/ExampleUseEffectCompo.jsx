import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function ExampleUseEffectCompo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Run When Value Changes</h5>
            <p className="card-text">Current Count: {count}</p>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title">Cleanup Side Effect (Check Console)</h5>
            <p className="card-text">Current Count: {count}</p>
            <button
              className="btn btn-outline-warning btn-sm"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleUseEffectCompo;
