import React, { Component } from 'react';
import Header from '../Header/Header';

class App extends Component {
  state = {
    currentTotal: '',
    inputNumber: '',
    numbers: [],
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
      inputNumber: '',
    })
  }

  handleButtonDownClick = () => {
    this.setState({
      currentTotal: Number(this.state.currentTotal - this.state.inputNumber),
      inputNumber: '',
    })
  }

  handleSaveClick = () => {
    console.log('save clicked');
    this.setState({
      currentTotal: '',
      inputNumber: '',
      numbers: [...this.state.numbers, this.state.currentTotal],
    })
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.handleButtonUpClick}>Up</button><input value={this.state.inputNumber} placeholder="Enter Number" type="number" onChange={this.handleInputChange} /><button onClick={this.handleButtonDownClick}>Down</button>

        <h3>Current Total: {this.state.currentTotal}</h3>
        <button onClick={this.handleSaveClick}>Save</button>
        <h3>History</h3>
        <ul>
          {this.state.numbers.map(number => <li key={number}>{number}</li>)}
        </ul>

      </div>
    );
  }
}

export default App;
