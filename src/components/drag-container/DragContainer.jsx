import React from 'react'
import {useDrag} from 'react-dnd'
import { useLocation } from 'react-router-dom'
import { DragDiv } from '../../shared/styles'
import Clock from '../clock/Clock'
import Timer from '../timer/Timer'

const DragContainer = () => {
  const [{isDragging},drag] = useDrag(()=>({
    type:"clock",
    collect:(monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} style={{height:"100%",width:"100%"}} >
      <Clock isDragging/>
    </div>

  )
}

export default DragContainer