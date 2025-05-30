import React, { useRef, useState } from "react";
import "./App.css";
import Counter from "./components/counter";
import AddTodo from "./components/AddTodo";


function App() {
  

  return (
    <>
      <Counter />
      <div className="container mt-4" style={{width:'500px'}}>
        <AddTodo/>
       
      </div>
    </>
  );
}

export default App;
