import React, { useEffect, useState } from 'react';
import Info from './Info';
import { useSelector, useDispatch } from 'react-redux';
function Container() {

  const data = useSelector((state) => state);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [country, setCountry] = useState("");
  

  return (
    <div className='app-container'>
        <div className="info-temp">
            <div className="large-text">
              
            </div>
            <div className="small-text">Feels like 26°C</div>
        </div>

        {/* <div className="info-weather">
            <div className="med-text">
                {weather.current}
            </div>
            <div className="small-text">{weather.weatherDesc}</div>
        </div> */}
    </div>
  )
}

export default Container