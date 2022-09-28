import React, { useState } from 'react';
import axios from 'axios'

function Info(props) {
    const {lat, lng} = props.data;

    const getWeather = (lat, lng) => {
        if(lat !== undefined && lng !== undefined) {
            const config = {
                method: 'get',
                //made a proxy base url in package.json to fix the CORS error if youre using third party api
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
                headers: {  }
            }
    
            axios(config)
                .then(res => {
                    // setDropDown(res.data.predictions)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err.response)
                })
        }
    }

    getWeather(lat, lng)
  return (
    <div className='info'>
        <div className="info-temp">
            <div className="large-text">
                26°C
            </div>
            <div className="small-text">Feels like 26°C</div>
        </div>

        <div className="info-weather">
            <div className="med-text">
                Clouds
            </div>
            <div className="small-text">Overcast clouds</div>
        </div>

        <div className="info-city-country">
            <div className="med-text">
                Laoag City, PH
            </div>
            <div className="small-text">
                September 28, at 3:10 AM
            </div>
        </div>
    </div>
  )
}

export default Info