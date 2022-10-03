import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './SearchRedux/weatherSlice';
import placeReducer from './PlaceRedux/placeSlice'

export default configureStore({
  reducer: {
    weatherData: weatherReducer,
    place: placeReducer
  },
})