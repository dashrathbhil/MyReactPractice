import React, { useRef, useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/Todolist";

function App() {
  const addTodoRef = useRef();

  return (
    <>
      <Counter />
      <div className="container mt-4" style={{width:'500px'}}>
        <AddTodo ref={addTodoRef} />
        <TodoList addTodoRef={addTodoRef} />
      </div>
    </>
  );
}

export default App;
