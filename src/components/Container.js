import React, { useEffect, useState } from 'react';
import Info from './Info';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeatherData } from '../SearchRedux/weatherSlice';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';

function Container() {
  const [data, setData] = useState({})
  const {weatherData} = useSelector(selectWeatherData);
  console.log(weatherData)
  const { place } = useSelector((state) => state.place)
  const { temp, feelsLike, main, desc, timezoneOffset, dt } = weatherData.weatherData;
  const {city, country} = place;
  return (
    <div className='app-container'>

      <Info data={{temp, feelsLike, main, desc, dt, timezoneOffset}} place={{city, country}}/>

    </div>
  )
}

export default Container