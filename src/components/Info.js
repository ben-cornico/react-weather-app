import React from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { selectPlace } from '../PlaceRedux/placeSlice';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';

function Info(props) {
    const {temp, feelsLike, main, desc, dt, timezoneOffset, icon, wind, humidity, uvi} = props.data;
    const {place} = useSelector(selectPlace);

    const arrayPlace = place.split(', ');

    console.log(place)
    return (
    <div className='info'>
        <div className="info-temp">
            <div className="main-content">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" srcset="" />
                <p>{Math.round(temp)}</p>
            </div>

            <div className="temp-switch">
                <button className="switch">°C</button> | <button className="switch">°F</button>
            </div>
            
            <div className="more-info">
                <p>Humidity: {humidity}% </p>
                <p>Wind:{Math.round(wind * 3.6)}km/s</p>
                <p>UVI: {Math.round(uvi)}</p>
            </div>
        </div>

        <div className="info-city-country">
            <div className="med-text info-place">
                {
                    arrayPlace.map(x => {
                        return <p>{x}</p>
                    })
                }
            </div>
            <div className="small-text">
                {useGetDateTime(timezoneOffset, "currentDate", dt)}
            </div>
            <div className="small-text desc">{desc}</div>
        </div>
    </div>
  )
}

export default Info