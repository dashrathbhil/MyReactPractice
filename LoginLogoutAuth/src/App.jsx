import React from "react";
import Logout from "./components/Logout";
import GoogleLogin from "./components/GoogleLogin";
import Facebook from "./components/Facebook";
import Github from "./components/Github";

function App() {
  return (
    <>
      <h1>Login </h1>
      <GoogleLogin />
      <Logout />
      <Facebook/>
      <Github/>
      
    </>
  );
}

export default App;
