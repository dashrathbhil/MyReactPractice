import React from "react";

function Task1() {
  return (
    <div className="container-fluid">
      <div className="row ps-3">
        <h2 className="">
          Practical Task 1: Create a Simple JSX-Based Profile Card
        </h2>
      </div>

      <div className="row ps-3  mt-4 p-0">
        <div className="col">
        <div className="card p-2 " style={{ width: "18rem" }}>
          <div className="d-flex gap-3">
            <h5>Name:</h5>
            <p>Dashrath bhil</p>
          </div>
          <div className="d-flex gap-3">
            <h5>Age:</h5>
            <p>21 Year</p>
          </div>
          <div className="d-flex gap-3">
            <h5>Bio:</h5>
            <p>hello my name is dashrath, i am fronted developer</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Task1;
