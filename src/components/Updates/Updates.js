import React from 'react';
import '../components.css'
import useHourlyUpdate from '../../Hooks/useHourlyUpdate';
import List from '../List/List';
import useDailyUpdate from '../../Hooks/useDailyUpdate';

const Updates = ({data}) => {
    const { daily, hourly, timezoneOffset } = data
    const hourlyData = useHourlyUpdate(hourly);
    const dailyData = useDailyUpdate(daily)

  return (
    <>
        <div className="daily-updates">
            <div className="med-text">Daily Updates</div>
            <div className="daily">
                {
                    dailyData.map(dailyInfo => {
                        console.log(dailyInfo)
                        return (
                            <List data={dailyInfo} timezoneOffset={timezoneOffset} type="dailyDate"/>
                        )
                    }) 
                }
            </div>
        </div>
            
        <div className="hourly-updates">
            <div className="med-text">Hourly Updates</div>
            <div className="hourly">
                {
                hourlyData.map(hourlyInfo => {
                    return (
                        <List data={hourlyInfo} timezoneOffset={timezoneOffset} type="hourlyUpdate"/>
                    )
                })
                }
            </div>
        </div>
    
  </>
  )
}

export default Updates