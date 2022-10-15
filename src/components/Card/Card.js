import React from 'react'
import useGetDateTime from '../../Hooks/useGetDateTime';
import Toggler from '../Toggler/Toggler';
import Searchbar from '../SearchBar/Searchbar';
import { useDispatch, useSelector } from 'react-redux';
import { selectCollection, deleteCollection, } from '../../Redux/collectionsSlice';

const Card = ({data, collectionIndex}) => {
    console.log(collectionIndex)
    const dispatch = useDispatch()
    const {collections} = useSelector(selectCollection)

const handleClick =(index) => {
    dispatch(deleteCollection(index));
}
    const { weekday, date, time } = useGetDateTime(data.dt.dt, "currentDate", data.dt.timezone_offset)
  return (
    <div className="card" >
        <div className="controls">
            <Toggler />

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
                <p className="date">
                    October 12, 2022
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
                    <p>{weekday}y</p>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
                <div className="main-temp">
                    <p className="temp">
                        {
                            data.weather.temp
                        }
                    </p>
                    <p className="feelslike">
                        {
                            data.weather.feelsLike
                        }
                    </p>
                </div>
            </div>

            

            <div className="extras">
                    <p>Humidity: 87%</p>
                    <p>Visibility: 10.0km</p>
                    <p>Wind: 1km/hr</p>
            </div>
        
        </>
    </div>
  )
}

export default Card