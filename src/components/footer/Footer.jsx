import React from 'react'
import { FooterContainer, Item, ColorPicker } from '../../shared/styles'
import { Switch, Grid, Box, SimpleGrid, GridItem, Flex, Select, Text, FormControl,FormLabel } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFontFamily, selectBgType, switchBgType, switchFont, switchFontColor, selectFontColor, } from '../../redux/reducers/bgReducer'
import GradientSlider from './gradient-slider/GradientSlider'
import { useLocation } from 'react-router-dom'
import SimpleSlider from './simple-slider/SimpleSlider'
const Footer = () => {
  const dispatch = useDispatch()
  const bgType = useSelector(selectBgType)
  const fontFamily = useSelector(selectFontFamily)
  const fontColor = useSelector(selectFontColor)
  const { pathname } = useLocation()
  const fonts = ['Roboto', 'RobotoMono', 'PlayfairDisplay', 'Oswald-Regular', 'Merriweather', 'LobsterTwo', 'Lobster', 'KdamThmorPro', 'Fascinate', 'Dosis', 'Anton']
  const bg = {
    "/": '#1d4f6d',
    "/stopwatch": '#55bbd3',
    "/timer": '#3888ca'
  }
  return (
    <FooterContainer bg={bg[pathname]}>
      <SimpleGrid columns={4} spacing={{base:1,lg:4}} p={{base:'5px',lg:'10px 20px',xl:'10px 50px'}}>
        <Item colSpan={ bgType ? {base:2,md:1} : {base:4,md:2,lg:1}} gridRow={bgType ? 2 : 1} >
          <SimpleGrid columns={2} spacingY={2}>
            <GridItem colSpan={2}>
                <Flex justify={"space-around"}>
                  <b>
                    Gradient Background?
                  </b>
                 <Switch colorScheme="cyan" size={'md'} onChange={({ target }) => dispatch(switchBgType(target.checked))} />
                </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex justify={"space-around"}>
                  <b>
                    Font Color
                  </b>
                  <ColorPicker type="color" value={fontColor} onChange={(e)=> dispatch(switchFontColor(e.target.value))}/>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl> 
                <FormLabel fontWeight={"bold"}>Font Family</FormLabel> 
                <Select  value={fontFamily} onChange={(e)=>dispatch(switchFont(e.target.value))}>
                  {fonts.map(e => ( 
                  <option key={e} value={e}>{e}</option> 
                  ))}
                </Select>
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </Item>
        {bgType ? <GradientSlider bgType={bgType} /> : <SimpleSlider bgType={bgType} />}
      </SimpleGrid>
    </FooterContainer>
  )
}

export default Footer