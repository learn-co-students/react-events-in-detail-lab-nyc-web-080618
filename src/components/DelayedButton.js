import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

class DelayedButton extends Component{

generateDelayedCoordinates = (event) => {
  event.persist()
  setTimeout(() => {
  this.props.onDelayedClick(event);
}, this.props.delay);
}


  render(){
    return(
      <button onClick={this.generateDelayedCoordinates}>hey wazzzzzzupppp</button>
    );
  }
}

export default DelayedButton;
