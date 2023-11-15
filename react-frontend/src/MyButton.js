import React, { Component } from 'react';


class MyButton extends Component {

  render() { 
    return (<button className="btn btn-primary" onClick={handleClick}>Click me</button>);
  }
}

function handleClick() {
  alert('You clicked me!');
}
 
export default MyButton;