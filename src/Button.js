import React, { Component} from "react";

class Button extends Component{

  constructor(props)
  {
    super(props);
  }

  handleClick()
  {
    this.props.toggleButton();
  }

  render(){
    return(
      <div className="Button">
        <button onClick = {()=>this.handleClick()} >{this.props.label}</button>
      </div>
    );
  }
}

export default Button;
