import React from 'react';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';
import './components.css'

function DailyList({info}) {
    const { dailyInfo, timezoneOffset } = info
  return (
    <div className="list-item">
        <div className="info-date">
        {useGetDateTime(timezoneOffset, "dailyDate", dailyInfo.dt)}
        </div>

        <div className="info-temp">
        {
            `${dailyInfo.temp.max}/${dailyInfo.temp.min}°C`
        }
        </div>

        <div className="info-icon">
        <img src={`http://openweathermap.org/img/wn/${dailyInfo.weather[0].icon}@2x.png`} alt="" />
        </div>

        <div className="info-desc">
        {
            dailyInfo.weather[0].description
        }
        </div>
    </div>
  )
}

export default DailyList