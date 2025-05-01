import React from "react";
import ToDoUseReduce from "./ToDoUseReduce";
import ShoppingCart from "./ShoppingCart";

function TaskOfUseReduce() {
  return (
    <>

      <div className="container">
        <h2>Task of Use Reduce</h2>
        <div className="row">
          <div>
            <ToDoUseReduce />
          </div>
          <div>
            <ShoppingCart/>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskOfUseReduce;
