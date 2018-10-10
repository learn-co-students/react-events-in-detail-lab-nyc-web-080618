// Code CoordinatesButton Component Here
import React from 'react';


export default class CoordinatesButton extends React.Component{

  handleClick = (event) =>{
    let new_arry = [event.clientX, event.clientY]



    this.props.onReceiveCoordinates(new_arry)

  }

  render(){
    return(
      <button
      onClick = {this.handleClick}
      >CoordinatesButton</button>
    )
  }


}
