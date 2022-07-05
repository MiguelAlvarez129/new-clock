import React,{useState, useEffect} from 'react'
import { Item} from '../../../shared/styles'
import { useDispatch, useSelector} from 'react-redux'
import { setBgColor, selectBgColor, selectBgType } from '../../../redux/reducers/bgReducer'
import { RgbStringColorPicker} from "react-colorful"
import RgbInput from './rgb-input/RgbInput'
import { Show } from '@chakra-ui/react'




const SimpleSlider = () => {
  const dispatch = useDispatch()
  const color = useSelector(selectBgColor)

  return (
  <>
    <Item  colSpan={{base:4,lg:2}} gridRow={{base:3,md:2,lg:1}}>
    <RgbStringColorPicker color={color} onChange={(color)=> dispatch(setBgColor(color)) } style={{width:'100%',margin:'auto'}}/>
    </Item>
    <Show above='md'>
      <Item colSpan={{base:2,lg:1}} gridRow={{base:2,md:1}} >
        <RgbInput />  
      </Item>
    </Show>
  </>
  )
}

export default SimpleSlider