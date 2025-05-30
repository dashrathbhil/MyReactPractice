import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import todosReducer from "./ToDo";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  },
});

export default store;
