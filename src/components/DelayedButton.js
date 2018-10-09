import React from 'react';

export default class DelayedButton extends React.Component {
  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
  handleClick = (event) => {
    event.persist()

    setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay)
    }
}

// Two notes:
// First, we should make our class methods arrow functions to avoid context
// issues with 'this'
// Second, we lose context for this in our setTimeout helper. We MUST use an
// arrow function inside 
