import React, { useState } from "react";

function FormCompo() {
  const [userName, setUserName] = useState("");

  return (
    <div className="border rounded p-4 my-4 mx-auto" style={{ maxWidth: "400px" }}>
      <h5 className="text-center mb-3">Form with useState</h5>
      <input
        type="text"
        placeholder="Enter your name"
        className="form-control"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <p className="mt-3 text-muted">Hello, {userName || "guest"} 👋</p>
    </div>
  );
}

export default FormCompo;
