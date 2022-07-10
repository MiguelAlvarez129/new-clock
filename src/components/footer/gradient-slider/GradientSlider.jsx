import React, {useState, useEffect} from 'react'
import {  Box, SliderTrack, SliderFilledTrack, Button, Text, Input, SimpleGrid, Hide, Flex, Show, Grid, GridItem} from '@chakra-ui/react'
import { FaPlus, FaTimes} from 'react-icons/fa'
import { ColorSlider, CustomSlider, ColorItem, Item} from '../../../shared/styles'
import { HexColorPicker} from 'react-colorful'
import { setBgColor } from '../../../redux/reducers/bgReducer'
import { useDispatch } from 'react-redux'
import {
	CircularInput,
	CircularTrack,
	CircularProgress,
	CircularThumb
} from 'react-circular-input'

const GradientSlider = () => {

  const getSliders = () => {
    return JSON.parse(localStorage.getItem("sliders")) 
  }

  const [sliders, setSliders] = useState(getSliders())
  const [color,setColor] = useState(sliders[0])
  const [deg,setDeg] = useState(localStorage.getItem("deg") || 90)
  const dispatch = useDispatch()

  useEffect(() => {
    const colors = gradientColors()
    const bg = `linear-gradient(${deg}deg ${colors} )`
    dispatch(setBgColor(bg))
  }, [sliders,deg])
  
  useEffect(() => {
    setColor(sliders[sliders.length-1])
  }, [sliders.length])

  const gradientColors = () => {
    return sliders.map(e => e).sort((a,b)=> a.value - b.value).reduce((acc,{color,value})=> acc.concat(` , ${color + ' ' + value + '%'}`),'')
  }

  const addSlider = () =>{
    setSliders([...sliders,{...newSlider(),id:sliders.length}])
  }

  const newSlider = () =>{
    const color = "#" + new Array(3).fill("").map(() => {
      const hex = Math.floor((Math.random() * 100)).toString(16)
      return hex.length === 1 ? hex + "0" : hex
    }).join("")

    const value = Math.floor(Math.random() * 100)

    return {color,value}
  }

  const changeColor = (value) =>{
    setSliders(sliders.map((e,i)=> i === color.id ? {...e,color:value}: {...e}))
  }

  const selectColor = (index) =>{
    setColor(sliders[index])
  }

  const onChange = (value,index) =>{
    setSliders(sliders.map((e,i)=> i === index ? {...e,value}: {...e}))
  }
  
  const removeSlider = (e,index) =>{
    e.stopPropagation()
    setSliders(sliders.filter((e,i) => i !== index ).map((e,index)=> ({...e,id:index})))
    
  }

  return (
    <>
      <Item colSpan={4} gridRow={1}>
          <Box  w='100%' h='20px' borderRadius="3px" border="lightgray solid 1px" background={`linear-gradient(to right ${gradientColors()})`} onClick={(event) => console.log(event)}/>
      <div style={{height:0}}>
        {
          sliders.map((e,index)=> (
          <CustomSlider value={e.value} key={index} index={index} paddingTop="0px" onClick={(e)=>selectColor(index)} onChange={(value)=>onChange(value,index)}>
          <SliderTrack background="transparent" p="0" >
            <SliderFilledTrack background="transparent" />
          </SliderTrack>
          <ColorSlider value={e.value} bg={e.color}  />
        </CustomSlider> 
        ))
        }
      </div>
      </Item>
      <Item colSpan={{base:4,md:2}} gridRow={{base:3,md:2}}>
          <HexColorPicker color={color.color} onChange={changeColor} style={{width:'100%',margin:"auto"}}/>
      </Item>
      <Item colSpan={{base:2,md:1}} >
        <Flex justify={"space-around"} align={"center"}>
            <Hide below="sm">
              <Button leftIcon={<FaPlus />} onClick={addSlider}>
                  Add Color
              </Button>
            </Hide>
            <Show below="sm">
              <Button onClick={addSlider}>
                <FaPlus />
              </Button>
            </Show>
            <Grid >
              <GridItem colStart={1} rowStart={1}>
              <Input type="text" width={'4ch'} m={'15px auto'} display={'block'} h={'35px'} textAlign={'center'} p={0} value={deg} />
              </GridItem>
              <GridItem colStart={1} rowStart={1}>
              <CircularInput value={deg / 360} onChange={(value) => setDeg(Math.floor(value * 360 ))} radius={35}>
                <CircularTrack strokeWidth={10} />
                <CircularProgress strokeWidth={10} />
                <CircularThumb  r={12}/>
              </CircularInput>
              </GridItem>
            </Grid>
            {/* <CircularSlider width={60} dataIndex={deg} knobSize={30} valueFontSize={20} label="*" trackSize={10} onChange={(value) => setDeg(value)}/> */}
        </Flex>
          <SimpleGrid columns={2} spacing={"2"} mt="10px">
          {sliders.map((e,index)=>(
            <ColorItem colSpan={{base:1,lg:2}} background={{base:e.color,lg: index == color.id ? "lightblue" : "#eeeeee"}} onClick={()=>selectColor(index)} key={index} selected={index == color.id }>
              <Flex w={"100%"} justify={{base:"space-around",lg:"space-evenly"}} align="center">
              <Show below="lg">
                <Text fontWeight="bold" fontSize="0.9rem" >
                      {e.value}%
                </Text>
              </Show>
                <Hide below="lg">
                <Box w={{base:'100%',lg:'40px'}} h="40px" borderRadius="5px" background={e.color}/>
                  <Text fontWeight="bold" fontSize="1.2rem" p="0 10px">
                    {e.value}%
                  </Text>
                  <Input type="text" value={e.color} p={0} textAlign="center" readOnly bg="white" w="100px" />
                </Hide>
              <Button disabled={sliders.length === 2} onClick={(e)=>removeSlider(e,index)} size="xs" h="24px" w="24px" borderRadius="50%" colorScheme="red">
                <FaTimes size={12} />
              </Button>
              </Flex>
            </ColorItem>
          ))} 
          </SimpleGrid>
      </Item>
    </>
  )
}

export default GradientSlider