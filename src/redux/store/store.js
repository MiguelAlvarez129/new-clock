import {configureStore} from '@reduxjs/toolkit'
import timerReducer from '../reducers/timerReducer'
import colorReducer from '../reducers/bgReducer'
export const store = configureStore({
  reducer:{
    timer:timerReducer,
    bgColor:colorReducer,
  }
})