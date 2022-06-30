import React, {useState,useEffect} from 'react'
import ColorInput from '../../../../shared/ColorInput'
import {useSelector} from 'react-redux'
import {selectBgColor} from '../../../../redux/reducers/bgReducer'
const RgbInput = () => {
  const bg = useSelector(selectBgColor)
  const labels = ['R','G','B']
  let array = bg.split(/\D+/g).filter(e => e)
  useEffect(() => {
    array = bg.split(/\D+/g).filter(e => e)
  }, [bg])
  return (
    <div style={{display:'flex',justifyContent:"space-evenly"}}>
      {array.map((e,index) => 
      (
        <ColorInput key={index} label={labels[index]} initialValue={array[index]} index={index}/>
      ))}
    </div>
  )
}

export default RgbInput