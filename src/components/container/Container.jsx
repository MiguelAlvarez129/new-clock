import React, { useRef, useEffect, useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import ClockContainer  from '../clock-container/ClockContainer'
import CenterContainer from '../center-container/CenterContainer'
import Timer from '../timer/Timer'
import StopWatch from '../stopwatch/StopWatch'
import { AlertTitle, useDisclosure, Button } from '@chakra-ui/react'
import { CustomAlert, DragSign,DragImg } from '../../shared/styles'
const Container = () => {

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  const [show,setShow] = useState(false)
  const ref = useRef(null)
  const id = useRef(0)
  const location = useLocation()
  useEffect(() => {
    const observer = new IntersectionObserver(callback,{threshold:0.9})
    console.log(ref,observer )
    observer.observe(ref.current)
    
  }, [location]);
  
  const callback = (entries, observer) =>{
    const [ entry ] = entries;
    if (!entry.isIntersecting){ 
      setShow(true)
      id.current = setTimeout(() => {
        setShow(false)
      }, 6000);
    } else {
      if (id.current){
        clearTimeout(id.current)
      }
      setShow(false)
      onOpen()
    }
  }
    
  const scrollToCenter = () =>{
    ref.current.scrollIntoView()
  }

  return (
    <>
    <CustomAlert status="info"  onClick={scrollToCenter} $show={show}>
      <AlertTitle>
        Click here to center the screen
      </AlertTitle>
    </CustomAlert>
    {/* { isVisible && <DragSign>
      <b>
        You can click and drag the clock to a different space
      </b>
      <DragImg />
      <Button colorScheme='teal' variant='ghost' onClick={onClose}>
        Understood!
      </Button>
    </DragSign> }  */}
    <Routes>
      <Route path="/" element={<ClockContainer refValue={ref}/>}/>
      <Route path="/stopwatch" element={<CenterContainer  refValue={ref} element={<StopWatch/>}/>}/>
      <Route path="/timer" element={<CenterContainer  refValue={ref} element={<Timer/>}/>}/>
    </Routes>
    </>
  )
}

export default Container