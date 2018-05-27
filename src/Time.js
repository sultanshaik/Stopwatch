import React, { Component} from "react";

class Time extends Component{

  constructor(props)
  {
    super(props);
    this.state = {hours : 0 , minutes: 0 ,seconds: 0 , start : this.props.start }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    debugger;
     if(nextProps.start !== prevState.start) {
       return {
        start: nextProps.start
       };
     }
     return null;
   }
  componentDidUpdate(_, prevState){
     debugger;
      if(prevState.start !== this.state.start) {
        this.startOrStopTimer();
      }
    }

  startOrStopTimer()
  {
    debugger;
    if(this.state.start)
    {
      setInterval(
        this.incrementCounter()
      ,1000)
    }
  }

  incrementCounter()
  {
    this.setState({seconds : (this.state.seconds +1)});
  }

  getSeconds()
  {
      return ('0'+(this.state.seconds%60)).slice(-2);
  }

  getMinutes()
  {
      return ('0'+(this.state.minutes%60)).slice(-2);
  }

  getHours()
  {
      return ('0'+(this.state.hours%12)).slice(-2);
  }

  render(){
    return(
      <div >
      {this.getHours()}:{this.getMinutes()}:{this.getSeconds()}
      </div>
    );
  }
}

export default Time;
