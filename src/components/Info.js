import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { selectPlace } from '../PlaceRedux/placeSlice';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';

function Info(props) {
    const {temp, feelsLike, main, desc, dt, timezoneOffset, icon, wind, humidity, uvi} = props.data;
    const [convertTemp, setConvertTemp] = useState(0)
    const {place} = useSelector(selectPlace);
    const [fahrenheit, setFahrenheit] = useState(0)
    const [celcius, setCelcius] = useState(0)
    const [tempSwitch, setTempSwitch] = useState("fahrenheit");



    const arrayPlace = place.split(', ');

    useEffect(() => {
        const x = (temp * 9/5) + 32;
        setFahrenheit(Math.round(x));
        setCelcius(Math.round(temp))
    
    }, [temp])
    
    return (
    <div className='info'>
        <div className="info-temp">
            <div className="main-content">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" srcset="" />
                <p>
                    {
                        tempSwitch === 'celcius' ? celcius : fahrenheit
                    }
                </p>
            </div>

            <div className="temp-switch">
                <div className={tempSwitch === 'celcius' ? 'switch active' : 'switch'} onClick={() => setTempSwitch('celcius')} >°C</div>
                <div className="divider"> | </div>
                <div className={tempSwitch === 'fahrenheit' ? 'switch active' : 'switch'} onClick={() => setTempSwitch('fahrenheit')}>°F</div>
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