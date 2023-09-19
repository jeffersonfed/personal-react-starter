import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold text-emerald-500">
          React Typescript Tailwind Starter<br></br>
          <a href="https://github.com/jeffersonfed/personal-react-starter" className='hover:text-white'>Github</a>
        </h1>
      </header>
    </div>
  );
}

export default App;
