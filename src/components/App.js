import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import WeatherInfo from './WeatherInfo';
import weatherPic1 from './assets/pc1.jpg';
import weatherPic2 from './assets/pc2.jpg';
import weatherPic3 from './assets/pc3.jpg';
import weatherPic4 from './assets/pc4.jpg';
import weatherPic5 from './assets/pc5.jpg';
import weatherPic6 from './assets/pc6.jpg';
import weatherPic7 from './assets/pc7.jpg';

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
    error: false,
    bgStyle : { }
  }

  handleInputHange = e => {
    this.setState({
      location : e.target.value.toUpperCase()
    })
  }

componentDidMount(){
  const bgArray = [weatherPic1, weatherPic2, weatherPic3, weatherPic4, weatherPic5, weatherPic6, weatherPic7];
  const randomIndex = Math.floor(Math.random() * bgArray.length);
  const selectedBg = bgArray[randomIndex];

  this.setState({
    bgStyle: {
      backgroundImage: `url(${selectedBg})`,
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }
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


    return (
      <div className="App" style={this.state.bgStyle}>
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
