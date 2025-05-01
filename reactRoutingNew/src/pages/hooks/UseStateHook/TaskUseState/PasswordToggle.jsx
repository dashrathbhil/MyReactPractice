import React, { useState } from "react";

function PasswordToggle() {
  const [type, setType] = useState("password");

  const handlechange = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <>
      <div className="container ">
        <div className="row p-2 flex-column">
          <div className="col d-flex">
            <h4 className=" text-decoration-underline  ">
              4.PasswordToggle
            </h4>
          </div>
          <div className="col">
            <input type={type} placeholder="Enter Password" />
            <button
              className="btn btn-primary sub-button"
              onClick={handlechange}
            >
              {type === "password" ? "show" : "hide"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordToggle;
