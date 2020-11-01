import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Temperature } from "./Temperature";
import { MyAge } from "./MyAge";
import { MagicEightBall } from "./MagicEightBall";
import { RaceDay } from "./RaceDay";
import { RockPaperScissors } from "./RockPaperScissors";
import { SleepDebt } from "./SleepDebt";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Temperature />
        <MyAge />
        <MagicEightBall />
        <RaceDay />
        <RockPaperScissors />
        <SleepDebt />
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
