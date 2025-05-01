import React, { useEffect, useState } from "react";

function ToDoListWithStatus() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data);
      })
      .catch((err) => {
        console.log(`error:${err}`);
      });
  }, []);
  return (
    <>
      <h2 >Task 3: Display Todo List with Status</h2>
      <p>
        • Use the API: https://jsonplaceholder.typicode.com/todos
        <br />
        • Display todo title and status /completed or not/.
        <br />• Style completed items with a strikethrough.
      </p>
      <ul>
        {titles.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
            }}
          >
            {item.title} = {item.completed ? "true" : "false"}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ToDoListWithStatus;
