import React from 'react';
import useGetDateTime from './useGetDateTime';

function useHourlyUpdate(hourlyInfo) {
    const hourly = [];
    hourlyInfo.forEach(element => {
        hourly.push({
            dt: element.dt,
            temp: element.temp,
            icon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
            desc: element.weather[0].description,
        })
    })
    hourly.splice(11, hourly.length)
    return hourly;
  return null
}

export default useHourlyUpdate