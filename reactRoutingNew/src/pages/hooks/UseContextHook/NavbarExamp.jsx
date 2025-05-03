// src/Navbar.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function NavbarExamp() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <span className="navbar-brand">My Website</span>
        <button className="btn btn-outline-primary" onClick={toggleTheme}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </nav>
  );
}

export default NavbarExamp;
