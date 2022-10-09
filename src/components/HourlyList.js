import React from 'react';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';
import './components.css'

function HourlyList({info}) {
    const { hourlyInfo, timezoneOffset } = info;
  return (
    <div className='list-item'>
        <div className="info-date">
            {useGetDateTime(timezoneOffset, "hourlyUpdate", hourlyInfo.dt)}
        </div>

        <div className="info-temp">
        {
            `${Math.round(hourlyInfo.temp)}°C`
        }
        </div>

        <div className="info-icon">
            <img src={hourlyInfo.icon} alt="" />
        </div>

        <div className="info-desc">
        {
            hourlyInfo.desc
        }
        </div>
    </div>
  )
}

export default HourlyList