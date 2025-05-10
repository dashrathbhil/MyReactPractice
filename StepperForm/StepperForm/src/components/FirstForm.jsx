import React, { useRef, useState } from "react";

const FirstForm = ({ formData, onChange, onNext }) => {
  const [errors, setErrors] = useState({});

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.name) nameRef.current.focus();
      else if (newErrors.email) emailRef.current.focus();
      else if (newErrors.phone) phoneRef.current.focus();
      return;
    }

    onNext();
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              ref={nameRef}
              name="name"
              type="text"
              value={formData.name}
              onChange={onChange}
              placeholder="Enter name"
              className="form-control"
              style={{ borderColor: errors.name ? "red" : "" }}
            />
            <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {errors.name}
            </div>
          </div>

          <div className="mb-3">
            <input
              ref={emailRef}
              name="email"
              type="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Enter email"
              className="form-control"
              style={{ borderColor: errors.email ? "red" : "" }}
            />
            <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {errors.email}
            </div>
          </div>

          <div className="mb-3">
            <input
              ref={phoneRef}
              name="phone"
              type="text"
              value={formData.phone}
              onChange={onChange}
              placeholder="Enter phone number"
              className="form-control"
              style={{ borderColor: errors.phone ? "red" : "" }}
            />
            <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
              {errors.phone}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FirstForm;
