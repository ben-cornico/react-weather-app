import { configureStore } from '@reduxjs/toolkit';
import collectionReducer from './Redux/collectionsSlice';

export default configureStore({
  reducer: {
    collections: collectionReducer,
  },
})