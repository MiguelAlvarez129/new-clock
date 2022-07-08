import React, {useState,useEffect} from 'react'
import {FaPause, FaPlay, FaStop, FaFlag} from "react-icons/fa"
import { Flex, Text, Button, VStack, StackDivider, Box, chakra} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ButtonBar } from '../../shared/styles';
import { selectFontColor, selectFontFamily } from '../../redux/reducers/bgReducer'
import { motion, AnimatePresence } from 'framer-motion';



const StopWatch = () => {
  const fontFamily = useSelector(selectFontFamily)
  const color = useSelector(selectFontColor)
  const [time,setTime] = useState(0)
  const [running,setRunning] = useState(false)
  const [list,setList] = useState([])
  useEffect(()=>{
    let interval;
    if (running){
      interval = setInterval(()=>{
        setTime(time => time + 10 )
      },10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  },[running])

  const reset = () =>{
    setRunning(false)
    setTime(0)    
    setList([])
  }   

  const saveTime = () =>{
    const entry = ("0" + Math.floor((time / 60000) % 60)).slice(-2) + ':' + ("0" + Math.floor((time / 1000) % 60)).slice(-2) + '.' + ("0" + (time / 10) % 100).slice(-2)  
    const diff = list.length ? time - list[0].time : time 
    const id = list.length+1
    const entryDiff = ("0" + Math.floor((diff / 60000) % 60)).slice(-2) + ':' + ("0" + Math.floor((diff / 1000) % 60)).slice(-2) + '.' + ("0" + (diff / 10) % 100).slice(-2)  
    setList([{time,entry,entryDiff,id},...list].sort((a,b)=> a.id - b.id))
  }

  return (
    <VStack h="100%" direction={'column'} justify={list.length ? "flex-start" : 'center'}>
      <Flex fontFamily={fontFamily} color={color}>
        <Text fontSize={70} w={100}>
      {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
        </Text> 
        <Text fontSize={70} >
        :
        </Text>
        <Text fontSize={70}  w={100}>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </Text>
        <Text fontSize={70} >
        .
        </Text>
        <Text fontSize={70} w={100}> 
          {("0" + (time / 10) % 100).slice(-2)}

        </Text>


      </Flex>
      <ButtonBar>
        {!running && !!time && 
        <Button onClick={reset} borderRadius={'50%'} h={12} w={12}>
          <FaStop />
        </Button>}
        {!running && 
        <Button onClick={()=> setRunning(true)} borderRadius={'50%'} h={12} w={12} >
          <FaPlay />
        </Button>}
      
        {running && time &&
        (<>
        <Button onClick={()=> setRunning(false)} borderRadius={'50%'} h={12} w={12}>
        <FaPause />
        </Button>
        <Button borderRadius={'50%'} h={12} w={12} onClick={saveTime}>
        <FaFlag />
        </Button>
        </>
      )}
        
      </ButtonBar>
      <AnimatePresence>

      { !!list.length &&
        (

       <motion.div style={{width:'100%'}}
       key="stack"
       initial={{ opacity: 0 , height: 0 }}
       animate={{ opacity: 1 , height:'fit-content'}}
       exit={{ opacity: 0 , height: 0}}>
         <VStack
          divider={<StackDivider borderColor='black'/>}
          spacing={2}
          align='stretch'
          maxH={'60vh'}
          w={'100%'}
          overflowY={'auto'}
          p={'10px'}
          bg={'blackAlpha.500'}
          color={'gray.400'}
          borderRadius={'4px'}
        >
          {
            list.map(({entry,entryDiff,id},i)=> 
            <Flex justify={'space-around'} key={i}>
              <Box>
              {id}
              </Box>
              <Box>
             + {entryDiff}  
              </Box> 
              <Box>
              {entry}  
              </Box> 
            </Flex>)
          }
        </VStack>
       </motion.div>
        )
      }
      </AnimatePresence>
  </VStack>
  )
}

export default StopWatch