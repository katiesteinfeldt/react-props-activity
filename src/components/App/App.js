import React, { Component } from 'react';
import Header from '../Header/Header';

class App extends Component {
  state = {
    currentTotal: '',
    inputNumber: '',
  }


  handleInputChange = (event) => {
    this.setState({
      inputNumber: Number(event.target.value),
    })
  }


  handleButtonUpClick = () => {
    console.log('Button Up Clicked');
    this.setState({
      currentTotal: Number(this.state.inputNumber + this.state.currentTotal),
    })
  }

  handleButtonDownClick = () => {
    console.log('Button Down Clicked');
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleButtonUpClick}>Up</button><input placeholder="Enter Number" type="number" onChange={this.handleInputChange}/><button onClick={this.handleButtonDownClick}>Down</button>
      
        <h3>Current Total: {this.state.currentTotal}</h3>


      </div>
    );
  }
}

export default App;
