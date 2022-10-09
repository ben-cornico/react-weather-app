import React from 'react';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';
import DailyList from './DailyList';
import './components.css'

const Daily = ({data}) => {
  const {daily, timezoneOffset, humidity, wind, uvi, visibility} = data


  return (
    <div className='daily'>
      <div className="large-text">DAILY UPDATES</div>
      {
          daily.map(dailyInfo => {
            return (
              <DailyList info={{dailyInfo, timezoneOffset}} />
            )
          })
      }
      <div className="more-info">
        


            <div className="more-info">
                <p>Humidity: {humidity}% </p>
                <p>Wind: {Math.round(wind * 3.6)}km/s</p>
                <p>UVI: {Math.round(uvi)}</p>
                <p>Visbility: {visibility / 1000}km</p>
            </div>
      </div>
    </div>
  )
}


export default Daily