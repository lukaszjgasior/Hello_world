import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Temperature } from "./Temperature";
import { MyAge } from "./MyAge";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Temperature></Temperature>
        <MyAge></MyAge>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TEXT
        </a>
      </header>
    </div>
  );
}

export default App;
