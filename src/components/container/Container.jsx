import React from 'react'
import {Routes,Link,Route} from 'react-router-dom'
import ClockContainer  from '../clock-container/ClockContainer'
const Container = () => {
  return (
    <div style={{height:"100vh",paddingTop:"88px"}}>
    <Routes>
      <Route path="/" element={<ClockContainer/>}/>
      <Route path="/countdown" element={<ClockContainer/>}/>
      <Route path="/timer" element={<ClockContainer/>}/>
    </Routes>
    </div>
  )
}

export default Container