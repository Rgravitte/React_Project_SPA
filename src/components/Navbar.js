import React, {Component} from 'react';
import "../App.css";

class Navbar extends Component {
    
    navBar = () => {
            return (
                <div>
                    <button>Hi there</button>
                </div>
            )
        }
    

    
    render(){
      return(
        <nav className="navbar">
            {this.navBar()}
        </nav>
      )
    }
  }
  
export default Navbar;