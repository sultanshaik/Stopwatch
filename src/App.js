import React, { Component} from "react";
import "./css/App.css";
import Button from "./Button.js";
import Time from "./Time.js";

class App extends Component{

  constructor()
  {
    super();
    this.state = {start : false , reset : false}
  }

  setStart()
  {
    this.setState({start : true});
    this.setReset();
  }

  setStop()
  {
    this.state.start ? this.setState({start : false}) : this.setState({reset : true});
  }

  setReset()
  {
    this.state.reset ? this.setState({reset : false}) : null;
  }

  render(){
    return(
      <div className="App">
        <span className="semicolon"><Time start = {this.state.start} reset = {this.state.reset}/></span>
        <div className = "Buttons">
        <Button  action = {this.state.start} toggleButton = {()=>this.setStop()} label = {this.state.start ? "Stop" : "Reset"} />
        <Button  action = {this.state.start} toggleButton = {()=>this.setStart()} label  = "Start"/>
        </div>
      </div>
    );
  }
}

export default App;
