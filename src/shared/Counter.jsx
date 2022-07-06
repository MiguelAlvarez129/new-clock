import React, {useState,useEffect, useRef} from 'react'
import {Button, Text, Flex, propNames} from '@chakra-ui/react'
import {TriangleDownIcon,TriangleUpIcon} from '@chakra-ui/icons'
import {useDispatch, useSelector} from 'react-redux'
import { Numbers } from './styles'
import { selectFontColor, selectFontFamily } from '../redux/reducers/bgReducer'

const Counter = ({title,value,action,secondsLeft,transform }) => {
  const dispatch = useDispatch()
  const fontFamily = useSelector(selectFontFamily)
  const fontColor = useSelector(selectFontColor)
  const [valuel, setValuel] = useState(0) 
  const [valuer, setValuer] = useState(0) 
  const [id,setId] = useState(0)
  const ref = useRef("")
  useEffect(() => {
    dispatch(action(valuel * 10 + valuer))
  }, [valuel,valuer])


  const changeValue = (number) =>{
 
    switch (true) {
      case number + valuer > 9:
        setValuer(0)
        setValuel(value => ++value > 5 ? 0 : value++)
        break;
      case number + valuer < 0:
        setValuer(9)
        setValuel(value => --value < 0 ? 5 : value--)
        break;
      default:
        setValuer(value => value + number)
    }
  }

  const shouldClick = () =>{
    if (id) {
      setId(0)
      return false
    } else {
      return true
    }
  }
  const numbersOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  const onMouseDown = (event) =>{
    let id = setInterval(() => {
      ref.current.click()
    }, 500);
    setId(id)
  }

  const onMouseUp = () =>{
    console.log("Mouse up!")
    clearInterval(id)
  }

  const upperNumber = () =>{
    const value = valuel * 10 + valuer + 1;
    if (value > 59){
      return "00"
    } else if (value < 10){
      return "0" + value
    } else {
      return value
    }
  }

  const lowerNumber = () =>{
    const value = valuel * 10 + valuer - 1;
    if (value < 0){
      return "59"
    } else if (value < 10){
      return "0" + value
    } else {
      return value
    }
  }
  return (
    <Flex direction={'column'} align={"center"} transform={transform} transition={'transform .5s'}> 
        <Text fontSize={{base:"xl",sm:"3xl"}} className="b-transition" style={secondsLeft ? {opacity:0,height:"none"} : {opacity:1}}>
          {title}
        </Text>
        <Button className="b-transition" style={secondsLeft ? {opacity:0,height:"none"} : {opacity:1}}   size="lg" variant='ghost' colorScheme='blackAlpha' ref={ref} onClick={()=>changeValue(1)} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
          <TriangleUpIcon/>
        </Button>
          {/* <Text fontSize={'4xl'} color="#555555" >
          {upperNumber()}
          </Text> */}
          {/* <Numbers>
            {upperNumber()}
          </Numbers> */}
     
        <div>
          <Numbers fontFamily={fontFamily} color={fontColor}>
            { secondsLeft && value <= 9 ? "0" + value : secondsLeft && value ? value : valuel + "" + valuer}
          </Numbers>
        </div>

          {/* <Numbers>
            {lowerNumber()}
          </Numbers> */}
        <Button className="b-transition" style={secondsLeft ? {opacity:0,height:"none"} : {opacity:1}} size="lg" variant='ghost' colorScheme='blackAlpha' onClick={()=>changeValue(-1)}>
          <TriangleDownIcon/>
        </Button>
    </Flex>
  )
}

export default Counter