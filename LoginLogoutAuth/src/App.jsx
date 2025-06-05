import React from "react";
import Logout from "./components/Logout";
import EmailLogin from "./components/EmailLogin";
import SignUp from "./components/SignUp";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
     <div className="container">
      <h1 className="text-center">Firebase Login</h1>
      <SignUp />
      <LoginForm/>
      <Logout />

     </div>
    
    </>
  );
}

export default App;
