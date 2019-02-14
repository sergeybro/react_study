import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (nextProps, NextState) {
    return true;
  }

  state = {
    persons: [
      { id: 1, name: "Max", age: 18 },
      { id: 2, name: "Chloe", age: 19 },
      { id: 3, name: "Rachel", age: 19 }
    ],
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  };

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons =  <Persons
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}/>
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
