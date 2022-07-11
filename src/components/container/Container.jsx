import React, { useRef, useEffect, useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import ClockContainer  from '../clock-container/ClockContainer'
import CenterContainer from '../center-container/CenterContainer'
import Timer from '../timer/Timer'
import StopWatch from '../stopwatch/StopWatch'
import { AlertTitle, useDisclosure, Button, Alert, Flex, Center } from '@chakra-ui/react'
import { DragImg } from '../../shared/styles'
import { motion, AnimatePresence } from 'framer-motion';
const Container = () => {

  const {
    isOpen: isVisible,
    onOpen,
    onClose,
  } = useDisclosure({ defaultIsOpen: false })
  
  const [show,setShow] = useState(false)
  const [hide,setHide] = useState(false)
  const ref = useRef(null)
  const id = useRef(0)
  const location = useLocation()
  useEffect(() => {
    const observer = new IntersectionObserver(callback,{threshold:0.9})
    observer.observe(ref.current)
    
  }, [location.pathname]);
  
  const callback = (entries, observer) =>{
    const [ entry ] = entries;
    if (!entry.isIntersecting){ 
      setShow(true)
      id.current = setTimeout(() => {
        setShow(false)
      }, 4000);
    } else {
      if (id.current){
        clearTimeout(id.current)
      }
      setShow(false)
      if (location.pathname === '/' && !hide) {
        onOpen()
      }
    }
  }
    
  const scrollToCenter = () =>{
    ref.current.scrollIntoView()
  }

  const close = () =>{
    setHide(true)
    onClose()
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

    <AnimatePresence style={{width:'100%'}}  >
    { isVisible && !hide && 
    <motion.div key="drag" 
    initial={{ opacity: 0 , }}
    animate={{ opacity: 1,}}
    exit={{ opacity: 0 , }}>
      <Center w="100%" position={"fixed"} zIndex={10}>
        <Alert 
        bg={'blackAlpha.600'}
        color={'gray.100'}
        borderRadius={'4px'}
        w={'min(600px,70%)'}
        h={'350px'}
        zIndex={100}>
          
          <Flex direction={'column'} align={"center"} h={'100%'} w={'100%'}>
          <b>
            You can click and drag the clock to a different place
          </b>
          <DragImg />
          <Button colorScheme='teal'  onClick={close}>
            Understood!
          </Button>
          </Flex>
        </Alert> 
      </Center>
    </motion.div> 
    } 
    </AnimatePresence>
    <Routes>
      <Route path="/" element={<ClockContainer refValue={ref}/>}/>
      <Route path="/stopwatch" element={<CenterContainer  refValue={ref} element={<StopWatch/>}/>}/>
      <Route path="/timer" element={<CenterContainer  refValue={ref} element={<Timer/>}/>}/>
    </Routes>
    </>
  )
}

export default Container
