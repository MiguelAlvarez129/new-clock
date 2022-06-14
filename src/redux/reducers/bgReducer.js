import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  color: localStorage.getItem('simpleColor') || 'rgb(100,100,100)' 
}

export const colorSlice = createSlice({
  name:'bgColor',
  initialState,
  reducers:{
    setBgColor:(state,action)=>{
      state.color = action.payload
    },
    setRgb:(state,action)=>{
      const {value,index} = action.payload
      const colors = state.color.split(/\D+/g).filter(e => e)
      colors[index] = value
      state.color = `rgb(${colors.join()})`
    }
  }
})


export const {setBgColor, setRgb} = colorSlice.actions;
export const selectBgColor = ((state) => state.bgColor.color)


export default colorSlice.reducer