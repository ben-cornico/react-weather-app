import React from 'react';
import useGetDateTime from '../Hooks/Weather/useGetDateTime';
import DailyList from './DailyList';
import './components.css'

const Daily = ({data}) => {
  const {daily, timezoneOffset} = data


  return (
    <div className='daily'>
      {
          daily.map(dailyInfo => {
            return (
              <DailyList info={{dailyInfo, timezoneOffset}} />
            )
          })
      }
    </div>
  )
}


export default Daily