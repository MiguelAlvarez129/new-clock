import React, {useState,useEffect, useRef} from 'react'
import {Text, Flex} from '@chakra-ui/react'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { DragDiv } from '../../shared/styles'
import { selectFontColor, selectFontFamily } from '../../redux/reducers/bgReducer'
import { useSelector } from 'react-redux'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)
const Clock = ({isDragging}) => {
  const fontFamily = useSelector(selectFontFamily)
  const color = useSelector(selectFontColor)
  const [clock,setClock] = useState(dayjs())
  const [double,setDouble] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const id = setInterval(() => {
      setClock(dayjs())
    }, 1000);
    return () => {
      console.log("cleared!",id)
      clearInterval(id)
    };
  }, [])
  
  useEffect(() => {
    // console.log(window.innerHeight, ref.current.offsetHeight)
    if (double) ref.current.style.transform = `scale(${window.innerHeight/ref.current.offsetHeight - 0.3})`
    else ref.current.style.transform = 'scale(1)'
  }, [window.innerHeight,double])

  return (
    <DragDiv ref={ref} onDoubleClick={()=>setDouble(!double)} isDragging={isDragging} fontFamily={fontFamily} color={color} >
      <Text fontSize="2xl" fontWeight="bold">
      {dayjs.tz.guess().split("/")[1]}
      </Text>
      {dayjs.tz.guess() + ' ' + clock.format('z')}
      
      <Flex justifyContent='center' fontWeight="bold">
        <Text fontSize="70px" >
        {clock.format('hh:mm')}  
        </Text>
      <div>
        <Text fontSize="30px" marginLeft='5px'>
        {clock.format('ss')}  
        </Text>
        <Text fontSize="3xl" marginLeft='5px'>
        {clock.format('A')}  
        </Text>
      </div>
        
      </Flex>
      <Text fontSize="2xl" fontWeight="bold" width="fit-content" margin="auto">
     {clock.format('dddd D,  MMM YYYY')}
      </Text> 
    </DragDiv> 
  )
}

export default Clock
