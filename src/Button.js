import React, { Component} from "react";
import "./css/Button.css"

class Button extends Component{

  constructor(props)
  {
    super(props);
  }

  handleClick()
  {
    this.props.clickButton();
  }

  render(){
    let className = "Button";
    if(this.props.label==="Start")
    {
      className += " Button-Start";
    }
    if(this.props.label==="Lap")
    {
      className += " Button-Lap"
    }
    if(this.props.label==="Stop")
    {
      className += " Button-Stop"
    }
    return(
      <div  className = "Button-Outer">
        <button  className={className} onClick = {()=>this.handleClick()} >{this.props.label}</button>
      </div>
    );
  }
}

export default Button;
