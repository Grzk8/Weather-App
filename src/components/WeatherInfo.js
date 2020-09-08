import React from 'react';

const WeatherInfo = (props) => {

    const {location, date, temp, wind, error} = props.weather;

    let cont = null;

    if(!error && temp) {
        cont = (
            <div>
                <h1>{location}</h1>
                <div>{date}</div>
                <div>temp : {temp}<sup>o</sup>C</div>
                <div>wind speed: {wind}km/h</div>
            </div>
        )
    }

    return(
        <div>
            {error ? `nie ma ${location}` : cont}
        </div>
    )
}

export default WeatherInfo