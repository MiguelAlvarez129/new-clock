import React,{useState, useEffect} from 'react'
import { Item} from '../../../shared/styles'
import { useDispatch, useSelector} from 'react-redux'
import { setBgColor, selectBgColor, selectBgType } from '../../../redux/reducers/bgReducer'
import { RgbStringColorPicker} from "react-colorful"
import RgbInput from './rgb-input/RgbInput'




const SimpleSlider = () => {
  const dispatch = useDispatch()
  const color = useSelector(selectBgColor)

  return (
  <>
    <Item  colStart={2} colEnd={{base:5,md:4}} rowStart={1} rowEnd={3}>
    <RgbStringColorPicker color={color} onChange={(color)=> dispatch(setBgColor(color)) } style={{width:'100%',maxWidth:'400px',margin:'auto'}}/>
    </Item>
   <Item colStart={{base:5,md:4}} colEnd={{base:6,md:5}} rowStart={1} rowEnd={3} >
  

      <RgbInput />  

    </Item>
  </>
  )
}

export default SimpleSlider