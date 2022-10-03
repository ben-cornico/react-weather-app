import React, { useEffect, useState } from 'react';
import Info from './Info';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeatherData } from '../SearchRedux/weatherSlice';
function Container() {
  const [data, setData] = useState({})
  const {weatherData} = useSelector(selectWeatherData)
  const { place } = useSelector((state) => state)

  console.log(place)
  return (
    <div className='app-container'>
        <div className="info-temp">
            <div className="large-text">
              {Math.round(weatherData.temp)}°C
            </div>
            <div className="small-text">Feels like 26°C</div>
        </div>

        {/* <div className="info-weather">
            <div className="med-text">
                {weather.current}
            </div>
            <div className="small-text">{weather.weatherDesc}</div>
        </div> */}
    </div>
  )
}

export default Container