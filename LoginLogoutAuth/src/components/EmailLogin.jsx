import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function EmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();
  setError("");
  try {
    await signIn(email.trim(), password);
    alert("Logged In!");
  } catch (err) {
    if (err.code === "auth/invalid-credential") {
      setError("Incorrect Password");
    } else if (err.code === "auth/user-not-found") {
      setError("No user found with this email.");
    } else if (err.code === "auth/invalid-email") {
      setError("Invalid email format.");
    } else {
      alert(err.message);
    }
  }
};

  

  return (
    <form onSubmit={handleLogin} className="bg-white p-4 rounded shadow">
      <h4 className="mb-3 text-center">Login with Email</h4>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label fw-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="e.g. user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label fw-semibold">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  );
}

export default EmailLogin;
