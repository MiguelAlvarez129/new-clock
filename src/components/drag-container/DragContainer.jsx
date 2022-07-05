import React from 'react'
import {useDrag} from 'react-dnd'
import Clock from '../clock/Clock'


const DragContainer = () => {
  const [{isDragging},drag] = useDrag(()=>({
    type:"clock",
    collect:(monitor)=> ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} style={{height:"100%",width:"100%"}} >
      <Clock isDragging />
    </div>

  )
}

export default DragContainer