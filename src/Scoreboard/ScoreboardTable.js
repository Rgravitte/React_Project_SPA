import React, { Component } from 'react';
import Tallys from './Tally';



class PlayerName extends Component {

  state = {
    name: "",
    showForm: true,
    score: 0
  }
  scoreTotal = (num) => {
    this.setState({
      score: this.state.score + num
    })
  }
  playerName = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
  preventReroute = (event) => {
    event.preventDefault();
  }
  hideForm = (e) => {
    this.preventReroute(e);
    this.setState({
      showForm: false
    })
  }  
  tableHead = () => {
    return(
      this.state.showForm ? 

      <div>
        <div className='inputHlder'>
        <form>
          <input onChange={ this.playerName } type="text" placeholder="Input Name"/>
          <button type="submit" onClick={  this.hideForm }>Submit</button>
        </form>
        </div>
        
      </div>
      :
      <div>
         <div className='nameAndScore'>
        <h2>{ this.state.name }</h2>
        <div className="inlinePoints">
          <p>Score:</p>
          <div>{this.state.score}</div>
        </div>
        </div>
      </div>
    );
    
  }

  playerOne = () => {
    return(
    <div className="tallyHolder">
    <Tallys updateScore={this.scoreTotal} num={15}/>
    <Tallys updateScore={this.scoreTotal} num={16}/>
    <Tallys updateScore={this.scoreTotal} num={17}/>
    <Tallys updateScore={this.scoreTotal} num={18}/>
    <Tallys updateScore={this.scoreTotal} num={19}/>
    <Tallys updateScore={this.scoreTotal} num={20}/>
    <Tallys updateScore={this.scoreTotal} num={25}/>
    </div>
    )
  }
  
  render(){
    
  return(
  <div className="plyrTbl">
    { this.tableHead() }
    { this.playerOne() }
  </div>
      )
    }
  }

export default PlayerName;