// import any files we need
import React, { Component } from 'react';
import CreatePerson from './components/CreatePerson';

//import packages
import axios from 'axios';

import './App.css';

//what type of component
class App extends Component {

  //constructor
  constructor(){
    //super() initializes the "this" keyword
    super();

    this.state = {
      people: [],
      swapiChar: []
    }
  }

  //Methods
  getPeople = () => {
    axios.get('/people').then((response) => {
      this.setState({
        people: response.data
      })
    })
  };

  addPerson = (body) => {
    axios.post('/addPerson', body).then((response) => {
        this.setState({
          people: response.data
        })
    })
  };

  deletePerson = (id) => {
    axios.delete(`/remove/${id}`).then((response) => {
      this.setState({
        people: response.data
      })
    })
  }

  updatePerson = (id) => {
    axios.put(`/like/${id}`).then((response) => {
      this.setState({
        people: response.data
      })
    })
  }


  //API Methods
  getCharacters = () => {
    axios.get('https://swapi.co/api/people').then((response) => {
      this.setState({
        swapiChar: response.data.results
      })
    })
  }

  //render  
  render() {
    
    //Our people
    const mappedPeople = this.state.people.map((person, index) => {
      return (
        <div>
            <h1>Name:</h1>
            <span>{person.name}</span>
            <button onClick={() => this.deletePerson(person.id)}>Remove</button>
            <button onClick={() => this.updatePerson(person.id)}>❤️</button>

            <button onClick={() => this.getCharacters()}>Get SWAPI characters</button>
        </div>
      )
    });

    //SWAPI Characters
    const mappedSwapiChar = this.state.swapiChar.map((character) => {
      return (
        <div>
          {character.name}
        </div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.getPeople}>Get People</button>
        {mappedPeople}
        <CreatePerson addPerson={this.addPerson}/>
        {mappedSwapiChar}
      </div>
    );
  }
}

export default App;