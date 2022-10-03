import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeatherData = createAsyncThunk('/weather/getWeatherData', async (action) => {
    
    console.log(action)
    const {lat, lng} = action
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
            uvi: 0,
            sunrise: 0,
            sunset: 0,
            humidity: 0,
            main: "",
            desc: "",
            icon: "",
            daily: [],
            hourly: []
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
                const { current, hourly, daily } = action.payload;
                state.status = 'succeeded'
                state.weatherData =  {
                        temp: current.temp,
                        dt: current.dt,
                        feelsLike: current.feels_like,
                        visibility: current.visibility,
                        uvi: current.uvi,
                        sunset: current.sunset,
                        sunrise: current.sunrise,
                        humidity: current.humidity,
                        main: current.weather[0].main,
                        desc: current.weather[0].description,
                        icon: current.weather[0].icon,
                        daily: daily,
                        hourly: hourly,
                }

                //state.weatherData = action.payload
            })
            .addCase(getWeatherData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})
export const selectWeatherData =(state) => state.weatherData
export default weatherSlice.reducer