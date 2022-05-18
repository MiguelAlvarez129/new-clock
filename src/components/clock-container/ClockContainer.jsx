import React, {useState} from 'react'
import { Row } from '../../shared/styles'
import Clock from '../clock/Clock'
import DropContainer from '../drop-container/DropContainer'
const ClockContainer = ({type}) => {  
  const [startPosition,setStartPosition] = useState(true)

  
  return (
    <div className='container-fluid' style={{height:'100vh'}}>
      
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