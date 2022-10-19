import './Card.css'

import React, { useState, useEffect } from 'react'
import useGetDateTime from '../../Hooks/useGetDateTime';

import Toggler from '../Toggler/Toggler';
import Searchbar from '../SearchBar/Searchbar';


import { useDispatch } from 'react-redux';
import { deleteCollection, } from '../../Redux/collectionsSlice';

const Card = ({data, collectionIndex}) => {
    const dispatch = useDispatch()

    const [temp, setTemp] = useState({})

    const handleClick =(index) => {
        dispatch(deleteCollection(index));
    }
    const { weekday, date, time } = useGetDateTime(data.dt.dt, "currentDate", data.dt.timezone_offset);

    useEffect(() => {
        if(data.unit === 'celcius') {
            const main = `${Math.round(data.weather.temp)}°C`
            const feelsLike = `Feels like ${Math.round(data.weather.feelsLike)}°C`
            setTemp({main, feelsLike });
        } else {
            const convertCelcius = (data.weather.temp * 1.8) + 32;
            const main = `${Math.round(convertCelcius)}°F`;
            const feelsLike = `Feels like ${Math.round(data.weather.feelsLike)}°F`
            setTemp({main, feelsLike})
        }
    }, [data.unit, data.weather.temp])
    


    return (
        <div className="card" >
            <div className="controls">
                <Toggler index={collectionIndex}/>

                <div className="close" onClick={() => handleClick(collectionIndex)}>
                    <span className='mdi mdi-close'></span>
                </div>
            </div>

            <Searchbar collectionIndex={collectionIndex}/>
            
            
            <>
                <div className="info">
                    <p className="place">
                        {
                            data.place || "NO PLACE YET"
                        }
                    </p>
                </div>

                <div className="main">
                    <div className="main-weather">
                        <img src={`http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`} alt="" className='main-weather-icon'/>
                        <p className='main-weather-desc'>
                            {
                                data.weather.desc || "NO PLACE YET"
                            }
                        </p>
                    </div>
                    <div className='date-time'>
                        <p>{weekday}</p>
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                    <div className="main-temp">
                        <p className="temp">
                            {
                                temp.main
                            }
                        </p>
                        <p className="feelslike">
                            {
                                temp.feelsLike
                            }
                        </p>
                    </div>
                </div>

                

                <div className="extras">
                        <p>Humidity: {data.extras.humidity}%</p>
                        <p>Visibility: {data.extras.visibility / 1000}km</p>
                        <p>Wind: {Math.round(data.extras.wind * 3.6)}km/hr</p>
                </div>
            
            </>
        </div>
    )
}

export default Card