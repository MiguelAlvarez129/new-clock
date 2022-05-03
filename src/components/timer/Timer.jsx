import React, {useState, useEffect} from 'react'
import { Divider, Input } from '@chakra-ui/react'
import { useTimer } from 'react-timer-hook'
import {TriangleUpIcon, TriangleDownIcon} from '@chakra-ui/icons'
import { Button, Flex } from '@chakra-ui/react'
import Counter from '../../shared/Counter'
import {useSelector} from 'react-redux'
import { selectMinutes, selectSeconds, setMinutes, setSeconds } from '../../redux/reducers/timerReducer'

const Timer = () => {
  const seconds1 = useSelector(selectSeconds)
  const minutes1 = useSelector(selectMinutes)
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
  } = useTimer({ expiryTimestamp: date, onExpire: () => console.warn('onExpire called'), autoStart: false});


  const startTimer = () =>{
    const date = new Date()
    
    // console.log(timer)
    date.setSeconds(date.getSeconds() + seconds1 + minutes1)
    // setTimer(date)
    restart(date)
  }

  return ( 
    <div>
      <Flex direction="row" >
        {/* <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 
        <Button size="sm">
          <TriangleUpIcon/>
        </Button>
        <Input size="lg" fontSize={'4xl'} width="2.1ch" padding={'10px'} value={0} color="#555555" onChange={onChange} readOnly/>
        <Button size="sm" >
          <TriangleDownIcon/>
        </Button>
        </div> */}
        {minutes}
        {seconds}
        <Counter isRunning={!!seconds} value={minutes} action={setMinutes}/>
        <Counter isRunning={!!seconds} value={minutes} action={setMinutes} />
        <Counter isRunning={!!seconds} value={seconds} action={setSeconds}/>
        {/* <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 
          <Button size="lg"  disabled={isRunning} onClick={()=>changeValue(1)}>
            <TriangleUpIcon/>
          </Button>
          <div>
          <Input size="lg" fontSize={'4xl'} width="2.1ch" padding={'10px'} value={valuel} color="#555555" readOnly />
          <Input size="lg" fontSize={'4xl'} width="2.1ch" padding={'10px'} value={valuer} color="#555555" onChange={onChange} readOnly/>
          </div>
          <Button size="lg" disabled={isRunning} onClick={()=>changeValue(-1)}>
            <TriangleDownIcon/>
          </Button>
        </div>
        <Button onClick={startTimer} >
        start
        </Button>
        <Button onClick={pause} disabled={!isRunning}>
        pause
        </Button> */}
      </Flex>
      <div>
        <Button onClick={startTimer}>
          start
        </Button>
        <Button  onClick={resume}>
          resume
        </Button>
        <Button onClick={pause}>
          pause
        </Button>
      </div>
    </div>
  )
}

export default Timer