import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  }

  onUserInputChange = (event)=>{
    const input = event.target.value;
    this.setState({userInput: input});
  }

  onDeleteCharacter = (charIndex) => {
    const input = this.state.userInput.split('');
    input.splice(charIndex, 1);
    const updatedInput = input.join('');
    this.setState({userInput: updatedInput});
  }

  render() {
    const characters = this.state.userInput.split('');
    const chars = characters.map((character, index) => {
      return (
        <Char key={index} character={character} onDeleteCharacter={() => this.onDeleteCharacter(index)}/>
      )
    })

    return (
      <div className="App">
        <input type='text' onChange={this.onUserInputChange} value={this.state.userInput}/>
        <p>{this.state.userInput}</p>
        <Validation userInputLength={this.state.userInput.length}/>
        {chars}
      </div>
    );
  }
}

export default App;
