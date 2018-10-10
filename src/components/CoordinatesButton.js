import React from 'react';

export default class CoordinatesButton extends React.Component{
  constructor(props){
    super()
    this.onReceiveCoordinates = props.onReceiveCoordinates
  }

  render(){
    return (<button onClick={e => this.onReceiveCoordinates([e.clientX,e.clientY])}>Coordinates</button>)
  }
}
