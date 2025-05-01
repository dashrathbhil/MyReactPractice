import React, { useRef, useState } from "react";

function FormInputFocus() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const newErrors = {};
    if (name === "") newErrors.name = "Name is required";
    if (email === "") newErrors.email = "Email is required";
    if (password === "") newErrors.password = "Password is required";

    setErrors(newErrors);
    if (JSON.stringify(newErrors) !== "{}") {
      if (newErrors.name) nameRef.current.focus();
      else if (newErrors.email) emailRef.current.focus();
      else passwordRef.current.focus();
      return;
    }

    alert("Form submitted!");
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter name"
            className="form-control"
            style={{
              borderColor: errors.name ? "red" : "#ccc",
              width: "100%",
              padding: "8px",
            }}
          />

          <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
            {errors.name}
          </div>
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "15px" }}>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            className="form-control"
            style={{
              borderColor: errors.email ? "red" : "#ccc",
              width: "100%",
              padding: "8px",
            }}
          />

          <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
            {errors.email}
          </div>
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "15px" }}>
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter password"
            className="form-control"
            style={{
              borderColor: errors.password ? "red" : "#ccc",
              width: "100%",
              padding: "8px",
            }}
          />

          <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
            {errors.password}
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-success"
          style={{ width: "100%" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormInputFocus;
