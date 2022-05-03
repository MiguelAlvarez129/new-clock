import React, {useState,useEffect} from 'react'
import { DropableContainer } from '../../shared/styles'
import {useDrop} from 'react-dnd'
import DragContainer from '../drag-container/DragContainer'
function DropContainer({setStartPosition,startPosition}) {
  const [show,setShow] = useState(false)
  const [{isOver, didDrop},drop] = useDrop(()=>({
    accept:'clock',
    drop: () => {
      setShow(true)
      console.log(isOver)
    },
    collect:(monitor)=> ({
      isOver: monitor.isOver(),
      didDrop:monitor.didDrop()
    })
  }))

  useEffect(() => {
    if (didDrop){
      setShow(true)
    }
    if (startPosition){
      setShow(true)
      setStartPosition(false);
    } 
    return () => {
     setShow(false)
    };
  }, [didDrop])
  return (
    <DropableContainer ref={drop} isOver={isOver} >
      {show && <DragContainer/>} 
    </DropableContainer>
  )
}

export default DropContainer