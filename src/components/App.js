import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo'

class App extends Component {

  state  = {
    location: '',
    date: '',
    temp: '',
    wind: '',
    err: ''
  }

  handleInputHange = e => {
    this.setState({
      location : e.target.value
    })
  }

  handleLocationSubmit = e => {
      e.preventDefault();

      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=2c401902a18d83e97a3b4870577a0579&units=metric`;

      fetch(API)
      .then(response => {
        if (response.ok){
          return response
        }
        throw Error ("błąd")
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch (err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <Form 
          location={this.state.location} 
          change={this.handleInputHange}
          submit={this.handleLocationSubmit}
          />
          <WeatherInfo />
      </div>
    );
  }
}

export default App;
