import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const add = () => {
    if (task.trim() !== "") {
      setTasks(tasks.concat(task));
      setTask("");
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row p-2 flex-column">
          <div className="col d-flex">
            <h4 className="text-decoration-underline">7.To Do List</h4>
          </div>
          <div className="row flex-row  ">
            <div className="d-flex flex-row gap-2">
              <input
                style={{ width: 200 }}
                type="text"
                placeholder="task name...."
                className="form-control"
                value={task}
                onChange={handleChange}
                // onChange={(e)=> setAge(e.target.value)}
              />
              <button className="btn btn-success" onClick={add}>
                add
              </button>
            </div>
            <ul className="">
              {tasks.map((item, index) => (
                <li key={index} className="">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
