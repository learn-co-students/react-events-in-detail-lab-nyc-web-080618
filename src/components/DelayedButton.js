import React, {Component} from 'react';

// Deliverable #1 & #2
// In the components/DelayedButton.js file, create a DelayedButton React component
// This component takes two props: onDelayedClick (a function), and delay (a number).
export default class DelayedButton extends Component {
  constructor(props){
    super(props)
    console.log("Logging props from inside DelayedButton ", props);
    // verified return of both expected props
  }

  // Deliverable #3
  // Create a button that, when clicked, will pass the click event to the onDelayedClick
  // prop within a setTimeout(). The setTimeout() should be set to this.props.delay.
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Click Me (Delayed)</button>
      </div>
    )
  }

  // Deliverable #4
  // If successful, the event will be logged to the console once the timeout has finished.
  handleClick = (event) => {
    event.persist()
    setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay);
    console.log(event);
  }

} // end of DelayedButton Component
