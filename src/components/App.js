import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo'

const api = {
  key: '2c401902a18d83e97a3b4870577a0579'
}

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
      e.preventDefault()
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
