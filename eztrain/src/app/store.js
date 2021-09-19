import { configureStore } from '@reduxjs/toolkit'
import beersSlice from './beersSlice'

export default configureStore({
    reducer: {
        beerStore: beersSlice
    }
})