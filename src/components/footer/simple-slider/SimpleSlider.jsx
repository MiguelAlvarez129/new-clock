import React,{useState, useEffect} from 'react'
import { Item} from '../../../shared/styles'
import { useDispatch, useSelector} from 'react-redux'
import { setBgColor, selectBgColor } from '../../../redux/reducers/bgReducer'
import { RgbStringColorPicker} from "react-colorful"
import RgbInput from './rgb-input/RgbInput'



const SimpleSlider = ({bgType}) => {
  const dispatch = useDispatch()
  // const color = useSelector(selectBgColor)
  const [color,setColor] = useState(localStorage.getItem("simpleColor") || "rgb(0,0,0)")

  useEffect(() => {
    dispatch(setBgColor(color))
    return () =>{
      localStorage.setItem("simpleColor",color)
    }
  }, [bgType,color]);

  return (
  <>
    <Item  colStart={2} colEnd={4} >
    <RgbStringColorPicker color={color} onChange={(e)=> setColor(e) } style={{width:'100%',maxWidth:'400px',margin:'auto'}}/>
  </Item>
  <Item colStart={4} colEnd={5}>
  
    <div>
      <RgbInput />  
    </div>
    </Item>
  </>
  )
}

export default SimpleSlider