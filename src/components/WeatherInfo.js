import React, { Fragment } from 'react';

const WeatherInfo = (props) => {

    const {location, date, name, temp, wind, error, main} = props.weather;

    let cont = null;

    if(!error && temp) {
        cont = (
            <Fragment>
                <h1>{name}</h1>
                <div>{date}</div>
                <div>temp : {temp}<sup>o</sup>C</div>
                <div>wind speed: {wind}km/h</div>
                <div>{main}</div>
            </Fragment>
        )
    }

    return(
        <div>
            {error ? `nie ma ${location}` : cont}
        </div>
    )
}

export default WeatherInfo