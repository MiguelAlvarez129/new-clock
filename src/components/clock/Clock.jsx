import React, {useState,useEffect} from 'react'
import {Text} from '@chakra-ui/react'
import * as dayjs from 'dayjs'

const Clock = () => {
  const [clock,setClock] = useState(dayjs())
  const tick = () => setClock(dayjs())
  useEffect(() => {
    const id = setInterval(() => {
      tick()
    }, 1000);
    return () => {
      console.log("cleared!",id)
      clearInterval(id)
    };
  }, [])

  return (
    <>
    <Text fontSize="4xl">
     {clock.format('ddd MMM YYYY')}
      </Text> 
      <Text fontSize="4xl">
      {clock.format('hh mm ss A')}  
      </Text>
    </> 
  )
}

export default Clock