import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const cssClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    cssClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    cssClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{ props.appTitle }</h1>
      <p className={cssClasses.join(' ')}>How bout this</p>
      <button
        onClick={props.clicked}
        className={btnClass}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;