import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ClockContainer  from '../clock-container/ClockContainer'
import CenterContainer from '../center-container/CenterContainer'
import Timer from '../timer/Timer'
import StopWatch from '../stopwatch/StopWatch'
const Container = () => {
  return (
    <div style={{height:"100vh"}}>
    <Routes>
      <Route path="/" element={<ClockContainer/>}/>
      <Route path="/stopwatch" element={<CenterContainer element={<StopWatch/>}/>}/>
      <Route path="/timer" element={<CenterContainer element={<Timer/>}/>}/>
    </Routes>
    </div>
  )
}

export default Container