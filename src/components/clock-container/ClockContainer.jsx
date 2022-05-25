import React, {useState} from 'react'
import { Row } from '../../shared/styles'
import { useSelector } from 'react-redux'
import { selectBgColor } from '../../redux/reducers/bgReducer'
import DropContainer from '../drop-container/DropContainer'
const ClockContainer = ({type}) => {  
  const [startPosition,setStartPosition] = useState(true)
  const background = useSelector(selectBgColor)

  return (
    <div style={{height:'100vh',borderBottom:'1px solid lightgray',background}}>
      
      {Array(3).fill('').map((e,i)=>{
        return (
          <Row key={i}>
          {Array(3).fill('').map((j,y)=>{
            return (
        
              <DropContainer onDoubleClick={()=>setDouble(!double)} startPosition={i===1 && y===1 && startPosition? true : false} setStartPosition={setStartPosition}/>
      
            )
           })}
        </Row>
        )
      })}
    </div>
  )
}

export default ClockContainer