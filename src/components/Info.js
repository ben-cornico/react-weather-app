import React from 'react';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';

function Info(props) {
    const {temp, feelsLike, main, desc, dt, timezoneOffset} = props.data;
    console.log(timezoneOffset)
    const {city, country} = props.place
    return (
    <div className='info'>
        <div className="info-temp">
            <div className="large-text">
                {Math.round(temp)}°C
            </div>
            <div className="small-text">Feels like {Math.round(feelsLike)}°C</div>
        </div>

        <div className="info-weather">
            <div className="med-text">
                {main}
            </div>
            <div className="small-text">{desc}</div>
        </div>

        <div className="info-city-country">
            <div className="med-text">
                {city}, {country}
            </div>
            <div className="small-text">
                {useGetDateTime(timezoneOffset, "currentDate", dt)}
            </div>
        </div>
    </div>
  )
}

export default Info