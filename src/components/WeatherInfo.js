import React, { Fragment } from 'react';
import './App.css';

const WeatherInfo = (props) => {

    const {date, name, temp, wind, error, icon, country, description} = props.weather;
    let cont = null;

    // weather icons and condicions
/*
    const icons= ['./assets/broken-clouds.png', './assets/clear.png', './assets/clouds.png', 
                './assets/few-clouds.png', './assets/mist.png', './assets/rain.png', 
                './assets/shower-rain.png', './assets/snow.png', './assets/thunderstorm.png',
                ];

    let icon = require(icons[5]);

    if(main === 'Clear'){
        icon = require(icons[1])
    };
    if(main === 'Clouds'){
        icon = require(icons[2])
    };
    if(main === 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Ash' || 'Squall' || 'Tornado'){
        icon = require(icons[4])
    };
    if(description === 'light rain' || 'moderate rain' || 'heavy intensity rain' || 'very heavy rain' || 'extreme rain'){
        icon = require(icons[5])
    };
    if(description === 'freezing rain' || 'light intensity shower rain' || 'shower rain' || 'heavy intensity shower rain' || 'ragged shower rain' ){
        icon = require(icons[6])
    };
    if(main === 'Snow'){
        icon = require(icons[7])
    };
    if(main === 'Thunderstorm'){
        icon = require(icons[8])
    };
    if(main === 'Snow'){
        icon = require(icons[8])
    };
    if(main === 'Drizzle'){
        icon = require(icons[6])
    };
    if(description === 'few clouds: 11-25%'){
        icon = require(icons[3])
    };
*/
    const icons= 'http://openweathermap.org/img/wn/10d@2x.png';
    let iconStyle= {
        backgroundImage: "url('{icons}')",
    };

     if(!error && name) {
        cont = (
            <Fragment>
                <div className='location'>{name}  {country}</div>
                <div className='date'>{date}</div>
                <div className='temp'>temp : {temp}<sup>o</sup>C</div>
                <div className='wind'>wind speed: {wind}km/h</div>
                <div className='descripion'>{description}</div>
                <div className='iconstyle' style ={ { backgroundImage: "url('http://openweathermap.org/img/wn/10d@2x.png')", heigh: '200px', width:'200px', border: '10px solid black', backgroundSize:'cover'} }></div>
                
            </Fragment>
        )
    }

    return(
        <div>
            {error ? ` ` : cont}
        </div>
    )
}

export default WeatherInfo