import React from "react";

const ProgressBar = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className="mb-4 d-flex justify-content-between align-items-center">
      {steps.map((step, index) => {
        const isCompleted = currentStep > step;
        const isActive = currentStep === step;

        const circleClass = isCompleted
          ? "bg-success text-white"
          : isActive
          ? "bg-primary text-white"
          : "bg-light text-secondary";

        return (
          <div key={step} className="text-center flex-fill position-relative">
            <div
              className={`rounded-circle mx-auto mb-2 d-flex justify-content-center align-items-center ${circleClass}`}
              style={{
                width: 40,
                height: 40,
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {isCompleted ? <i className="fas fa-check"></i> : step}
            </div>
            <div>Step {step}</div>

            {index < steps.length - 1 ? (
              <div
                className={`position-absolute top-50 start-100 translate-middle-y w-100 ${
                  isCompleted ? "bg-success" : "bg-light"
                }`}
                style={{ height: 4, zIndex: -1 }}
              />
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ProgressBar;