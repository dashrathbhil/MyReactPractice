import React from "react";
import NavbarExamp from "./NavbarExamp";
import MainContent from "./MainContent";
import {ThemeProvider} from "./ThemeContext";

function ExplainUseContext() {
  return (
    <>
      <div className="container text-bg-dark p-3">
        <h1>useContext Explained Here!</h1>
        <p>
          useContext returns the context value for the calling component. It is
          determined as the value passed to the closest SomeContext. Provider
          above the calling component in the tree. If there is no such provider,
          then the returned value will be the defaultValue you have passed to
          createContext for that context.
        </p>

        <h2>Example</h2>

        <div className="border border-3 border-danger p-4">
          <ThemeProvider>
            <NavbarExamp />
            <MainContent />
          </ThemeProvider>

          
        </div>
      </div>
    </>
  );
}

export default ExplainUseContext;