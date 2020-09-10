import React, { Fragment } from 'react';

const WeatherInfo = (props) => {

    const {date, name, temp, wind, error, main, country} = props.weather;

    let cont = null;

    if(!error && temp) {
        cont = (
            <Fragment>
                <h1>{name}  {country}</h1>
                <div>{date}</div>
                <div>temp : {temp}<sup>o</sup>C</div>
                <div>wind speed: {wind}km/h</div>
                <div>{main}</div>
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