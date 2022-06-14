import React, {useState, useEffect} from 'react'
import {color, Input, Text} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import {setRgb} from '../redux/reducers/bgReducer'
const ColorInput = ({label,initialValue,index}) => {
  const dispatch = useDispatch()
  const [value,setValue] = useState(initialValue || 0)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue]);

  useEffect(() => {
    dispatch(setRgb({value,index}))
  }, [value]);

  const onChange = (e) =>{
    const {value} = e.target;
    if (value === "" || /[0-9]/g.test(value)) {
      if (value > 255){
        setValue(255)
      } else if (value[0] == 0){
        setValue(value.slice(1,3))
      } else if (!value) {
        setValue(0)
      } else {
        setValue(value)
      }
    }
  }

  return (
    <div>
      <Text fontSize='lg' textAlign="center" fontWeight="bold">{label}</Text>
      <Input id='input' value={value} onChange={onChange} textAlign="center" p="0" w="5ch" maxLength="3"/>
    </div>
  )
}

export default ColorInput