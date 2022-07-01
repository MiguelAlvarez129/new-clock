import React,{useState, useEffect} from 'react'
import { FooterContainer, Item, ColorPicker} from '../../shared/styles'
import {Switch, Grid, Box, SimpleGrid, Flex} from '@chakra-ui/react'
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

    <Grid bg={bg[pathname]} templateColumns='repeat(5, 1fr)' templateRows='3'  padding="5px" gap={{base:1,lg:4}} > 
      
      <Item colSpan={bgType ? {base:3,lg:1} : 1} rowStart={bgType ? {base:2,lg:1} : 1} rowEnd="3" alignItems="start">
        <Flex direction={{base:"column",md:"row"}} justify="space-evenly" align="center">
            <b>
            Gradient  
            </b>
            <Switch colorScheme="cyan" onChange={({target})=>dispatch(switchBgType(target.checked))}/>
        </Flex>
        {/* <Box textAlign="center" alignSelf="center" mb="10px">
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
        </Box> */}
        Vs
      </Item>
   
      {bgType ?     <GradientSlider bgType={bgType} /> : <SimpleSlider bgType={bgType}/>}
    </Grid>
  </FooterContainer>
  )
}

export default Footer