import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../app/ToDo';

function TodoList({ startEditing }) {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  if (todos.length === 0) return <p>No todos yet!</p>;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? 'list-group-item-success' : ''
          }`}
          style={{ cursor: 'pointer' }}
        >
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}
          >
            {todo.text}
          </span>
          <button
            className="btn btn-sm btn-warning me-2"
            onClick={() => startEditing(todo)}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
