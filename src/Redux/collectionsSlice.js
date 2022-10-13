import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: ["1"]
    },

    reducers: {
        addCollection: (state) => {
          state.collections.push("1")  
        }
    }
})

export const {addCollection} = collectionsSlice.actions;

export const selectCollection = (state) => state.collections;

export default collectionsSlice.reducer