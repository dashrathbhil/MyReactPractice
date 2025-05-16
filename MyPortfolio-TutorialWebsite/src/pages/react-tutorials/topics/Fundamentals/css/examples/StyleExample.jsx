import React from "react";

const inlineStyle = {
  color: "white",
  backgroundColor: "teal",
  padding: "10px",
  borderRadius: "5px",
};

function StyleExample() {
  return (
    <div className="style-container">
      <h4 style={inlineStyle}>This is inline styled text.</h4>
      {/* <h4 className="external-style">This is styled using external CSS.</h4> */}
      {/* <h4 className="module-style">This would use CSS Modules (see below).</h4> */}
    </div>
  );
}

export default StyleExample;
