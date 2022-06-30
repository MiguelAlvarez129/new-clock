import React from 'react'
import { Center } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectBgColor } from '../../redux/reducers/bgReducer'
const CenterContainer = ({element,refValue}) => {
  const backgroundColor = useSelector(selectBgColor)
  return (
    <div ref={refValue} style= {{height:"100vh",background:backgroundColor,justifyContent:"center",alignItems:"center",display:"flex"}} >
     {element}
    </div>
  )
}

export default CenterContainer