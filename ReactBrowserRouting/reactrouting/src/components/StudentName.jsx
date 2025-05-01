import React from "react";

function StudentName() {
  //   const studentNames = ["Alice", "Bob", "Charlie", "Diana"];

  const studentNames = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "charlie" },
    { id: 4, name: "Diana" },
  ];
  return (
    <>
      <div className="container-fluid">
        <h5>student names</h5>
        {/* <ul>
          {studentNames.map((item, index) => {
            return (
              // <li key={index}> {item}</li>
              <li key={index}>
                {item} = {index}
              </li>
            );
          })}
        </ul> */}

        <ul>
          {studentNames.map((item) => (
            <li key={item.id}>
              {item.name}={item.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StudentName;
