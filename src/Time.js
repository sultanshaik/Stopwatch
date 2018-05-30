import React, { Component} from "react";
import "./css/Time.css"
class Time extends Component{

  constructor(props)
  {
    super(props);
    this.state = {seconds: 0 , start : this.props.start, lap : this.props.lap ,previousTime:0  }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
     if(nextProps.start !== prevState.start) {
       return {
        start: nextProps.start
       };
     }
     if(nextProps.lap !== prevState.lap)
     {
       return {
        lap: nextProps.lap
       };
     }
     return null;
   }
  componentDidUpdate(_, prevState){
      if(prevState.start !== this.state.start){
        this.startOrStopTimer();
      }

      if(prevState.lap !== this.state.lap){
        this.state.lap? this.lapTime():null;
      }

    }

  startOrStopTimer()
  {
    if(this.state.start)
    {
      this.increment = setInterval(
        () =>this.incrementCounter()
      ,1000)
    }
    else
    {
      clearInterval(this.increment);
    }
  }

  lapTime()
  {
    let seconds = this.state.seconds-this.state.previousTime;
    let lapTime = this.getHours(seconds)+":"+this.getMinutes(seconds)+":"+this.getSeconds(seconds);
    this.props.addLapTime(lapTime);
    this.setState({previousTime : this.state.seconds});
  }

  incrementCounter()
  {
    this.setState({seconds : (this.state.seconds +1)});
  }

  getSeconds(seconds)
  {
      return ('0'+(seconds%60)).slice(-2);
  }

  getMinutes(seconds)
  {
      return ('0'+( Math.floor(seconds/60)%60)).slice(-2);
  }

  getHours(seconds)
  {
      return ('0'+( Math.floor(seconds/3600))).slice(-2);
  }

  render(){
    return(
      <div className = "Time">
      {this.getHours(this.state.seconds)}:{this.getMinutes(this.state.seconds)}:{this.getSeconds(this.state.seconds)}
      </div>
    );
  }
}

export default Time;
