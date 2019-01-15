import React, { Component } from 'react';



class Scoreboard extends Component {

  state = {
    name: "",
    showForm: true
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
          <div>{this.props.pointTotal}</div>
        </div>
        </div>
      </div>
    );
    
  }
  
  render(){
    
  return(
  <div>
    <div className="plyrTbl">
    <div>{ this.tableHead() }</div>
      <div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="15" className="tblButtons" onClick={ this.props.update }>15</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="16" className="tblButtons">16</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="17" className="tblButtons">17</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="18" className="tblButtons">18</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="19" className="tblButtons">19</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="20" className="tblButtons">20</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
        <div className="tblDataHolder">
          <div className='tblData'><button value="25" className="tblDataEmoji">🎯</button></div>
          <div className='tblData'>{ this.props.scoreTracker }</div>
        </div>
      </div>
      </div>
  </div>
      )
    }
  }

export default Scoreboard;