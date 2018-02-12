import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Chad', age: 37},
      {name: 'wilmay', age: 30},
      {name: 'Bray', age: 14}
    ]
  };
  //parameter to apss new name with Bind
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 37},
        {name: 'wilmay', age: 30},
        {name: 'Bray', age: 14}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Chad', age: 37},
        // this is what is being passed from input event.targe.value
        {name: event.target.value, age: 30},
        {name: 'Bray', age: 14}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>this is really working</p>
          {/* this is calling the return of a function
          remember you can use () but you are returning the function. 
          it is reccomended to use the find syntax instead. */}
        <button
          style={style}
          onClick={() => this.switchNameHandler('chadaBrooks1st!')}>Switch Name></button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>
          My Hobbiesk: Racing
          </Person>
        <Person 
          // it's better to use the bind syntax instead. this is set as click= to pass into the Person.js file.  
          changed={this.nameChangeHandler}
          click={this.switchNameHandler.bind(this, 'chad!!!')}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi I\'m a React App'));
  }

}

export default App;
