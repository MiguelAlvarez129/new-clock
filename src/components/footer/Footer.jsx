import React,{useState, useEffect} from 'react'
import { FooterContainer, Item} from '../../shared/styles'
import {Switch, Grid, GridItem, PinInput, PinInputField} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBgColor, setBgColor } from '../../redux/reducers/bgReducer'
import { RgbaColorPicker, RgbaStringColorPicker,HexColorInput} from "react-colorful"
import GradientSlider from './gradient-slider/GradientSlider'
import { useLocation } from 'react-router-dom'
import SimpleSlider from './simple-slider/SimpleSlider'
const Footer = () => {
  const [bgType,setBgType] = useState(false)
  const dispatch = useDispatch()
  const color = useSelector(selectBgColor)
  const {pathname} = useLocation()

  // useEffect(() => {
  //   dispatch(setBgColor(localStorage.getItem("bgColor")||'#FFFFFF'))
  //   return () =>{
  //     localStorage.setItem("bgColor",color)
  //   }
  // }, [bgType]);

  const bg = {
    "/":'#ff9399',
    "/stopwatch":'#55bbd3',
    "/timer":'#3888ca'
  } 
  return (
  <FooterContainer bg={bg[pathname]}>
    <Grid bg={bg[pathname]} templateColumns='repeat(5, 1fr)' templateRows='2'  padding="10px 20px" gap={4} > 
      <Item colSpan="1" display="flex" justifyContent="space-around" alignItems="start">
            <b>
            Gradient Bg 
            </b>
            <Switch colorScheme="cyan" onChange={({target})=>setBgType(target.checked)}/>
      </Item>
      {bgType ?     <GradientSlider bgType={bgType} /> : <SimpleSlider bgType={bgType}/>}
    </Grid>
  </FooterContainer>
  )
}

export default Footer