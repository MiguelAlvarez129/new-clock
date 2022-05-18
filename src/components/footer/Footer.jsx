import React,{useState} from 'react'
import { FooterContainer } from '../../shared/styles'

const Footer = () => {
  const [color,setColor] = useState('')
  return (
    <FooterContainer>
      {color}
      {/* <ChromePicker color={color} onChangeComplete={(e)=>setColor(e.hex)} /> */}
      <input type="color" />
    </FooterContainer>
  )
}

export default Footer