import React from 'react'
import {useDrag} from 'react-dnd'
import { useLocation } from 'react-router-dom'
import { DragDiv } from '../../shared/styles'
import Clock from '../clock/Clock'
import Timer from '../timer/Timer'

const DragContainer = () => {
  const {pathname} = useLocation()
  const [{isDragging},drag] = useDrag(()=>({
    type:"clock",
    collect:(monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  }))
  const clock = () =>{
    switch (pathname) {
      case '/countdown':
        return <p>countdown</p>
      case '/timer':
        return <Timer/>
      default:
        return <Clock/>
    }
    
  }
  return (
    <DragDiv isDragging={isDragging} ref={drag}>
      {clock()}
    </DragDiv>

  )
}

export default DragContainer