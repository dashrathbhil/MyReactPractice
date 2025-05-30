import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo, editTodo } from "../app/ToDo";

const Todo = () => {
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => setText(e.target.value);

  useEffect(() => {
    if (editId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editId]);

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    if (editId) {
      dispatch(editTodo({ id: editId, text }));
      setEditId(null);
    } else {
      dispatch(addTodo(text));
    }
    setText("");
  };

  const handleToggleComplete = (id) => dispatch(toggleComplete(id));
  const handleDeleteTodo = (id) => dispatch(deleteTodo(id));
  const handleEditTodo = (todo) => {
    setEditId(todo.id);
    setText(todo.text);
  };
  const handleCancelEdit = () => {
    setEditId(null);
    setText("");
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4">Redux Toolkit Todo List</h2>

      <div className="input-group mb-3">
        <input
          ref={inputRef}
          type="text"
          className="form-control"
          placeholder="Enter todo..."
          value={text}
          onChange={handleInputChange}
        />
        <button
          className={`btn ${editId ? "btn-warning" : "btn-primary"}`}
          type="button"
          onClick={handleAddTodo}
        >
          {editId ? "Update" : "Add Todo"}
        </button>
        {editId && (
          <button
            className="btn btn-outline-danger ms-2"
            type="button"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-muted fst-italic">
          No todos yet. Add something above!
        </p>
      ) : (
        <ul className="list-group">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? "list-group-item-secondary" : ""
              }`}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <span>{todo.text}</span>
              <div>
                <button
                  className={`btn btn-sm me-2 ${
                    todo.completed ? "btn-warning" : "btn-success"
                  }`}
                  onClick={() => handleToggleComplete(todo.id)}
                  title={
                    todo.completed ? "Mark as Incomplete" : "Mark as Complete"
                  }
                >
                  {todo.completed ? "Undo" : "Done"}
                </button>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleEditTodo(todo)}
                  title="Edit todo"
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteTodo(todo.id)}
                  title="Delete todo"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
