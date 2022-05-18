import React, {useState, useEffect} from 'react'
import {FaPause, FaPlay, FaStop} from "react-icons/fa"
import { useTimer } from 'react-timer-hook'
import { Button, Flex } from '@chakra-ui/react'
import Counter from '../../shared/Counter'
import {useSelector} from 'react-redux'
import { ButtonBar, Numbers } from '../../shared/styles'
import { selectMinutes, selectSeconds, selectHours, setMinutes, setSeconds, setHours } from '../../redux/reducers/timerReducer'

const Timer = () => {
  const seconds1 = useSelector(selectSeconds)
  const minutes1 = useSelector(selectMinutes)
  const hours1 = useSelector(selectHours)
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
        <Counter title="Hours" secondsLeft={timeOut} value={hours} action={setHours}/>
        <Numbers marginTop="32px">
          :
        </Numbers>
        <Counter title="Minutes" secondsLeft={timeOut} value={minutes} action={setMinutes} />
        <Numbers marginTop="32px">
          :
        </Numbers>
        <Counter title="Seconds" secondsLeft={timeOut} value={seconds} action={setSeconds}/>
      </Flex>
      <ButtonBar>
        {
          !isRunning ?
          <Button  onClick={timeOut ? resume : startTimer} >
           <FaPlay/>
          </Button>
        :
        <>
          <Button onClick={pause}>
            <FaPause/>
          </Button>
          <Button onClick={stop}>
            <FaStop/>
          </Button>
        </>
        }
      </ButtonBar>
     
    </div>
  )
}

export default Timer