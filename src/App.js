import React from 'react';
import Style from './App.module.css';
import TodoList from './page/todoList/todoList';



function App() {


  return (
    <div className={Style.header}>
      <TodoList />
    </div>
  );
}

export default App;
