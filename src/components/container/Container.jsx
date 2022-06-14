import React, { useRef, useEffect } from 'react'
import {Routes,Route} from 'react-router-dom'
import ClockContainer  from '../clock-container/ClockContainer'
import CenterContainer from '../center-container/CenterContainer'
import Timer from '../timer/Timer'
import StopWatch from '../stopwatch/StopWatch'
const Container = ({refValue}) => {
  // const ref = useRef(null)
  // useEffect(() => {

  //   const observer = new IntersectionObserver(callback,{threshold:0.9})
  //   observer.observe(ref.current)
   
  // }, []);

  // const callback = (entries, observer) =>{
  //   const [ entry ] = entries;
  //   if (!entry.isIntersecting){
  //     console.log(true)
  //   }
  // }
  return (
    <Routes>
      <Route path="/" element={<ClockContainer refValue={refValue}/>}/>
      <Route path="/stopwatch" element={<CenterContainer element={<StopWatch/>}/>}/>
      <Route path="/timer" element={<CenterContainer element={<Timer/>}/>}/>
    </Routes>
  )
}

export default Container