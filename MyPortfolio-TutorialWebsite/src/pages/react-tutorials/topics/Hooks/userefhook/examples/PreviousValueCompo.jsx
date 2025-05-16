import React, { useEffect, useRef, useState } from "react";

function PreviousValueCompo() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div className="bg-light p-4 rounded shadow-sm text-center">
      <h5 className="text-dark mb-3">🔁 Track Current & Previous Value Using useRef</h5>

      <div className="mb-3">
        <span className="d-block fs-4 fw-semibold text-success">Current: {count}</span>
        <span className="d-block fs-5 text-muted">Previous: {prevCount.current}</span>
      </div>

      <button
        className="btn btn-outline-success btn-sm"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default PreviousValueCompo;
