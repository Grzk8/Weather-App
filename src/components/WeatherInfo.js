import React, { Fragment } from 'react';
import './App.css';
import BrokenClouds from './assets/broken-clouds.png';
import Clear from './assets/clear.png';
import Clouds from './assets/clouds.png';
import Mist from './assets/mist.png'
import Rain from './assets/rain.png'
import ShowerRain from './assets/shower-rain.png'
import Snow from './assets/snow.png'
import Thunderstorm from './assets/thunderstorm.png'
import FewClouds from './assets/few-clouds.png'


const WeatherInfo = (props) => {

    const {date, name, temp, wind, error, location, country, main, description} = props.weather;
    let cont = null;


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
    if(description === 'light rain' || 'moderate rain' || 'heavy intensity rain' || 'very heavy rain' || 'extreme rain'){
        WeatherIcon= Rain
    }
    if(description === 'freezing rain' || 'light intensity shower rain' || 'shower rain' || 'heavy intensity shower rain' || 'ragged shower rain' ){
        WeatherIcon= ShowerRain
    }
    if(description === 'few clouds: 11-25%'){
        WeatherIcon= FewClouds
    }
    if (main === 'Clear'){
        WeatherIcon = Clear
    }
    if (main === 'Clouds'){
        WeatherIcon= Clouds
    }

     if(!error && name) {
        cont = (
            <Fragment>
                <div className='location'>{name}  {country}</div>
                <div className='date'>{date}</div>
                <div>
                    <div className='temp col'>{temp}<sup>o</sup>C</div>
                    <div className='col'> <img  alt= ' ' src={ WeatherIcon } /></div>  
                </div>
                <div className='otherValues'>
                    <div className='descripion'>{description}</div>
                    <div className='wind'>wind speed: <bold>{wind}km/h</bold></div>
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