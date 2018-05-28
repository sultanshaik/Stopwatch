import React, { Component} from "react";
import "./App.css";
import Button from "./Button.js";
import Time from "./Time.js";

class App extends Component{

  constructor()
  {
    super();
    this.state = {start : false , reset : false}
  }

  toggleStart()
  {
    this.setState({start : true});
    this.toggleReset();
  }

  toggleStop()
  {
    this.state.start ? this.setState({start : false}) : this.setState({reset : true});
  }

  toggleReset()
  {
    this.state.reset ? this.setState({reset : false}) : null;
  }

  render(){
    return(
      <div className="App">
        <span className="semicolon"><Time start = {this.state.start} reset = {this.state.reset}/></span>
        <div>
        <Button action = {this.state.start} toggleButton = {()=>this.toggleStop()} label = {this.state.start ? "Stop" : "Reset"} />
        <Button action = {this.state.start} toggleButton = {()=>this.toggleStart()} label  = "Start"/>
        </div>
      </div>
    );
  }
}

export default App;
