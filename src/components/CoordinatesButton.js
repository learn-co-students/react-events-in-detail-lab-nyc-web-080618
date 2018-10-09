import React from 'react';

export default class CoordinatesButton extends React.Component {
  // props.onReceiveCoordinates is a function from index.js
  // it just logs the coordinates
  render() {
    return (
      <button onClick={this.makeArray}></button>
    )
  }
  makeArray = (event) => {
    event.persist()
    const array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }
}

// REMEMBER THE USE OF ARROW FUNCTIONS!
