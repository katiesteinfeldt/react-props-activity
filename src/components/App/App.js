import React, { Component } from 'react';
import Header from '../Header/Header';

class App extends Component {
  state = {
    inputNumber:3,
  }


  handleInputChange = (event) => {
    console.log(event.target.value);
  }


  handleButtonUpClick = () => {
    console.log('Button Up Clicked');
  }

  handleButtonDownClick = () => {
    console.log('Button Down Clicked');
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleButtonUpClick}>Up</button><input placeholder="Enter Number" type="number" onChange={this.handleInputChange}/><button onClick={this.handleButtonDownClick}>Down</button>
      
        <h3>{this.state.inputNumber}</h3>


      </div>
    );
  }
}

export default App;
