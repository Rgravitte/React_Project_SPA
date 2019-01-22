import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Scoreboard/ScoreboardTable';
import PlayerName from './Scoreboard/ScoreboardTable';
// import Form from './Scoreboard/Form';

class App extends Component {
  



  render() {
    return (
      <div className="holdAll">
        <PlayerName />
        <h1>🎯</h1>
        <PlayerName />
      </div>
    );
  }
}

export default App;
