import React, { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../pages/hooks/UseContextHook/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/example">
                  Example
                </Link>
              </li>

             
            </ul>
            {/* <button className="btn btn-outline-primary" onClick={toggleTheme}>
              Toggle {darkMode ? "Light" : "Dark"} Mode
            </button> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
