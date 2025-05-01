import React from "react";
let isLoggedIn = false;
function LoginPanel() {
  const handleClick = () => {
    const button = document.querySelector(".login-button");
    const message = document.querySelector(".login-message");

    if (isLoggedIn) {
      message.innerText = "Please log in";
      button.innerText = "Login";
      isLoggedIn = false;
    } else {
      message.innerText = "Welcome, User!";
      button.innerText = "Logout";
      isLoggedIn = true;
    }
  };

  return (
    <>
      <div>
        <button className="btn btn-primary login-button" onClick={handleClick}>
          Login
        </button>
        <p className="login-message">Please log in</p>
      </div>
    </>
  );
}

export default LoginPanel;
