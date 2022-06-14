import React, {useState, useEffect} from 'react'
import {  Box, GridItem, SliderTrack, SliderFilledTrack, Button, Text, Input} from '@chakra-ui/react'
import { FaPlus, FaTimes} from 'react-icons/fa'
import { ColorSlider, CustomSlider, ColorItem, Item} from '../../../shared/styles'
import { HexColorPicker} from 'react-colorful'
import { setBgColor } from '../../../redux/reducers/bgReducer'
import {useDispatch} from 'react-redux'
import CircularSlider from '@fseehawer/react-circular-slider'

const GradientSlider = ({bgType}) => {

  const getSliders = () => {
    return localStorage.getItem("sliders") ? JSON.parse(localStorage.getItem("sliders")) : [{color:'#FA8072',value:"0",id:0}, {color:'#123245',value:"10",id:1}]
  }

  const [sliders, setSliders] = useState(getSliders())
  const [color,setColor] = useState(sliders[0])
  const [deg,setDeg] = useState(localStorage.getItem("deg") || 90)
  const dispatch = useDispatch()

  useEffect(() => {
    const colors = gradientColors()
    const bg = `linear-gradient(${deg}deg ${colors} )`
    dispatch(setBgColor(bg))
    
    return () =>{
      localStorage.setItem("sliders",JSON.stringify(sliders))
      localStorage.setItem("deg",deg)
    }
  }, [sliders,deg,bgType])
  
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
    const color = "#" + new Array(3).fill(3).map(() => {
      const hex = Math.floor((Math.random() * 100)).toString(16)
      return hex.length === 1 ? "0" + hex : hex
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
      <Item colSpan="4">
          <Box  w='100%' h='20px' borderRadius="3px" border="lightgray solid 1px" background={`linear-gradient(to right ${gradientColors()})`} 
            onClick={(event) => console.log(event)}>
          </Box>
          {/* <RenderSliders /> */}
      <div style={{height:0}}>
        {
          sliders.map((e,index)=> (
          <CustomSlider defaultValue={e.value} key={index} index={index} paddingTop="0px" onClick={()=>selectColor(index)} onChange={(value)=>onChange(value,index)}>
          <SliderTrack background="transparent" p="0" >
            <SliderFilledTrack background="transparent" />
          </SliderTrack>
          <ColorSlider value={e.value} bg={e.color}  />
        </CustomSlider>
        ))
        }
      </div>
      </Item>
      <Item colStart={2} colEnd={4}>
          <HexColorPicker color={color.color} onChange={changeColor} style={{width:'100%',maxWidth:'400px',margin:"auto"}}/>
      </Item>
      <Item colSpan={1}>
      <div style={{display: "flex",justifyContent: "space-between",alignItems: "center"}}>
          <Button leftIcon={<FaPlus />} onClick={addSlider}>
            Add Color
          </Button>
          <CircularSlider width={60} dataIndex={deg} knobSize={30} valueFontSize={20} label="*" trackSize={10} onChange={(value) => setDeg(value)}/>
      </div>
        {sliders.map((e,index)=>(
          <ColorItem onClick={()=>selectColor(index)} key={index} selected={index == color.id }>
            <Box w="40px" h="40px" borderRadius="5px" background={e.color}/>
            <Text fontWeight="bold" fontSize="1.2rem" p="0 10px">
              {e.value}%
            </Text>
            <Input type="text" value={e.color} readOnly bg="white" w="100px" />
            <Button disabled={sliders.length === 2} onClick={(e)=>removeSlider(e,index)} size="xs" h="24px" w="24px" left="17px" bottom="22px" borderRadius="50%" colorScheme="red">
              <FaTimes size={12} />
            </Button>
          </ColorItem>
        ))}
      </Item>
    </>
  )
}

export default GradientSlider