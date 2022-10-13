import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './Redux/weatherSlice';
import placeReducer from './Redux/placeSlice';
import collectionReducer from './Redux/collectionsSlice'

export default configureStore({
  reducer: {
    weatherData: weatherReducer,
    place: placeReducer,
    collections: collectionReducer
  },
})