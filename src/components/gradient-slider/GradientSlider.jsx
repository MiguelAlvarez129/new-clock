import React, {useState, useEffect} from 'react'
import {  Box, GridItem, SliderTrack, SliderFilledTrack, Slider, Button, SimpleGrid, Badge} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { ColorSlider, ColorPicker } from '../../shared/styles'
import {RgbaStringColorPicker} from 'react-colorful'
import { setBgColor } from '../../redux/reducers/bgReducer'
import {useDispatch} from 'react-redux'
const GradientSlider = () => {
  const [sliders, setSliders] = useState([{color:'#FA8072',value:"0",id:1}, {color:'#123245',value:"10",id:2}])
  const [value,setValue] = useState(0)
  const dispatch = useDispatch()
  const addSlider = () =>{
    setSliders([...sliders,{color:'#00FA00',value:"20"}])
  }

  useEffect(() => {
    const bg = gradientBg()
    dispatch(setBgColor(bg))
  }, [sliders])
  const [bg,setBg] = useState("")
    const changeColor = (event,index) =>{
      const {value} = event.target;
      setSliders(sliders.map((e,i)=> i === index ? {...e,color:value}: {...e}))
    }
    const SlidersList = () =>{
      return (
        <SimpleGrid columns="1">
          {sliders.map((e,index)=>(
            <Box maxW='sm' w="100px" h="50px" m="2px auto" borderWidth='1px' borderRadius='lg'>
              <Box display="flex" alignItems="center" justifyContent="space-around">
                <Badge size="lg" colorScheme='green' height="fit-content">
                  {e.value} %
                </Badge>
                <ColorPicker type="color" value={e.color} onChange={(event) => changeColor(event,index)}/>
              </Box>
              <span>
                {e.color}
              </span>
              {/* <Box background={e.color} height="40px" width="40px" borderRadius='lg' /> */}
            </Box>
          ))}
        </SimpleGrid>
    )
  }

  const onChange = (value,index) =>{
    setSliders(sliders.map((e,i)=> i === index ? {...e,value}: {...e}))
  }
  
  const gradientBg = () => {

    const bg = sliders.map(e => e).sort((a,b)=> a.value - b.value).reduce((acc,{color,value})=> acc.concat(` , ${color + ' ' + value + '%'}`),'')
    return `linear-gradient(to right ${bg} )`
  }

  return (
    <>
      <GridItem colSpan="4">
          <Box  w='100%' h='20px' borderRadius="3px" background={gradientBg()} 
            onClick={(event) => console.log(event)}>
          </Box>
          {/* <RenderSliders /> */}
          <div>
        {
          sliders.map((e,index)=> (
          <Slider defaultValue={0}  key={index}  onChange={(value)=>onChange(value,index)} position="absolute" top="0px">
          <SliderTrack background="transparent"  >
            <SliderFilledTrack background="transparent" />
          </SliderTrack>
          <ColorSlider value={e.value} bg='tomato'  />
        </Slider>
        ))
        }
          </div>
          <Button onClick={addSlider}>
            <FaPlus />
          </Button>
        </GridItem>
        <GridItem colStart={2} colEnd={3}>


          {/* <SlidersList/> */}
           <SimpleGrid columns="1">
          {sliders.map((e,index)=>(
            <Box maxW='sm' w="100px" h="50px" m="2px auto" borderWidth='1px' borderRadius='sm' my="3px">
              <Box display="flex" alignItems="center" justifyContent="space-around">
                <Badge size="lg" colorScheme='green' height="fit-content">
                  {e.value} %
                </Badge>
                <ColorPicker type="color" value={e.color} onChange={(event) => changeColor(event,index)}/>
              </Box>
              <Badge colorScheme='gray' textAlign="center" display="block">
                {e.color}
              </Badge>
              {/* <Box background={e.color} height="40px" width="40px" borderRadius='lg' /> */}
            </Box>
          ))}
        </SimpleGrid>


        </GridItem>
        <GridItem colSpan={2}>
          <RgbaStringColorPicker style={{width:'100%',maxWidth:'400px',margin:'auto'}}/>
        </GridItem>
    </>
  )
}

export default GradientSlider