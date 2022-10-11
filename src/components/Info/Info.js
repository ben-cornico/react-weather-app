import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectPlace } from '../../Redux/placeSlice';
import useGetDateTime from '../../Hooks/useGetDateTime';
import '../components.css';
import './Info.css'

function Info(props) {
    const {temp, feelsLike, main, desc, dt, timezoneOffset, icon, wind, uvi, humidity} = props.data;
    const {place} = useSelector(selectPlace);
    const [fahrenheit, setFahrenheit] = useState(0)
    const [celcius, setCelcius] = useState(0)
    const [tempSwitch, setTempSwitch] = useState("celcius");

    const {weekday, date, time} = useGetDateTime(timezoneOffset, "currentDate", dt)

    const arrayPlace = place.split(', ');

    useEffect(() => {
        const x = (temp * 9/5) + 32;
        setFahrenheit(Math.round(x));
        setCelcius(Math.round(temp))
    
    }, [temp])
    
    return (
    <div className='info'>

        <div className="main">

            <div className="info-temp-main">
                    <div className="main-icon">
                        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
                    </div>
                    <div className="main-info">
                        <div className="xx-large-text temp-main">
                            <p>
                                {
                                    tempSwitch === 'celcius' ? celcius : fahrenheit
                                }°C
                            </p>
                        </div>
                        <p className="med-text secondary-text">
                            Feels like {Math.round(feelsLike)}°C
                        </p>
                    </div>
            </div>

            <div className="secondary-main">
                <div className="time">
                    {time}
                </div>

                <div className="weekday">
                    { weekday }
                </div>

                <div className="main-weather">
                    {
                        main
                    }
                </div>
            </div>
        </div>

        <div className="weather-info">
            <div>
                {main}
            </div>
            <div className="small-text desc">
                {desc}
            </div>
        </div>

        <div className="info-city-country">
            <div className=" info-place">
                {
                    arrayPlace.map(x => {
                        return <p>{x}</p>
                    })
                }
            </div>
            <div className="small-text">
                {
                    console.log(useGetDateTime(timezoneOffset, "currentDate", dt))
                }
            </div>
        </div>
    </div>
  )
}

export default Info