import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const emptyState = {
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed',
    unit: "celcius", // celcius | fahrenheit
    error: "",
    place: "",
    weather: {
        temp: 0,
        feelsLike: 0,
        weatherDesc: "",
        icon: "",
    },
    extras: {
        humidity: 0,
        visibility: 0,
        wind: 0,
    },
    dt: {
        dt: 0,
        timezone_offset: 0
    }
}

export const setCollectionWeather = createAsyncThunk('/weather/setCollectionWeather', async (action) => {
    const {lat, lng} = action.coordinates;
    const {collectionIndex} = action;
    try {

        if(lat !== undefined && lng !== undefined) {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        const data = {collectionIndex, weatherData: response.data}
        return data

        }

    } catch (err) {
        console.log(err.message)
        return err.message
    }
})

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: [emptyState]
    },

    reducers: {
        addCollection: (state) => {
            state.collections.push(emptyState)
        },
        deleteCollection: (state, action) => {
            state.collections.splice(action.payload, 1);
        },
        setCollectionPlace: (state, action) => {
            const {place, collectionIndex} = action.payload
            state.collections[collectionIndex] = {...state.collections[collectionIndex], place};
        },
        
    },

    extraReducers(builder) {
        builder
            .addCase(setCollectionWeather.fulfilled, (state, action) => {

                if(action.payload !== undefined) {
                    const { collectionIndex } = action.payload
                    const { current, timezone_offset } = action.payload.weatherData;
                    state.collections[action.payload.collectionIndex] = {
                        ...state.collections[collectionIndex],
                        status: 'success',
                        weather: {
                            temp: current.temp,
                            feelsLike: current.feels_like,
                            icon: current.weather[0].icon,
                            desc: current.weather[0].description
                        },
                        extras: {
                            humidity: current.humidity,
                            visibility: current.visibility,
                            wind: current.wind_speed,
                        },
                        dt : {
                            dt: current.dt,
                            timezone_offset: timezone_offset
                        }
    
                    }

                }
            })
            .addCase(setCollectionWeather.pending, (state, action) => {
            })
            .addCase(setCollectionWeather.rejected, (state, action) => {
                const { collectionIndex } = action.meta.arg;
                state.collections[collectionIndex] = {
                    ...state.collections[collectionIndex],
                    status: 'failed',
                    error: action.error.message
                }
            })
    }
})

export const { addCollection, deleteCollection, setCollectionPlace } = collectionsSlice.actions;

export const selectCollection = (state) => state.collections;

export default collectionsSlice.reducer