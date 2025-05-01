import React, { useState } from "react";

function BlackWhiteTheme() {
  const [color, setColor] = useState("white");

  const changeBackground = () => {
    setColor(color === "white" ? "black" : "white");
  };

  const textColor = color === "white" ? "black" : "white";

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="row p-2 flex-column">
        <div className="col d-flex">
          <h4 className="text-decoration-underline" style={{ color: textColor }}>
            3. Theme Changer
          </h4>
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={changeBackground} >
            Change Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlackWhiteTheme;
