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
 
  num = 0;

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
        </div>
      </div>
    );
  }
}

export default App;
