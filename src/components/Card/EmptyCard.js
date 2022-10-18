import React from 'react';
import Toggler from '../Toggler/Toggler';
import { useDispatch } from 'react-redux';
import { deleteCollection } from '../../Redux/collectionsSlice';

import Searchbar from '../SearchBar/Searchbar';

const EmptyCard = ({collectionIndex}) => {

const dispatch = useDispatch();
const handleClick =(index) => {
    dispatch(deleteCollection(index));
}
  return (
    <div className="card" >
        <div className="controls">
            <Toggler />

            <div className="close" onClick={() => handleClick(collectionIndex)}>
                <span className='mdi mdi-close'></span>
            </div>
        </div>

        <Searchbar collectionIndex={collectionIndex}/>
        
        
        {/* <>
            <div className="info empty">
                <p className="place">
                </p>
            </div>

            <div className="main empty">
                <div className="main-weather">
                    <img src="" alt="" className='main-weather-icon'/>
                    <p className='main-weather-desc'>
                    </p>
                </div>
                <div className='date-time'>
                    <p>weekdayy</p>
                    <p>YYYY/MM/DD</p>
                    <p>HH:MM</p>
                </div>
                <div className="main-temp">
                    <p className="temp">
                    </p>
                    <p className="feelslike">
                    </p>
                </div>
            </div>

            

            <div className="extras empty">
            </div>
        
        </> */}

        <div className="warning">
            Enter your city to check the weather.
        </div>
    </div>
  )
}

export default EmptyCard