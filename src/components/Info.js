import React, { useEffect, useState } from 'react';
import useGetDateTime from '../Hooks/useGetDateTime';
import axios from 'axios'

function Info(props) {
    const [data, setData] = useState({})
    const [currentDate, setCurrentDate] = useState("")
    const {city, country} = props.data;
    const [weather, setWeather] = useState({})
    const [daily, setDaily] = useState([])
    const [hourly, setHourly] = useState([])
    const getWeather = (lat, lng) => {
        if(lat !== undefined && lng !== undefined) {
            const config = {
                method: 'get',
                //made a proxy base url in package.json to fix the CORS error if youre using third party api
                url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
                headers: {  }
            }
    
            axios(config)
                .then(res => {
                    setData({
                        temp: res.data.current.temp,
                        feelsLike: res.data.current.feels_like,
                        visibility: res.data.current.visibility,
                        humidity: res.data.current.humidity,
                        timezoneOffset: res.data.timezone_offset,
                        dt: res.data.current.dt,
                        
                    })
                    setWeather({
                        current: res.data.current.weather[0].main,
                        weatherDesc: res.data.current.weather[0].description,
                        weatherIcon: res.data.current.weather[0].icon
                    })

                    setDaily(res.data.daily);
                    setHourly(res.data.hourly)
                })

                .catch(err => {
                    console.log(err.response)
                })                   
        }
    }

    if(Object.keys(props.data).length !== 0) {
        const {lat, lng} = props.data.coordinates;
        getWeather(lat, lng)
        // THIS TO PREVENT INFINITE LOOP
        props.data.coordinates.lat = undefined;
        props.data.coordinates.lng = undefined;
    }

    
    
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
                {weather.current}
            </div>
            <div className="small-text">{weather.weatherDesc}</div>
        </div>

        <div className="info-city-country">
            <div className="med-text">
                {city}, {country}
            </div>
            <div className="small-text">
                {useGetDateTime(data.timezoneOffset, "currentDate", data.dt)}
            </div>
        </div>
    </div>
  )
}

export default Info