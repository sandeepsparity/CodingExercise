import React, { useState } from "react";
import './App.css';

//1. Create a component that will render an Array of Tasks. Render only 5 initially, and only render the "details" property of each Task. See Note 1 below.

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.details}
      <div>
        <label className="container">
          <input type="checkbox" 
            checked={todo.isCompleted} 
            onClick={() => completeTodo(index)}
          />
          <span className="checkmark"></span>
        </label>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function ShowMore({ handleShowMore }){
   return(<div id='show-more'> <button className='show-more-button' onClick={() => handleShowMore()}> Show More </button></div>)
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 2,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 3,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 4,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 5,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 6,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 7,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 8,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 9,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 10,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 11,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 12,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 13,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 14,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 15,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 16,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 17,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 18,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 19,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 20,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 21,
      details: "Build really cool todo app",
      isCompleted: false
    },
    {
      id: 22,
      details: "Learn about React",
      isCompleted: false
    },
    {
      id: 23,
      details: "Meet friend for lunch",
      isCompleted: false
    },
    {
      id: 24,
      details: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const [initialCount, setCount] = useState(5)
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }; 
  
  const handleShowMore = () => {
    const newTodos = initialCount + 5;
    setCount(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.slice(0, initialCount).map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <ShowMore handleShowMore={handleShowMore}/>
      </div>
    </div>
  );
}

export default App;
