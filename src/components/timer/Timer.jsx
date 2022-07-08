import React, {useState, useEffect} from 'react'
import {FaPause, FaPlay, FaStop} from "react-icons/fa"
import { useTimer } from 'react-timer-hook'
import { Button, Flex, Box, useBreakpointValue } from '@chakra-ui/react'
import Counter from '../../shared/Counter'
import {useSelector} from 'react-redux'
import { ButtonBar, Numbers } from '../../shared/styles'
import { selectMinutes, selectSeconds, selectHours, setMinutes, setSeconds, setHours } from '../../redux/reducers/timerReducer'
import { selectFontColor, selectFontFamily } from '../../redux/reducers/bgReducer' 

const Timer = () => {
  const seconds1 = useSelector(selectSeconds)
  const minutes1 = useSelector(selectMinutes)
  const hours1 = useSelector(selectHours)
  const fontFamily = useSelector(selectFontFamily)
  const fontColor = useSelector(selectFontColor)
  const date =new Date()
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp: date, onExpire: () => console.warn('onExpire called'), autoStart: false,});

  const translateValue = useBreakpointValue({ base: '0px', sm: '50px' })
  const startTimer = () =>{
    const date = new Date()
    date.setSeconds(date.getSeconds() + seconds1 + minutes1 + hours1)
    restart(date)
  }

  const stop = () =>{
    const date = new Date()
    date.setSeconds(0)
    restart(date)

  }
  const timeOut = !!hours || !!minutes || !!seconds

  return ( 
    <div>
      <Flex direction="row" alignItems="center">
        {/* {hours}
        {minutes}
        {seconds} */} 
        <Counter title="Hours" secondsLeft={timeOut} value={hours} action={setHours} transform={ !isRunning && `translate(-${translateValue},0px)`}/>
        <Numbers marginTop="32px"  color={fontColor} fontFamily={fontFamily}>
        {isRunning ? ":" : (<Box h={"200px"} w={"2px"} bg="#00000066" m={"0 10px"} />) } 
        </Numbers>
        <Counter title="Minutes" secondsLeft={timeOut} value={minutes} action={setMinutes} />
        <Numbers marginTop="32px"   color={fontColor} fontFamily={fontFamily}>
          {isRunning ? ":" : (<Box h={"200px"} w={"2px"} bg="#00000066" m={"0 10px"}/>) } 
        </Numbers>
        <Counter title="Seconds" secondsLeft={timeOut} value={seconds} action={setSeconds} transform={ !isRunning && `translate(${translateValue},0px)`}/>
      </Flex>
      <ButtonBar>
        {
          !isRunning ?
          <Button  onClick={timeOut ? resume : startTimer} borderRadius={'50%'} h={12} w={12}   >
           <FaPlay/>
          </Button>
        :
        <>
          <Button onClick={pause} borderRadius={'50%'} h={12} w={12}  >
            <FaPause/>
          </Button>
          <Button onClick={stop} borderRadius={'50%'} h={12} w={12}  >
            <FaStop/>
          </Button>
        </>
        }
      </ButtonBar>
     
    </div>
  )
}

export default Timer