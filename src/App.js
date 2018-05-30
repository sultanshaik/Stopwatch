import React, { Component} from "react";
import "./css/App.css";
import Button from "./Button.js";
import Time from "./Time.js";
import Lap  from "./Lap.js"

class App extends Component{

  constructor()
  {
    super();
    this.state = {start : false , lap : false, laps:[]}
  }

  toggleStart()
  {
    this.setState({start : !this.state.start});
  }

  Lap()
  {
    this.setState({lap:true});
  }

  addLapTime(timeStamp)
  {
    let laps = this.state.laps.slice();
      this.setState({
          laps : this.state.laps.length ? [timeStamp,...laps] : [timeStamp,...laps]
      },()=>{this.setState({lap : false})});
  }

  render(){
    return(
      <div className="App">
      <Time start = {this.state.start} lap = {this.state.lap} addLapTime = {seconds=>this.addLapTime(seconds)}/>
        <div className = "Buttons">
        <Button  action = {this.state.start} clickButton = {()=>this.Lap()} label =  "Lap" />
        <Button  action = {this.state.start} clickButton = {()=>this.toggleStart()} label  = {this.state.start ?"Stop" : "Start"}/>
        </div>
        <div className = "Laps">
          {this.state.laps.map(
            (lap,index)=>{
              return (
                <div key={index}>
                  <hr></hr>
                  <Lap seconds = {lap}/>
                </div>
                    );
                }
            )
        }
        </div>
      </div>
    );
  }
}

export default App;
