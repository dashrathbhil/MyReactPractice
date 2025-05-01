import React from "react";
import { Link, Outlet } from "react-router";

function HooksMenu() {
  return (
    <>
      <div className="container">
        <div className="row">
          <ul>
            <li>
              <Link to="usestatemenu" className="text-decoration-none">
                UseState hook
              </Link>
            </li>
         
            <li>
              <Link to="explainuseeffect" className="text-decoration-none">
                Use Effect Hook
              </Link>
            </li>

            <li>
              <Link to="usereducehook"className="text-decoration-none">
              use Reduce hook</Link>
            </li>
            <li>
              <Link to="use-ref-hook"className="text-decoration-none">
              UseRef hook</Link>
            </li>
         </ul>
        </div>
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default HooksMenu;
