import { createSlice } from "@reduxjs/toolkit";

export const placeSlice = createSlice({
    name: 'place',
    initialState: {
        place: {
            city: "",
            country: "",
        }
    },

    reducers: {
        setPlace: (state, action) => {
            console.log(action)
            state.place = action.payload
        }
    }
})

export const {setPlace} = placeSlice.actions;

export const selectPlace = (state) => state.place;

export default placeSlice.reducer