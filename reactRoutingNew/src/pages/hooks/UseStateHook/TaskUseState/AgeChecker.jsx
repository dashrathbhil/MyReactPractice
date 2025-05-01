import React, { useState } from "react";

function AgeChecker() {
  const [age, setAge] = useState("");
  const [canDrive, setCanDrive] = useState("");
  const handleChange = (event) => {
    const inputAge = event.target.value;
    setAge(inputAge);

    if (inputAge === "") {
      setCanDrive(""); 
    } else if (inputAge < 0) {
      setCanDrive("Invalid age");
    } else if (inputAge >= 18) {
      setCanDrive("You can drive");
    } else {
      setCanDrive("You can't drive");
    }
    
  };

  return (
    <>
      <div className="container ">
        <div className="row p-2 flex-column">
          <div className="col d-flex">
            <h4 className="text-decoration-underline">6.Age Checker</h4>
          </div>
          <div className="col w-50">
            <input
              max={100}
              min={1}
              type="number"
              placeholder="Enter your Age"
              className="form-control"
              value={age}
              onChange={handleChange}
              // onChange={(e)=> setAge(e.target.value)}
            />
            <p className="mt-3">
              you are <strong>{age} </strong>years old,
              <strong>{canDrive} </strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgeChecker;
