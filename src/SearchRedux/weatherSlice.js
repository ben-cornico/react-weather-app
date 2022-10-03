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

const initialState = {
    weatherData: {},
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,

    reducers: {
                
    },
    extraReducers(builder) { 
        builder
            .addCase(getWeatherData .pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(getWeatherData.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.weatherData = action.payload
            })
            .addCase(getWeatherData.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})
export const selectWeatherData =(state) => state.weatherData
export default weatherSlice.reducer