import { createSlice } from "@reduxjs/toolkit";

export const collectionsSlice = createSlice({
    name: 'collections',
    initialState: {
        collections: [0]
    },

    reducers: {
        addCollection: (state) => {
          state.collections.push(state.collections.length)  
        },
        deleteCollection: (state, action) => {
            state.collections.splice(action.payload, 1);
        }
        
    }
})

export const {addCollection, deleteCollection} = collectionsSlice.actions;

export const selectCollection = (state) => state.collections;

export default collectionsSlice.reducer