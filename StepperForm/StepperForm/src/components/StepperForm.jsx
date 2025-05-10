import React, { useState, useEffect } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import ProgressBar from "./ProgressBar";
import ResultPage from "./FinalResult"; 

const StepperForm = () => {
  const [step, setStep] = useState(1);
 const fields = ["name", "email", "phone", "age", "gender", "country", "state", "city", "zip"];

const createInitialFormData = () =>
  fields.reduce((acc, field) => {
    acc[field] = "";
    return acc;
  }, {});

const [formData, setFormData] = useState(() =>
  JSON.parse(localStorage.getItem("formData")) || createInitialFormData()
);
  const handleReset = () => {
    setFormData(createInitialFormData()); // Clear the form data
    setStep(1); // Go back to Step 1
    localStorage.removeItem("formData"); // Optionally clear localStorage
  };


  useEffect(() => {
    if (step !== 4) {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData, step]);  
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("formData");  
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };
  const handleSubmit = () => {
    setStep(4);
  };

  return (
    <div  className="d-flex justify-content-center align-items-center vh-100" >
      <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%" }}>
        <h2 className="mb-4"> Form Submission</h2>
        <ProgressBar currentStep={step} />
        {step === 1 && (
          <FirstForm formData={formData} onChange={handleChange} onNext={handleNext} />
        )}
        {step === 2 && (
          <SecondForm formData={formData} onChange={handleChange} onNext={handleNext} onPrev={handlePrev} />
        )}
        {step === 3 && (
          <ThirdForm formData={formData} onChange={handleChange} onPrev={handlePrev} onSubmit={handleSubmit} />
        )}
        {step === 4 && <ResultPage formData={formData} onReset={handleReset} />}

      </div>
    </div>
  );
};

export default StepperForm;
