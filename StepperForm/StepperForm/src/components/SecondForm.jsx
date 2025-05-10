import React, { useRef, useState } from "react";

const SecondForm = ({ formData, onChange, onPrev, onNext }) => {
  const ageRef = useRef();
  const genderRef = useRef();
  const countryRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      if (newErrors.age) ageRef.current.focus();
      else if (newErrors.gender) genderRef.current.focus();
      else if (newErrors.country) countryRef.current.focus();
      return;
    }

    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "15px" }}>
        <input
          ref={ageRef}
          name="age"
          type="number"
          value={formData.age}
          onChange={onChange}
          placeholder="Enter age"
          className="form-control"
          style={{
            borderColor: errors.age ? "red" : "#ccc",
            padding: "8px",
            width: "100%",
          }}
        />
        <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          {errors.age}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ display: "block", marginBottom: "5px" }}>Gender</label>
        <div ref={genderRef}>
          <label className="me-3">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={onChange}
            />{" "}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={onChange}
            />{" "}
            Female
          </label>
        </div>
        <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          {errors.gender}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <input
          ref={countryRef}
          name="country"
          type="text"
          value={formData.country}
          onChange={onChange}
          placeholder="Enter country"
          className="form-control"
          style={{
            borderColor: errors.country ? "red" : "#ccc",
            padding: "8px",
            width: "100%",
          }}
        />
        <div style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
          {errors.country}
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button type="button" className="btn btn-secondary" onClick={onPrev}>
          Previous
        </button>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
};

export default SecondForm;
