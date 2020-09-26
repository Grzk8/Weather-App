import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo'

const dateNow = new Date().toLocaleDateString();
const timeNow = new Date().toLocaleTimeString(); 

class App extends Component {
  state  = {
    location: '',
    name: '',
    country: '',
    date: '',
    time: '',
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

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=2c401902a18d83e97a3b4870577a0579&units=metric`;

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
        date: dateNow,
        time: timeNow,
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
      background: ''
    };

    // background change
    if (this.state.temp < (-10)) {
      style.background= 'linear-gradient(180deg, rgba(0,12,189,1) 0%, rgba(71,76,150,1) 24%, rgba(188,192,252,1) 79%)'
    }
    if (this.state.temp < 1) {
      style.background= 'linear-gradient(180deg, rgba(20,105,187,1) 0%, rgba(104,149,217,1) 24%, rgba(206,199,236,1) 79%)'
    }
    if (this.state.temp > 1) {
      style.background= 'linear-gradient(180deg, rgba(80,238,20,1) 0%, rgba(145,235,47,1) 24%, rgba(199,249,174,1) 79%)'
    }    
    if (this.state.temp > 10) {
      style.background= 'linear-gradient(180deg, rgba(11,70,6,1) 0%, rgba(33,158,34,1) 24%, rgba(97,152,97,1) 79%)'
    }    
    if (this.state.temp > 20) {
      style.background= 'linear-gradient(180deg, rgba(242,240,34,1) 0%, rgba(237,232,77,1) 24%, rgba(255,254,185,1) 79%)'
    }
    if (this.state.temp > 30) {
      style.background= 'linear-gradient(180deg, rgba(219,111,10,1) 0%, rgba(251,192,135,1) 24%, rgba(251,218,187,1) 79%)'
    }
    if (this.state.temp > 40) {
      style.background= 'linear-gradient(180deg, rgba(241,45,4,1) 0%, rgba(238,145,125,1) 24%, rgba(252,226,220,1) 79%)'
    }     
    if (this.state.location.length < 1) {
      style.background= "linear-gradient(180deg, rgba(231,2,123,1) 0%, rgba(179,42,112,1) 24%, rgba(232,160,196,1) 79%)"
    }    
 
    return (
      <div className="App" style={style}>
        <div className='container'>
          <Form 
            location={this.state.location} 
            change={this.handleInputHange}
            />
            <WeatherInfo weather={this.state}/>
        </div>

      </div>
    );
  }
}

export default App;
