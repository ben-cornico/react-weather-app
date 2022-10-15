// import React, {useEffect, useState} from 'react';
// import axios from 'axios'

// function useGetWeatherData({lat, lng}) {
//     const [data, setData] = useState({});
//     const [weather, setWeather] = useState({});
//     const [daily, setDaily] = useState([]);
//     const [hourly, setHourly] = useState([])


    
//         // daily, hourly, currentWeather, etc
//             if(lat !== undefined && lng !== undefined) {
//                 const config = {
//                     method: 'get',
//                     //made a proxy base url in package.json to fix the CORS error if youre using third party api
//                     url: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
//                     headers: {  }
//                 }
        
//                 axios(config)
//                     .then(res => {
//                         setData({
//                             temp: res.data.current.temp,
//                             feelsLike: res.data.current.feels_like,
//                             visibility: res.data.current.visibility,
//                             humidity: res.data.current.humidity,
//                             timezoneOffset: res.data.timezone_offset,
//                             dt: res.data.current.dt,
                            
//                         })
//                         setWeather({
//                             current: res.data.current.weather[0].main,
//                             weatherDesc: res.data.current.weather[0].description,
//                             weatherIcon: res.data.current.weather[0].icon
//                         })
        
//                         setDaily(res.data.daily);
//                         setHourly(res.data.hourly)
//                     })
        
//                     .catch(err => {
//                         console.log(err.response)
//                     })                   
//             }
    

//   return {data, weather, daily, hourly}
// }

// export default useGetWeatherData