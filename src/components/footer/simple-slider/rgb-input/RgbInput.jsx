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
      {/* <ColorInput label="R" initialValue={array[0]} index={0}/>
      <ColorInput label="G" initialValue={array[1]} index={1}/>
      <ColorInput label="B" initialValue={array[2]} index={2}/> */}
    </div>
  )
}

export default RgbInput