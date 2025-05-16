import React from "react";
import { useTheme } from "./ThemeContext";

const ThemedBox = () => {
  const { theme, toggleTheme, showProfile, toggleProfile } = useTheme();

  return (
    <div
      className={`rounded text-center mb-4 mx-auto p-3 p-md-4 ${
        theme === "light" ? "bg-light text-dark" : "bg-dark text-white"
      }`}
      style={{ transition: "all 0.3s ease", maxWidth: "600px" }}
    >
      <h5 className="mb-3">Current Theme: {theme.toUpperCase()}</h5>

      {/* Buttons Stack Responsively */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
        <button className="btn btn-primary btn-sm" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <button className="btn btn-secondary btn-sm" onClick={toggleProfile}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </div>

      {showProfile && (
        <div
          className="p-3 border rounded mx-auto"
          style={{
            backgroundColor: theme === "light" ? "#eee" : "#444",
            maxWidth: "100%",
          }}
        >
          <h6>User Profile</h6>
          <p className="mb-1">Name: John Doe</p>
          <p className="mb-0">Email: john@example.com</p>
        </div>
      )}
    </div>
  );
};

export default ThemedBox;
