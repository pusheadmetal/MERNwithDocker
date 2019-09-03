import React, { useState, useEffect } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {

  const [serverState, setServerState] = useState();
  const [dbState, setDBState] = useState();

  useEffect( () => {
    axios.get("http://localhost:9000/testAPI")
         .then( (res) => setServerState(res.data))
         .catch( (err) => console.log(err));
  }, [])

  useEffect( () => {
    axios.get("http://localhost:9000/testDB")
         .then( (res) => setDBState(res.data))
         .catch( (err) => console.log(err));
  },[])

  if (!serverState){
    return <h2>Waiting for Server...</h2>
  }

  if (!dbState){
    return <h2>Waiting for Database...</h2>
  }

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
      <p className="App-intro">{serverState}</p>
      <p className="App-intro">{dbState}</p>
    </div>
  );
}

export default App;
