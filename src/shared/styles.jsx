import styled from 'styled-components'
import clock from '../assets/images/clock.png'
import {Text} from "@chakra-ui/react"
 export const NavBarContainer = styled.div`
  height: fit-content;
  border-bottom:1px solid #e2dcdc;
  background:${props => props.bg};
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
  margin:5px;
  border-radius: 5px;
  padding: 4px 10px;
  background: #dceef5b3;
  cursor: pointer;
  transition:transform 0.5s ease;
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

export const ButtonBar = styled.div`
  width: fit-content;
  margin:auto;

  & > Button {
    margin:10px
  }
`

export const Numbers = styled(Text)`
  margin-top: ${props => props.marginTop};
  font-weight:bold;
  font-size: ${props => props.small ? '30px' : '70px'};
`

export const FooterContainer = styled.div`
  width:100%;
  height: 200px;
`