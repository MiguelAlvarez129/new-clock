import React from 'react'
import { Center } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectBgColor } from '../../redux/reducers/bgReducer'
const CenterContainer = ({element}) => {
  const backgroundColor = useSelector(selectBgColor)
  return (
    <Center height="100vh" backgroundColor={backgroundColor} >
     {element}
    </Center>
  )
}

export default CenterContainer