import React from "react";
import { useAuth } from "../context/AuthContext";

function Logout() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="btn btn-outline-danger"
      style={{ minWidth: "100px" }}
    >
      Logout
    </button>
  );
}

export default Logout;
