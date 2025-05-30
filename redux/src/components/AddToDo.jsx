import React, { useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from '../app/ToDo';

const AddTodo = forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    startEdit(todo) {
      setEditId(todo.id);
      setText(todo.text);
      setTimeout(() => {
  inputRef.current?.focus();
  const length = inputRef.current.value.length;
  inputRef.current.setSelectionRange(length, length);
}, 0);
    }
  }));

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;

    if (editId) {
      dispatch(editTodo({ id: editId, text: text.trim() }));
      setEditId(null);
    } else {
      dispatch(addTodo(text.trim()));
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Enter todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        {editId ? 'Update' : 'Add'}
      </button>
    </form>
  );
});

export default AddTodo;
