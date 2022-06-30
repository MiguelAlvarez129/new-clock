import React,{useState, useEffect} from 'react'
import { FooterContainer, Item, ColorPicker} from '../../shared/styles'
import {Switch, Grid, Box, SimpleGrid} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectBgColor, selectBgType, switchBgType} from '../../redux/reducers/bgReducer'
import GradientSlider from './gradient-slider/GradientSlider'
import { useLocation } from 'react-router-dom'
import SimpleSlider from './simple-slider/SimpleSlider'
const Footer = () => {
  const dispatch = useDispatch()
  const bgType = useSelector(selectBgType)
  const {pathname} = useLocation()

  const bg = {
    "/":'#ff9399',
    "/stopwatch":'#55bbd3',
    "/timer":'#3888ca'
  } 
  return (
  <FooterContainer bg={bg[pathname]}>

    <Grid bg={bg[pathname]} templateColumns='repeat(5, 1fr)' templateRows='2'  padding="10px 20px" gap={4} > 
      <Item colSpan="1" display="flex" rowStart="1" rowEnd="3" flexDirection="column"  alignItems="start">
        <Box display="flex" justifyContent="space-evenly" w="100%">
            <b>
            Gradient Bg  
            </b>
            <Switch colorScheme="cyan" onChange={({target})=>dispatch(switchBgType(target.checked))}/>
        </Box>
        <Box textAlign="center" alignSelf="center" mb="10px">
        <br />
          <b>
            Font Options
          </b>
        </Box>
        <Box display="flex" justifyContent="space-evenly" w="100%">
        <b>
          Font Color
        </b>
        <ColorPicker type="color" />
        </Box>
        <Box>
          <b>
            Font Family
          </b>
        </Box>
        {/* <SimpleGrid columns={2} spacing={2} w="100%" mt="10px">
          <Box>
            Font Color
          </Box>
          <Box>
            <ColorPicker type="color" />
          </Box>
          <Box bg='tomato' height='80px'></Box>
         
        </SimpleGrid> */}
      </Item>
   
      {bgType ?     <GradientSlider bgType={bgType} /> : <SimpleSlider bgType={bgType}/>}
    </Grid>
  </FooterContainer>
  )
}

export default Footer