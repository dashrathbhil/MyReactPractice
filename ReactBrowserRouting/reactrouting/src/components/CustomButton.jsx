import React from "react";

function CustomButton() {
  function handleclick() {
    console.log("Button clicked");
  }
  return (
    <>
      <button href="#" className="btn btn-primary" onClick={handleclick}>
        click me
      </button>
    </>
  );
}

export default CustomButton;
