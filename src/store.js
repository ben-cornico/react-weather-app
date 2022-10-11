import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './Redux/weatherSlice';
import placeReducer from './Redux/placeSlice';

export default configureStore({
  reducer: {
    weatherData: weatherReducer,
    place: placeReducer,
  },
})