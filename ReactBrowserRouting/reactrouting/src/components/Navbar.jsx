import React from "react";
import { Link } from "react-router";
function Navbar() {
  return (
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ms-1">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task1">
                  Task1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task2">
                  Task2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task3">
                  Task3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task4">
                  Task4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/task5">
                  Task5
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
