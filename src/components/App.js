import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo'
import Localtime from './assets/Localtime';

const time = new Date().toLocaleDateString();
class App extends Component {
  state  = {
    location: '',
    name: '',
    country: '',
    date: '',
    temp: '',
    wind: '',
    main: '',
    description: '',
    icon: '',
    sunrise: '',
    sunset: '',
    pressure: '',
    lon: '',
    lat:'',
    error: false
  }

  handleInputHange = e => {
    this.setState({
      location : e.target.value.toUpperCase()
    })
  }

componentDidUpdate(prevProps, prevState){
  if (prevState.location !== this.state.location){

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
        name: data.name,
        date: time,
        temp: data.main.temp.toFixed(0),
        wind: data.wind.speed,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather.id,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        lon: data.coord.lon,
        lat: data.coord.lat
      }))
    .catch (err => console.log(err));
    this.setState({
      error: true,
      location: this.state.location
    })

  }
}

  render() {

    let style = {
      backgroundColor: 'rgba(218, 112, 214, 0.5)',
    };

    // background change
    if (this.state.temp < 1) {
      style.backgroundColor= 'rgba(25, 25, 112)'
    }
    if (this.state.temp > 10) {
      style.backgroundColor= 'rgba(135, 206, 235)'
    }    
    if (this.state.temp > 20) {
      style.backgroundColor= 'rgba(34, 139, 34)'
    }    
    if (this.state.temp > 30) {
      style.backgroundColor= 'rgba(255, 228, 181)'
    }    
    if (this.state.location.length < 1) {
      style.backgroundColor= 'rgba(218, 112, 214, 0.5)'
    }    
 
    return (
      <div className="App" style={style}>
        <div className='container'>
          <Form 
            location={this.state.location} 
            change={this.handleInputHange}
            />
            <WeatherInfo weather={this.state}/>
            <Localtime longitude={this.state.lon}/>
        </div>

      </div>
    );
  }
}

export default App;
