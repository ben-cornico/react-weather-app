import React from 'react';
import HourlyList from './HourlyList';
import useHourlyUpdate from '../Hooks/Weather/useHourlyUpdate';

function Hourly({data}) {
    const {hourly, timezoneOffset} = data;
    const info = useHourlyUpdate(hourly);
  return (
    <div className='hourly'>
        {
          info.map(hourlyInfo => {
            return (
              <HourlyList info={{hourlyInfo, timezoneOffset}} />
            )
          })
        }
    </div>
  )
}

export default Hourly