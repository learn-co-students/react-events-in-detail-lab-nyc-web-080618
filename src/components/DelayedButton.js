import React from 'react';

export default class DelayedButton extends React.Component{
  constructor(props){
    super()
    this.onDelayedClick = props.onDelayedClick
    this.delay = props.delay
  }

  handleClick = (e) =>{
    e.persist();
    setTimeout(()=>{
      this.onDelayedClick(e)
    },this.delay);
  }

  // handleClick(e){
  //   e.persist();
  //   setTimeout(() => {
  //     this.onDelayedClick(event);
  //   }, this.delay);
  // }

  render(){
    return (<button onClick={this.handleClick}>Delayed</button>)
  }
}
