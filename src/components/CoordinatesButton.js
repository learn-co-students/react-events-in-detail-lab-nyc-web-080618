import React, {Component} from 'react';

// Deliverable #1 & #2
// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
// This component takes in one prop: onReceiveCoordinates. This prop is a function passed down
// from index.js. This function is currently just logging whatever is passed into it.
export default class CoordinatesButton extends Component {
    constructor(props){
      super(props)
      console.log(props);
      // verified return of props
    }

  // Deliverable #3
  // Within CoordinatesButton, render a button. On click of the button, create an array with
  // two elements: the X and Y coordinates of the mouse. Find these using the event data.
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Click This My Guy</button>
      </div>
    )
  }

  // Deliverable #4
  // Pass this event data in as the argument for the onReceiveCoordinates prop.
  // If successful, the current x,y position of your mouse should be logged.
  handleClick = (event) => {
    console.log("logging clientX ", event.clientX);
    console.log("logging clientY ", event.clientY);
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

} // end of CoordinatesButton Component
