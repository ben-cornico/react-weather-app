import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import { useSelector, useDispatch } from 'react-redux';
import { selectWeatherData } from '../../Redux/weatherSlice';
import Updates from '../Updates/Updates';

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

  return (
    <div className='app-container'>
      {
        weatherData.status === 'loading' ? "LOKDIT" : (
          <>
            <Info data={{temp, feelsLike, main, desc, dt, timezoneOffset, icon, wind, uvi, humidity}} place={{city, country}}/>
            <div className="updates">
              <Updates data={{daily, hourly, timezoneOffset}}/>

            </div>
          </>
        )
      }

    </div>
  )
}

export default Container