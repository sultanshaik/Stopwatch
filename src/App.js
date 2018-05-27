import React, { Component} from "react";
import "./App.css";
import Button from "./Button.js";
import Time from "./Time.js";

class App extends Component{

  constructor()
  {
    super();
    this.state = {start : false}
  }

  toggleStart()
  {
    this.setState({start : true});
  }

  render(){
    return(
      <div className="App">
        <span className="semicolon"><Time start = {this.state.start} /></span>
        <div>
        <Button onClick = {this.toggleLap} label = "Reset" />
        <Button action = {this.state.start} toggleButton = {()=>this.toggleStart()} label  = "Start"/>
        </div>
      </div>
    );
  }
}

export default App;
