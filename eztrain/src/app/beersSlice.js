import { createSlice } from '@reduxjs/toolkit'

export const beersSlice = createSlice({
    name: 'beers',
    initialState: {
        beers: [],
        beer: {}
    },
    reducers: {
        setBeers: (state, action) => {
            state.beers = action.payload
        },
        setBeer: (state, action) => {
            state.beer = action.payload
        }
    }
})

export const { setBeer, setBeers } = beersSlice.actions

export default beersSlice.reducer