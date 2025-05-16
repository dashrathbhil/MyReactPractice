import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

function ReactJsMenu() {
  return (
    <>
      <div className="container-xxl no-gutter ">
        <div className="d-flex  " style={{width:'100%'}}>
         <div>

          <Sidebar />
         </div>
      
          <div className="mx-auto ps-4 pe-2" style={{width:"80%"}}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactJsMenu;
