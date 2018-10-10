// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleClick = (e) => {
    e.persist()
    const {onDelayedClick, delay} = this.props
    setTimeout(() => onDelayedClick(e), delay)
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }

}

export default DelayedButton;
