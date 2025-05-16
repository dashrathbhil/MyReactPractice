import React from "react";
import { Link } from "react-router"; // Correct package
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Navbar() {
  return (
    <>
  

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
      <div className="container-xxl ">
        <Link className="navbar-brand fw-bold" to="/">
          logo
        </Link>

        {/* Toggle button for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links, search, icons */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reactjs-tutorials">ReactJS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nodejs-tutorials">NodeJS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Social Icons */}
          <div className="d-flex align-items-center me-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3 fs-5"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white fs-5"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Theme Toggle (Placeholder) */}
          <button className="btn btn-outline-light">Toggle Theme</button>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
