import React, { useState } from "react";

// const bg=getElemntByClass('bg-change')
function BackgroundColorChanger() {
  const colors = ["red", "green", "black", "yellow"];
  const [color, setColor] = useState("white");

  const changeBackground = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = currentIndex + 1;
    setColor(colors[nextIndex]);
  };
  return (
    <>
      <div className="container " style={{ backgroundColor: color }}>
        <div className="row p-2 flex-column">
          <div className="col d-flex">
            <h4 className="text-decoration-underline">
              1.Background Color Changer
            </h4>
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={changeBackground}>
              change bg
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundColorChanger;
