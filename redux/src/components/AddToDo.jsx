import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../app/ToDo';

function AddTodo({ editTodoData, clearEdit }) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (editTodoData) {
      setText(editTodoData.text); // Load text to input for editing
    }
  }, [editTodoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editTodoData) {
      // Updating existing todo
      dispatch(editTodo({ id: editTodoData.id, text: text.trim() }));
      clearEdit();
    } else {
      // Adding new todo
      dispatch(addTodo({ id: Date.now(), text: text.trim() }));
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
      <input
        type="text"
        className="form-control"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        {editTodoData ? 'Update' : 'Add'}
      </button>
    </form>
  );
}

export default AddTodo;
