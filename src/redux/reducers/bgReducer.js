import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  color: localStorage.getItem('simpleColor') || 'rgb(238, 82, 82)',
  bgType:false,
}

export const colorSlice = createSlice({
  name:'bgColor',
  initialState,
  reducers:{
    setBgColor:(state,action)=>{
      state.color = action.payload
    },
    setRgb:(state,action)=>{ 
      let {value,index} = action.payload
      if (!value) value = 0
      const colors = state.color.split(/\D+/g).filter(e => e)
      colors[index] = value
      state.color = `rgb(${colors.join()})`
    },
    switchBgType:(state,action)=>{
      state.bgType = action.payload
    }
  }
})


export const {setBgColor, setRgb, switchBgType} = colorSlice.actions;
export const selectBgColor = ((state) => state.bgColor.color)
export const selectBgType = ((state) => state.bgColor.bgType)

export default colorSlice.reducer