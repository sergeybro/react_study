import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    usernames: [
      { username: 'Max' },
      { username: 'Chloe' }
    ]
  };

  inputHandler = (e) => {
    this.setState({
      usernames: [
        { username: e.target.value },
        { username: 'Chloe' }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.usernames[0].username}/>
        <UserOutput name={this.state.usernames[1].username}/>
        <UserInput changed={this.inputHandler} name={this.state.usernames[0].username}/>
      </div>
    );
  }
}

export default App;
