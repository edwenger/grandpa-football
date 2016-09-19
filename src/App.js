import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// const NFLOdds = require("nflodds");
// var nfl_odds = new NFLOdds();
// var game_odds = nfl_odds.get((err, result) => {
//     console.log(result);
// });

// var nflScores = require("nfl_scores");
// var game_scores = nflScores.refresh((err, scores) => {
//     console.log(scores.week);
//     console.log(scores.games);
// });

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
