import React, { useRef, useEffect, useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import ClockContainer  from '../clock-container/ClockContainer'
import CenterContainer from '../center-container/CenterContainer'
import Timer from '../timer/Timer'
import StopWatch from '../stopwatch/StopWatch'
import { AlertTitle, useDisclosure, Button, Alert } from '@chakra-ui/react'
import { CustomAlert, DragSign,DragImg } from '../../shared/styles'
import { motion, AnimatePresence } from 'framer-motion';
const Container = () => {

  const {
    isOpen: isVisible,
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
    
  }, [location.pathname]);
  
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
      if (location.pathname === '/') onOpen()
    }
  }
    
  const scrollToCenter = () =>{
    ref.current.scrollIntoView()
  }

  return (
    <>
    <AnimatePresence style={{width:'100%'}}>
      {show && 
          <motion.div 
          key="stack"
          initial={{ opacity: 0 , }}
          animate={{ opacity: 1,}}
          exit={{ opacity: 0 , }}>
        <Alert status="info" 
      onClick={scrollToCenter} 
      w={"300px"}
      position={'fixed'}
      left={'calc(50% - 150px)'}
      borderRadius={'4px'}
      top={'10px'}
      justifyContent={'center'}
      bg={'blackAlpha.600'}
      color={'gray.100'}
      cursor={'pointer'}
      zIndex={10}
      >
        <AlertTitle>
          Click here to center the screen
        </AlertTitle>
      </Alert>
      </motion.div>}
    </AnimatePresence>

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