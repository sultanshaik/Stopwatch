import React, { Component} from "react";
import "./css/Lap.css"

class Lap extends Component{

  render(){
    return(
      <div className = "Lap">
        {this.props.seconds}
      </div>
    );
  }
}

export default Lap;
