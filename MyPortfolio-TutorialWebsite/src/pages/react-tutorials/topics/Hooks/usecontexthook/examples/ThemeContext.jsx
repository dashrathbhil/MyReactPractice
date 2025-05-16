import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [showProfile, setShowProfile] = useState(false);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const toggleProfile = () => setShowProfile((prev) => !prev);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, showProfile, toggleProfile }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for consuming theme context easily
export const useTheme = () => useContext(ThemeContext);
