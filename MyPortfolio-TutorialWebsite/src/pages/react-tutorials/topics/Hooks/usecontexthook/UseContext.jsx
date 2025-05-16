import React from "react";

import CodeBox from "../../../../../components/CodeBox";
import { ThemeProvider } from "./examples/ThemeContext";
import ThemedBox from "./examples/ThemedBox";

function UseContextTutorial() {
  return (
    <>
  

    <div className=" py-4">
      <h2 className="text-primary fw-bold mb-4">useContext Hook in React</h2>

      <p>
        <strong>useContext</strong> returns the context value for the calling component.
        It is determined by the value passed to the closest Context.Provider above it in the tree.
        If no provider is found, it returns the default value given to createContext.
      </p>

      <h5 className="text-dark fw-semibold mt-4">🎯 Why useContext?</h5>
      <ul>
        <li>✅ Share state and functions globally without prop drilling.</li>
        <li>✅ Simplifies managing app-wide state like themes, user auth, settings, etc.</li>
        <li>✅ Works nicely with React hooks for clean, readable code.</li>
      </ul>

      <h5 className="text-dark fw-semibold mt-4">🔧 Syntax:</h5>
      <div style={{ overflowX: "auto" }}>
        <CodeBox language="javascript" code={`const value = useContext(MyContext);`} />
      </div>

      <h3 className="mt-5 mb-3 border-bottom pb-1">
         Example 1: ThemeContext.jsx
      </h3>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [showProfile, setShowProfile] = useState(false);

  const toggleTheme = () =>
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  const toggleProfile = () => setShowProfile(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, showProfile, toggleProfile }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);`}
        />
      </div>

      <h3 className="mt-5 mb-3 border-bottom pb-1">
         Example 2: ThemedBox.jsx
      </h3>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemedBox = () => {
  const { theme, toggleTheme, showProfile, toggleProfile } = useTheme();

  return (
    <div
      className={\`p-4 rounded text-center mb-3 \${theme === "light" ? "bg-light text-dark" : "bg-dark text-white"}\`}
      style={{ transition: "all 0.3s ease" }}
    >
      <h5>Current Theme: {theme.toUpperCase()}</h5>
      <button className="btn btn-primary btn-sm mx-1" onClick={toggleTheme}>Toggle Theme</button>
      <button className="btn btn-secondary btn-sm mx-1" onClick={toggleProfile}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <div
          className="mt-3 p-3 border rounded"
          style={{ backgroundColor: theme === "light" ? "#eee" : "#444" }}
        >
          <h6>User Profile</h6>
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
        </div>
      )}
    </div>
  );
};

export default ThemedBox;`}
        />
      </div>

      <h3 className="mt-5 mb-3 border-bottom pb-1">
         Example 3: Usage in main component
      </h3>
      <div style={{ overflowX: "auto" }}>
        <CodeBox
          language="javascript"
          code={`import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemedBox from "./components/ThemedBox";

function App() {
  return (
    <ThemeProvider>
      <ThemedBox />
    </ThemeProvider>
  );
}

export default App;`}
        />
      </div>

      <h6 className="fw-semibold mt-3">✅ Output:</h6>

      <ThemeProvider>
        <ThemedBox />
      </ThemeProvider>
    </div>
      </>
  );
}

export default UseContextTutorial;
