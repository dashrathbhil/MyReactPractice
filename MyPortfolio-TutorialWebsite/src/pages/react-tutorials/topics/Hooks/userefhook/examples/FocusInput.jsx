import React, { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.value = "Auto filled Text";
    inputRef.current.focus();
  };

  return (
    <div className="bg-light p-4 rounded shadow-sm">
      <h5 className="text-dark mb-3">🎯 Focus the Input Field Using useRef</h5>

      <div className="mb-3">
        <input
          type="text"
          ref={inputRef}
          placeholder="Type something here..."
          className="form-control"
        />
      </div>

      <button className="btn btn-outline-primary btn-sm" onClick={handleFocusInput}>
        Autofill & Focus
      </button>
    </div>
  );
}

export default FocusInput;
