import { useState } from 'react'

import './App.css'
import Counter from './components/counter'
import ToDo from './components/ToDo'
import AddTodo from './components/AddToDo'


function App() {


  return (
    <>
      <Counter/>
      <AddTodo/>
    <ToDo/>
    </>
  )
}

export default App
