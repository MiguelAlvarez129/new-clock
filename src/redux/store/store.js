import {configureStore} from '@reduxjs/toolkit'
import timerReducer from '../reducers/timerReducer'
import colorReducer from '../reducers/bgReducer'
import saveBg from '../middlewares/saveBg'
export const store = configureStore({
  reducer:{
    timer:timerReducer,
    bgColor:colorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveBg)
})