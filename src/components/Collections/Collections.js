import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCollection, addCollection, deleteCollection } from '../../Redux/collectionsSlice';
import Toggler from '../Toggler/Toggler';
import './Collections.css'

const Collections = () => {
    const dispatch = useDispatch()
    const {collections} = useSelector(selectCollection)

    const handleClick =(index) => {
        dispatch(deleteCollection(index));
        console.log(collections)
    }
  return (
    <div className='collections'>
        {
            collections.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="controls">
                            <Toggler />

                            <div className="close" onClick={() => handleClick(index)}>
                                <span className='mdi mdi-close'></span>
                            </div>
                        </div>
                        <form action="" className='card-form'>
                            <div>
                                <input type="text" name="" className='input-search'/>
                            </div>
                            
                            <button className="card-btn-search">
                                    <span className='mdi mdi-magnify'></span>
                                </button>
                        </form>

                        <div className="info">
                            <p className="place">
                                Surrey, BC, Canada
                            </p>
                            <p className="date">
                                October 12, 2022
                            </p>
                        </div>

                        <div className="main">
                            <div className="main-weather">
                                <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" className='main-weather-icon'/>
                                <p className='main-weather-desc'>
                                    Broken Clouds
                                </p>
                            </div>
                            <div className='date-time'>
                                <p>2022/10/12</p>
                                <p>11:00pm</p>
                            </div>
                            <div className="main-temp">
                                <p className="temp">
                                    15°C
                                </p>
                                <p className="feelslike">
                                    Feels like 13°C
                                </p>
                            </div>
                        </div>

                        

                        <div className="extras">
                                <p>Humidity: 87%</p>
                                <p>Visibility: 10.0km</p>
                                <p>Wind: 1km/hr</p>
                            </div>
                    </div>
                )
            })
        }

        <div className="card-add" onClick={() => dispatch(addCollection())}>
            ADD
        </div>
    </div>
  )
}

export default Collections