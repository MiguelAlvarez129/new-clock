import {configureStore} from '@reduxjs/toolkit'
import timerReducer from '../reducers/timerReducer'
export const store = configureStore({
  reducer:{
    timer:timerReducer,
  }
})