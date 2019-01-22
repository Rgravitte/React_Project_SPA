import React, { Component } from 'react';

class Tallys extends Component{
  state = {
    hits: 0,
    tally: ''
  }



  updateHits = () => {
    let x = 0;
    let y = '';
    x += 1;
    if(this.state.hits === 0){
      y = '/';
    }
    else if(this.state.hits === 1){
      y = "X";
    }
    else if(this.state.hits === 2){
      y = "(X)"
    }
    else{
      y = "(X)"
      this.props.updateScore(this.props.num);
    }
    this.setState({
      hits: this.state.hits + x,
      tally: y
    })
    

  }
  display = () => {
    return(
      <div>
        <div className="inlineTally">
          <div className="half">
          <button className="moveDown" onClick={this.updateHits}>{this.props.num}</button>
          </div>
          <div className="half">
          <div>{this.state.tally}</div>
          </div>
        </div>
      </div>
    )
  }
    
  render(){
    return(
      <div>
        {this.display()}
      </div>
    )
  }
  }

export default Tallys;