import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  seconds:0,
  minutes:0,
  hours:0,
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
    },
    setHours:(state,action)=>{
      state.hours = action.payload * 3600
    }
  }
})


export const {setSeconds,setMinutes, setHours} = timerSlice.actions;
export const selectSeconds = ((state) => state.timer.seconds)
export const selectMinutes = ((state) => state.timer.minutes)
export const selectHours = ((state) => state.timer.hours)
export default timerSlice.reducer