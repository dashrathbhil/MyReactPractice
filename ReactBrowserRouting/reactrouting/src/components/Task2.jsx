import React from "react";
import CardDetails from "./propsForCards/CardDetails";
function Task2() {
  return (
    <>
      <div className="container-fluid">
        <div className="row ps-3">
          <h2 className="ps-1">
            Practical Task 2: Display Product Information Using Props
          </h2>
        </div>

        <div className="row p-2 ps-3">
          <CardDetails />
        </div>
      </div>
    </>
  );
}

export default Task2;
