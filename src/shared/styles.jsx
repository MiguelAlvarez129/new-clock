import styled from 'styled-components'
import clock from '../assets/images/clock.png'
import {Text, SliderThumb, Slider, GridItem, Alert} from "@chakra-ui/react"

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
  background:${props => !props.isOver ? 'transparent' : 'lightgray'};
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Row = styled.div`
  display:flex;
  height:33.33%;
  
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
  height: fit-content;
  padding:10px;
  ${props => 'background:'+ props.bg }
`

const Input = styled.input`
 cursor: pointer;
  &[type='color'] {
    width:100%;
    height:100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0000001A;
    transform: scale(1.5);
}
`

const ColorContainer = styled.div`
    width:30px;
    height:30px;
    overflow: hidden;
    border-radius:100%;
`

export const ColorPicker = (props) => (  
<ColorContainer>
  <Input {...props}/>
</ColorContainer>)

export const ColorSlider = styled(SliderThumb)`
  height:35px !important;
  border-radius:3px !important;
  border:lightgray solid 1px !important;
  &:after{
    height: 35px;
    width: 40px;
    content: '${props => props.value}%';
    background: lightgray;
    border-radius: 3px;
    clip-path: polygon(50% 0%,65% 25%,100% 25%,100% 100%,0 100%,0 25%,35% 25%);
    position: absolute;
    top: 37px;
    text-align:center;
    padding-top:10px;
    font-weight:bold;

  }
`

export const CustomSlider = styled(Slider)`
  padding: 0px !important;
  top: ${props => props.index * -24 - 26}px;
  display:block;
  position:absolute;
`

export const ColorItem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:5px;
  margin:10px 5px;
  border-radius:5px;
  border-width:2px;
  border-style:solid;
  cursor:pointer;
  border-color:${props => props.selected ? "dodgerblue" : "lightgray"};
  background:${props => props.selected ? "lightblue" : "#eeeeee"};
  transition: background .5s, border-color .5s;

`

export const Item = styled(GridItem)`
  padding: 10px;
  background:white;
  border-radius:5px;
  height:fit-content;
`
export const CustomAlert = styled(Alert)`
  position:fixed !important;
  left: calc(50% - 150px);
  width: 300px !important;
  border-radius: 4px;
  top: 10px;
  justify-content:center;
  background: rgb(195 244 255 / 80%) !important;
  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 3s;
  /* animation: appear 6s initial;

@keyframes appear{
  0% { opacity:0}
  50% { opacity:1}
  100% { opacity:0}
} */
`