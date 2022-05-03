import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  seconds:0,
  minutes:0,
}

export const timerSlice = createSlice({
  name:'timer',
  initialState,
  reducers:{
    setSeconds:(state,action)=>{
      state.seconds = action.payload
    },
    setMinutes:(state,action)=>{
      state.minutes = action.payload * 60
    }
  }
})


export const {setSeconds,setMinutes} = timerSlice.actions;
export const selectSeconds = ((state) => state.timer.seconds)
export const selectMinutes = ((state) => state.timer.minutes)
export default timerSlice.reducer