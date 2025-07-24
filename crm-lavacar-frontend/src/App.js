import React from 'react';
import './App.css';
import ClientesList from './clientesList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CRM Lavacar</h1>
        <ClientesList />
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
