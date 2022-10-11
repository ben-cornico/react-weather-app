import React, { useState } from 'react';
import useGetDateTime from '../../Hooks/useGetDateTime';

const List = ({data, timezoneOffset, type}) => {
    const {dt, temp, icon, desc} = data;

    //IF TRUE temp is an object
  return (
    <div className='list-item'>
        <div className="info-date">
            {useGetDateTime(timezoneOffset, type, dt)}
        </div>
        <div className="info-temp">
            {
                type === 'dailyDate' ? (
                    `${Math.round(temp.max)}/${Math.round(temp.min)}°C`
                ) : (
                    `${Math.round(temp)}°C`
                )
            }
        </div>

        <div className="info-icon">
            <img src={icon} alt="" />
        </div>

        <div className="info-desc">
        {
            desc
        }
        </div>
    </div>
  )
}

export default List