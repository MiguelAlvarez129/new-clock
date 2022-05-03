import styled from 'styled-components'
import clock from '../assets/images/clock.png'
 export const NavBarContainer = styled.div`
  height: 75px;
  border-bottom:1px solid #e2dcdc;
  background:${props => props.bg};
  position:absolute;
  top:0; 
  width:100%;
  display:flex;
  flex-direction:column;
  transition: background 1s;
  justify-content:space-between;
`

export const ClockLogo = styled.div`
  background-image:url(${clock});
  height:35px;
  width:35px;
  margin:0px auto;
  background-size: cover;
`

export const Container = styled.div`
  height:100vh;
`

export const DragDiv = styled.div`
  border-radius: 5px;
  padding: 4px 10px;
  background: #dceef5b3;
  width: fit-content;
  ${props => props.isDragging && 'opacity:90%'}
`

export const DropableContainer = styled.div`
  height: 100%;
  width: 100%;
  background:${props => !props.isOver ? 'lightblue' : 'lightgray'};
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Row = styled.div`
  display:flex;
  height:33%;
  
`