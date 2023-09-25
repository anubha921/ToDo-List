import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
 return (
  <div className='App'>
    <div className='header'>
      <h1>TodoList-App</h1>
      <div><Form todos={todos} setTodos={setTodos}/></div>
      <div><ToDoList todos={todos} setTodos={setTodos}/></div>
    </div>
  </div>
 )
}

export default App;
