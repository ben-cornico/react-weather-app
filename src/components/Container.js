import React, { useEffect, useState } from 'react';
import Info from './Info';
import Hourly from './Hourly'
import { useSelector, useDispatch } from 'react-redux';
import { selectWeatherData } from '../SearchRedux/weatherSlice';
import Daily from './Daily';
import Footer from './Footer';

function Container() {
  const {weatherData} = useSelector(selectWeatherData);
  const { place } = useSelector((state) => state.place)
  const { temp,
          feelsLike,
          main,
          desc,
          timezoneOffset,
          dt,
          daily,
          hourly,
          icon,
          wind,
          uvi,
          humidity,
          visibility
        } = weatherData.weatherData;
  const {city, country} = place;

  console.log(weatherData)
  return (
    <div className='app-container'>
      {
        weatherData.status === 'loading' ? "LOKDIT" : (
          <>
            <Info data={{temp, feelsLike, main, desc, dt, timezoneOffset, icon, wind, uvi, humidity}} place={{city, country}}/>
            <div className="updates">
              <Daily data={{daily, timezoneOffset, humidity, wind, uvi, visibility}} />
              <Hourly data={{hourly, timezoneOffset}}/>

            </div>
          </>
        )
      }

    </div>
  )
}

export default Container