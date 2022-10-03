import React, { useEffect, useState } from 'react';
import useGetDateTime from './useGetDateTime';

function useGetDailyUpdate(dailyInfo) {
    useEffect(() => {
        const daily = [];
        dailyInfo.forEach(element => {
            daily.push({
                dateTime: useGetDateTime(element.dt, "dailyDate", result.timezone_offset),
                maxTemp: Math.round(element.temp.max),
                minTemp: Math.round(element.temp.min),
                weatherIcon: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
                
                weatherInfo: element.weather[0].description,
            })
        })
        return daily;
    }, [dailyInfo])
    
  return daily
}

export default useGetDailyUpdate