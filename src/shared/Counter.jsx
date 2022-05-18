import React, {useState,useEffect, useRef} from 'react'
import {Button, Text} from '@chakra-ui/react'
import {TriangleDownIcon,TriangleUpIcon} from '@chakra-ui/icons'
import {useDispatch} from 'react-redux'
import { Numbers } from './styles'

const Counter = ({title,value,action,secondsLeft }) => {
  const dispatch = useDispatch()
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
      return valuer+1 > 9 ? `${valuel + 1}${0}` : `${valuel}${valuer+1}` 
    }


  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} > 
        <Text fontSize={'3xl'} className="b-transition" style={secondsLeft ? {opacity:0,height:"none"} : {opacity:1}}>
          {title}
        </Text>
        <Button className="b-transition" style={secondsLeft ? {opacity:0,height:"none"} : {opacity:1}} size="lg" variant='ghost' ref={ref} onClick={()=>changeValue(1)} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
          <TriangleUpIcon/>
        </Button>
          {/* <Text fontSize={'4xl'} color="#555555" >
          {upperNumber()}
          </Text> */}
        <div>
        <div>
          <Numbers>
            { secondsLeft && value <= 9 ? "0" + value : secondsLeft && value ? value : valuel + "" + valuer}
          </Numbers>
        </div>
        </div>
        <Button className="b-transition" style={secondsLeft ? {opacity:0,height:"none"} : {opacity:1}}  size="lg" variant='ghost' onClick={()=>changeValue(-1)}>
          <TriangleDownIcon/>
        </Button>
    </div>
  )
}

export default Counter