import React, { useEffect, useState } from 'react';
import Info from './Info';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeatherData } from '../SearchRedux/weatherSlice';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';
import Daily from './Daily';

function Container() {
  const [data, setData] = useState({})
  const {weatherData} = useSelector(selectWeatherData);
  const { place } = useSelector((state) => state.place)
  const { temp, feelsLike, main, desc, timezoneOffset, dt, daily, hourly} = weatherData.weatherData;
  const {city, country} = place;
  console.log(daily)
  return (
    <div className='app-container'>

      <Info data={{temp, feelsLike, main, desc, dt, timezoneOffset}} place={{city, country}}/>
      <Daily data={{daily, timezoneOffset}} />
    </div>
  )
}

export default Container