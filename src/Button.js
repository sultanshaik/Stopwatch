import React, { Component} from "react";

class Button extends Component{
  render(){
    return(
      <div className="Button">
        <button>{this.props.label}</button>
      </div>
    );
  }
}

export default Button;
