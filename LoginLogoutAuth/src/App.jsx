import React from "react";
import Logout from "./components/Logout";
import EmailLogin from "./components/EmailLogin";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <h1>Login </h1>
      <SignUp />
      <LoginForm/>
      <Logout />
    
    </>
  );
}

export default App;
