import React, { Component } from 'react';

//Stylesheet
import './createPerson.css';

class CreatePerson extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            age: 0
        }
    }

    //Methods
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAgeChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    createPerson = () => {
        let body = this.state;
        this.props.addPerson(body);
    }

    render(){
        return (
            <div className="create-person-container">
                <input type="text" onChange={this.handleNameChange}/>
                <input type="number" onChange={this.handleAgeChange}/>
                <button onClick={this.createPerson}>Add Person</button>
            </div>
        )
    }
}

export default CreatePerson;