import React,{useState} from 'react'
import { FooterContainer } from '../../shared/styles'
import {  Box, Switch, SliderTrack, SliderFilledTrack, Slider, Grid, GridItem, PinInput, PinInputField, Button} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { ColorSlider, ColorPicker } from '../../shared/styles'
import { selectBgColor, setBgColor } from '../../redux/reducers/bgReducer'
import { RgbaColorPicker, RgbaStringColorPicker,HexColorInput} from "react-colorful"
import { FaPlus } from 'react-icons/fa'
import GradientSlider from '../gradient-slider/GradientSlider'
const Footer = () => {
  const [bgType,setBgType] = useState(false)
  const [value,setValue] = useState(0)
  const [value1,setValue1] = useState(0)
  const dispatch = useDispatch()
  const color = useSelector(selectBgColor)
  return (
    <FooterContainer>
    <Grid templateColumns='repeat(5, 1fr)' templateRows='2'  padding="10px 20px"> 
      <GridItem colSpan="1" display="flex" justifyContent="space-around" alignItems="start">
            <b>
            Gradient Bg 
            </b>
            <Switch colorScheme="cyan" onChange={({target})=>setBgType(target.checked)}/>
      </GridItem>
      {bgType ?    
      <>
     
      <GradientSlider />
  
      {/* <GridItem colSpan="4">
        <Box  w='100%' h='20px' borderRadius="3px" background={`linear-gradient(to right,blue ${value1}% ,red ${value}%)`} 
          onClick={(event) => console.log(event)}>
        </Box>
        <Slider defaultValue={0} onChange={(value) => setValue(value)} top="-25px">
          <SliderTrack background="transparent"  >
            <SliderFilledTrack background="transparent" />
          </SliderTrack>
          <ColorSlider value={value} bg='tomato'  />
        </Slider>
        <Slider defaultValue={0} onChange={(value) => setValue1(value)} top="-25px">
          <SliderTrack background="transparent"  >
            <SliderFilledTrack background="transparent" />
          </SliderTrack>
          <ColorSlider value={value1} bg='blue'   />
        </Slider>

      </GridItem> */}
      {/* <GridItem rowSpan="2" colStart={2} colEnd={4} >
        <RgbaStringColorPicker color={color} onChange={(e)=> dispatch(setBgColor(e)) } style={{width:'100%',maxWidth:'400px',margin:'auto'}}/>
        {JSON.stringify(color)}
      </GridItem> */}
      </>  
    : 
    <>
      <GridItem rowSpan="2" colStart={2} colEnd={4} >
        <RgbaStringColorPicker color={color} onChange={(e)=> dispatch(setBgColor(e)) } style={{width:'100%',maxWidth:'400px',margin:'auto'}}/>
        {JSON.stringify(color)}
      </GridItem>
      <GridItem>
        <HexColorInput color={color} className="css-1c6j008"/>
        {/* <Input value={color}/> */}
      </GridItem>
      <GridItem rowEnd={3} rowStart={2} colStart={4} colEnd={5}>
      <div>
        <PinInput >
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
          <PinInputField></PinInputField>
        </PinInput>
      </div>
      </GridItem>
   
    </>
    }

    </Grid>
      {/* <SimpleGrid columns="4" spacing="2" margin="10px 20px">
        <Box display='flex' justifyContent="center" alignItems="center">
            <b style={{marginRight:10}}>
            Gradient Background? 
            </b>
            <Switch colorScheme="cyan" onChange={({target})=>setBgType(target.checked)}/>
        </Box>
     
        <Box  w='100%' h='10px' background={`linear-gradient(to right,blue,red ${value}%)`}>
        {value}
        <Box />


        <RangeSlider aria-label={['min', 'max']} defaultValue={[10]} onChange={(value) => setValue(value)}>
          <RangeSliderTrack background="transparent">
            <RangeSliderFilledTrack background="white" />
          </RangeSliderTrack>
          <ColorSlider value={value} bg='tomato' index={0} />
        </RangeSlider>
        </Box>
      </SimpleGrid> */}
 
      {/* <ChromePicker color={color} onChangeComplete={(e)=>setColor(e.hex)} /> */}
    </FooterContainer>
  )
}

export default Footer