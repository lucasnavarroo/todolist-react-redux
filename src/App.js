import React from "react";
import { Provider } from "react-redux";
import store from "./store";

import TodoList from "./TodoList";

import "./config/ReactotronConfig";

console.tron.log('teste')

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
