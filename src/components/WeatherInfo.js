import React, { Fragment } from 'react';
import './App.css';
import BrokenClouds from './assets/broken-clouds.png';
import Clear from './assets/clear.png';
import Clouds from './assets/clouds.png';
import Mist from './assets/mist.png';
import Rain from './assets/rain.png';
import ShowerRain from './assets/shower-rain.png';
import Snow from './assets/snow.png';
import Thunderstorm from './assets/thunderstorm.png';
import FewClouds from './assets/few-clouds.png';
import ClearNight from './assets/clear-night.png';
import FewCloudsNight from './assets/few-clouds-night.png';
import RainNight from './assets/rain-night.png'


const WeatherInfo = (props) => {

    const {date, name, temp, wind, error, country, main, description, pressure, time, sunrise, sunset} = props.weather;
    let cont = null;
 
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();


    // weather icons and condicions

    let WeatherIcon = BrokenClouds;

    if(main === 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Ash' || 'Squall' || 'Tornado'){
        WeatherIcon= Mist
    }
    if(main === 'Snow'){
        WeatherIcon= Snow
    }
    if(main === 'Drizzle'){
        WeatherIcon= ShowerRain
    }
    if(main === 'Thunderstorm'){
        WeatherIcon= Thunderstorm
    }
    if((description === 'light rain' || 'moderate rain' || 'heavy intensity rain' || 'very heavy rain' || 'extreme rain') && (time < sunsetTime || time > sunriseTime)){
        WeatherIcon= Rain
    }
    if(description === 'freezing rain' || 'light intensity shower rain' || 'shower rain' || 'heavy intensity shower rain' || 'ragged shower rain' ){
        WeatherIcon= ShowerRain
    }
    if(description === 'few clouds: 11-25%' && (time < sunsetTime || time > sunriseTime)){
        WeatherIcon= FewClouds
    }
    if (main === 'Clear' && (time < sunsetTime )){
        WeatherIcon = Clear
    }
    if (main === 'Clear' && (time > sunriseTime)){
        WeatherIcon = Clear
    }
    if (main === 'Clouds'){
        WeatherIcon= Clouds
    }
    if (main === 'Clear' && (time > sunsetTime)){
        WeatherIcon = ClearNight
    }
    if (main === 'Clear' && (time < sunriseTime)){
        WeatherIcon = ClearNight
    }
    if(description === 'few clouds: 11-25%' && (time > sunsetTime || time < sunriseTime)){
        WeatherIcon= FewCloudsNight
    }
    if((description === 'light rain' || 'moderate rain' || 'heavy intensity rain' || 'very heavy rain' || 'extreme rain') && (time > sunsetTime || time < sunriseTime)){
        WeatherIcon= RainNight
    }

 
    if(!error && name) {
        cont = (
            <Fragment>
                <div className='location'>{name}  {country}</div>
                <div className='date'>{date}</div>
                <div className='weatherDetails'>
                    <div className='mainDetails'>
                        <div className='temp col'>{temp}<sup>o</sup>C</div>
                        <div className='col icon'> <img  alt=' ' src={ WeatherIcon } /></div>  
                    </div>
                    <div className='otherValues'>
                        <div className='descripion'>{description}</div>
                        <div className='wind'>wind speed: {wind}km/h</div>
                        <div className='pressure'>pressure: {pressure} hPa</div>
                        <div className='sunrise'>sunrise: {sunriseTime}</div>
                        <div className='sunset'>sunset: {sunsetTime}</div>
                    </div>
                </div>
   
            </Fragment>
        )
    }
    return(
        <div>
            {error ? ` ` : cont}
        </div>
    )
}

export default WeatherInfo;