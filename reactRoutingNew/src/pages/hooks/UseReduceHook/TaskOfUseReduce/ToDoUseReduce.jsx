import React, { useEffect, useReducer, useState } from "react";

function todoReducer(todos, action) {
  switch (action.type) {
    case "add":
      return [
        ...todos,
        { id: Date.now(), text: action.text, completed: false },
      ];
    case "delete":
      return todos.filter((todo) => todo.id !== action.id);
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "update":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text} : todo
      );

    case "set":
      return action.todos;
    default:
      return todos;
  }
}

function ToDoUseReduce() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [task, setTask] = useState("");
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      dispatch({ type: "set", todos: savedTodos });
    }
  }, []);


  useEffect(() => {
    if (todos.length === 0) {
      localStorage.removeItem("todos");
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);
  const addTodo = () => {
    if (task.trim() === "") return;
    if (editingId !== null) {
      dispatch({ type: "update", id: editingId, text: task });
      setEditingId(null);
    } else {
      dispatch({ type: "add", text: task });
    }
    setTask("");
  };


  const deleteTodo = (id) => {
    dispatch({ type: "delete", id });
    if (editingId === id) {
      setEditingId(null);
      setTask("");
    }
  };
  
  const toggleTodo = (id) => {
    dispatch({ type: "toggle", id });todo
  };

  const editTodo = (id, text) => {
    setEditingId(id);
    setTask(text);
  };

  return (
    <div className="container">
      <h3>Task 1: Todo List with useReducer</h3>- Create a{" "}
      <strong>todo list</strong> using <code>useReducer</code>.
      <br />- Add functionality to:
      <ul>
        <li>
          <strong>Add</strong> a new todo.
        </li>
        <li>
          <strong>Toggle</strong> the completed status of a todo.
        </li>
        <li>
          <strong>Delete</strong> a todo.
        </li>
      </ul>
      <div className="row align-items-center">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a Task Here...."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary my-3" onClick={addTodo}>
            {editingId ? "Update" : "Add"}
          </button>
        </div>
      </div>
      <ol style={{ listStyleType: "decimal" }}>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            <div className="d-flex justify-content-between align-items-center">
              <div
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </div>
              <div>
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="btn btn-success mx-2"
                >
                  {todo.completed ? "Completed" : "Incomplete"}
                </button>

                <button
                  onClick={() => editTodo(todo.id, todo.text)}
                  className="btn btn-warning mx-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoUseReduce;
