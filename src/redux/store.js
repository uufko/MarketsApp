import {configureStore} from '@reduxjs/toolkit'
import MarketSlice from './slice'

export const Store = configureStore({
    reducer:{
        market: MarketSlice.reducer,
    }
})