import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo'

const time = new Date().toLocaleDateString();
class App extends Component {
  state  = {
    location: '',
    date: '',
    temp: '',
    wind: '',
    error: false
  }

  handleInputHange = e => {
    this.setState({
      location : e.target.value.toUpperCase()
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
      .then(data => 
        this.setState({
          error: false,
          location: this.state.location,
          date: time,
          temp: data.main.temp.toFixed(0),
          wind: data.wind.speed
        }))
      .catch (err => console.log(err));
      this.setState({
        error: true,
        location: this.state.location
      })
  }

  render() {
    return (
      <div className="App">
          <Form 
          location={this.state.location} 
          change={this.handleInputHange}
          submit={this.handleLocationSubmit}
          />
          <WeatherInfo weather={this.state}/>
      </div>
    );
  }
}

export default App;
