import React, { Component } from 'react';
import './App.css';
import Scoreboard from './Scoreboard/ScoreboardTable';
// import Form from './Scoreboard/Form';

class App extends Component {
  state = {
    hits: 0,
    addPoints: false,
    scoreBoard: "-",
    points: 0,
  
  }
  playerDisplay = (players) => {
    if(players === 1){
      return(
        <div>
          <Scoreboard pointTotal={ this.state.points }/>
        </div>
      )
    }
    if(players === 2){
      return(
        <div>
          <Scoreboard pointTotal={ this.state.points }/>
          <Scoreboard pointTotal={ this.state.points }/>
        </div>
      )
    }
  }
 
  // playerCount = () => {
  //   return(
  //   <div>
  //   <h1>Welcome</h1>
  //   <p>Easily track the score for your game of darts</p>
  //   <h2>Choose how many players</h2>
  //   <button onClick={this.playerDisplay(1)}>Single Player</button>
  //   <button onClick={this.playerDisplay(2)}>Two Player</button>
  //   <button>three Player</button>
  //   <button>Four Player</button>
  //   </div>
  //   )
  // }

  // this function updates all the data in the table - making a new component that i will use in the ScoreboardTable Component so that they work for each peice
//  keepScore = () => {
//   let hitCount = '';
//   this.num++;
//   if(this.num === 1){
//     hitCount = '/';
//   }
//   else if(this.num === 2){
//     hitCount = 'X'
//   }
//   else if(this.num === 3){
//     hitCount = '(X)'
//   }
//   else{
//     this.anotherFunction();
//   }
//   this.setState({
//     hits: this.num,
//     scoreBoard: hitCount
//   })
  
// }

anotherFunction(){
  console.log('this function will setState so that addPoints will be true and points can be added')
}



  render() {
    return (
      <div>
        <div className='scoreBrdAlign'>
          <Scoreboard pointTotal={ this.state.points }></Scoreboard>
          <Scoreboard pointTotal={ this.state.points }></Scoreboard> 
          <Scoreboard pointTotal={ this.state.points }></Scoreboard> 
          <Scoreboard pointTotal={ this.state.points }></Scoreboard> 
        </div>
      </div>
    );
  }
}

export default App;
