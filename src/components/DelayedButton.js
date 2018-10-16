import React, {Component} from 'react'

class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }


  render() {
    return (
      <button onClick={this.handleClick}>No, Click Me</button>
    )
  }

}

export default DelayedButton
