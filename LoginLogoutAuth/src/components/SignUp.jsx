import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signUp } = useAuth()
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await signUp(email, password)
      alert("User Registered!")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <form onSubmit={handleSubmit} className="border p-4 shadow rounded bg-light">
        <h2 className="mb-4 text-center">Sign Up</h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
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

        <button type="submit" className="btn btn-success w-100">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
