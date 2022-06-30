import { Flex, Text, Button} from '@chakra-ui/react';
import React from 'react'
import { useStopwatch } from 'react-timer-hook';
import { ButtonBar, Numbers } from '../../shared/styles';


const StopWatch = () => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  return (
    <div>
    <Flex direction="row" justifyContent="center" alignItems="baseline" fontFamily="Roboto">
      <Numbers fontSize="70px" padding="0 24px">
          { hours <= 9 ? "0" + hours : hours} 
      </Numbers>
      <Text  fontSize="70px" margin="0px 8px">
          :
        </Text>
      <Numbers  fontSize="70px" padding="0 24px">
          { minutes <= 9 ? "0" + minutes : minutes} 
      </Numbers>
      <Text  fontSize="70px" margin="0px 8px">
          :
        </Text>
      <Numbers fontSize="70px" padding="0 24px">
          { seconds <= 9 ? "0" + seconds : seconds}
      </Numbers>
   
    </Flex>
    <ButtonBar>
      <Button onClick={start} disabled={isRunning && !!seconds}>
        {isRunning && !!seconds ? 'Resume' : 'Start'}
      </Button>
      <Button onClick={pause}>
        Pause
      </Button>
      <Button  onClick={()=>reset(null,false)}>
        Reset
      </Button>
    </ButtonBar>
  </div>
  )
}

export default StopWatch