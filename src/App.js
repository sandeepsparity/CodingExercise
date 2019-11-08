import React from 'react';
import logo from './logo.svg';
import './App.css';

//1. Create a component that will render an Array of Tasks. Render only 5 initially, and only render the "details" property of each Task. See Note 1 below.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
