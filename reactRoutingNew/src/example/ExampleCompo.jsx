import React from "react";
import { Link, Outlet } from "react-router";

function ExampleCompo() {
  return (
    <>
      <div className="container bg-warning border border-3">
        <div className="row">
          <div className="col">
            <h2>
              <Link to="fundamentals">Fundamentals</Link>
            </h2>
          </div>
          <div className="col">
            <Link to="hooks">
              <h2>hooks</h2>
            </Link>
          </div>
        </div>

        <div className="col">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ExampleCompo;
