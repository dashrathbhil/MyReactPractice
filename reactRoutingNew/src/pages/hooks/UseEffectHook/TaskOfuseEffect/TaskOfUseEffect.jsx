import React from "react";
import LoadingMsg from "./LoadingMsg";
import FilterByInput from "./FilterByInput";
import ToDoListWithStatus from "./ToDoListWithStatus";
import FilterById from "./FilterById";
import RefreshDataOnClick from "./RefreshDataOnClick";

function TaskOfUseEffect() {
  return (
    <>
      <div>
        <LoadingMsg />
      </div>
      <div>
        <FilterByInput />
      </div>
      <div>
        <ToDoListWithStatus/>
      </div>
      <div >
            <FilterById/>
      </div>
      <div><RefreshDataOnClick/></div>
    </>
  );
}

export default TaskOfUseEffect;
