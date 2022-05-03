import React, {useState,useEffect} from 'react'
import {Button, Input, Text} from '@chakra-ui/react'
import {TriangleDownIcon,TriangleUpIcon} from '@chakra-ui/icons'
import {useDispatch} from 'react-redux'

const Counter = ({isRunning,value,action}) => {
  const dispatch = useDispatch()
  const [valuel, setValuel] = useState(0) 
  const [valuer, setValuer] = useState(0) 
  const [display,setDisplay] = useState(0)

  useEffect(() => {
    dispatch(action(valuel * 10 + valuer))
  }, [valuel,valuer])

  
  useEffect(()=>{
    if (value !== undefined){
      const array = value.toString().split("")
      if (array.length < 2) array.unshift(0)
      setDisplay(array)
    }
    if (!value){
      setValuel(0)
      setValuer(0)
    }
  },[value])

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
  const numbersOnly = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }
  const onChange = (event) =>{
    const {id,value} = event.target
    if (id == 'left'){
      setValuel(value ? parseInt(value) : '')
    } else {
      setValuer(value ? parseInt(value) : '')
    }
  }

  const upperNumber = () =>{
    const value = valuel * 10 + valuer + 1;
    if (value > 59){
      return "00"
    } else if (value < 10){
      return "0" + value
    } else {
      return valuer+1 > 9 ? `${valuel + 1} ${0}` : `${valuel} ${valuer+1}` 
    }


  }
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}> 

        <Button size="lg" variant='ghost'onClick={()=>changeValue(1)}>
          <TriangleUpIcon/>
        </Button>
          {/* <Text fontSize={'4xl'} color="#555555" >
          {upperNumber()}
          </Text> */}
        <div>
     
        <Input id="left" variant='unstyled'  size="lg" fontSize={'4xl'} width="2.1ch"  padding={'10px'} value={ value || isRunning ? display[0] : valuel  } onChange={onChange} color="#555555"  maxLength={1} />
        <Input id="right" variant='unstyled'  size="lg" fontSize={'4xl'} width="2.1ch"  padding={'10px'} value={value || isRunning ? display[1] : valuer} onChange={onChange} color="#555555" maxLength={1} />
        </div>
        <Text fontSize={'4xl'} color="#555555" >
          {upperNumber()}
          </Text>
        <Button size="lg" variant='ghost' onClick={()=>changeValue(-1)}>
          <TriangleDownIcon/>
        </Button>
    </div>
  )
}

export default Counter