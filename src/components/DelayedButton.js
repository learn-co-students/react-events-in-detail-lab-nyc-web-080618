// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{

  handleClick2 = (event) => {
    event.persist()
    setTimeout(()=>this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClick2}>Delay Button </button>
    )
  }
}

export default DelayedButton
