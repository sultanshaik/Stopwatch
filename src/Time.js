import React, { Component} from "react";

class Time extends Component{

  constructor(props)
  {
    super(props);
    this.state = {seconds: 0 , start : this.props.start , reset : this.props.reset }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
     if(nextProps.start !== prevState.start) {
       return {
        start: nextProps.start
       };
     }
     if(nextProps.reset !== prevState.reset)
     {
       return {
        reset: nextProps.reset
       };
     }
     return null;
   }
  componentDidUpdate(_, prevState){
      if(prevState.start !== this.state.start){
        this.startOrStopTimer();
      }

      if(prevState.reset !== this.state.reset){
        this.resetTimer();
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

  resetTimer()
  {
    if(this.state.reset)
      {
        this.setState({seconds: 0});
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
      return ('0'+( Math.floor(this.state.seconds/60)%60)).slice(-2);
  }

  getHours()
  {
      return ('0'+( Math.floor(this.state.seconds/3600))).slice(-2);
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
