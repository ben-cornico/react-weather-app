import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCollectionWeather } from './collectionsSlice';

export const getWeatherData = createAsyncThunk('/weather/getWeatherData', async (action) => {
    
    const {lat, lng} = action;
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        return response.data

    } catch (err) {
        return err.message
    }
})


export const weatherSlice = createSlice({
    name: 'weather',
    initialState : {
        weatherData: {
            temp: 0,
            dt: 0,
            feelsLike: 0,
            visibility: 0,
            humidity: 0,
            main: "",
            desc: "",
            icon: "",
            timezoneOffset: 0,
            wind: 0,
            // uv: 0
            // uvi: 0,
            // sunrise: 0,
            // sunset: 0,
            // daily: [],
            // hourly: [],
        },
        status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
        error: null
    },

    reducers: {
                
    },
    extraReducers(builder) { 
        builder
            .addCase(getWeatherData.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getWeatherData.fulfilled, (state, action) => {
                const { current, hourly, daily, timezone_offset } = action.payload;
                state.status = 'succeeded';
                console.log(action.payload)
                state.weatherData =  {
                        temp: current.temp,
                        dt: current.dt,
                        feelsLike: current.feels_like,
                        visibility: current.visibility,
                        humidity: current.humidity,
                        main: current.weather[0].main,
                        desc: current.weather[0].description,
                        icon: current.weather[0].icon,
                        timezoneOffset: timezone_offset,
                        wind: current.wind_speed,
                        // uv: current.uvi
                        // uvi: current.uvi,
                        // sunset: current.sunset,
                        // sunrise: current.sunrise,
                        // daily: daily,
                        // hourly: hourly,
                }

            })
            .addCase(getWeatherData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})
export const selectWeatherData =(state) => state
export default weatherSlice.reducer