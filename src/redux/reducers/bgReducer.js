import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  color:'#FFFFFF'
}

export const colorSlice = createSlice({
  name:'bgColor',
  initialState,
  reducers:{
    setBgColor:(state,action)=>{
      state.color = action.payload
    },
  }
})


export const {setBgColor} = colorSlice.actions;
export const selectBgColor = ((state) => state.bgColor.color)


export default colorSlice.reducer