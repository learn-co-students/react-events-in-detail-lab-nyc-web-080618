import React from 'react';

class CoordinatesButton extends React.Component{

  GenerateCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render(){
    return <button onClick={this.GenerateCoordinates}>Heyo!</button>
  }
}

export default CoordinatesButton;
