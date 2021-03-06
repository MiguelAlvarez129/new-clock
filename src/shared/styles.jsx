import styled from 'styled-components'
import clock from '../assets/images/clock.png'
import draggif from '../assets/images/dragndrop.gif'
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
  color:${props => props.color};
  font-family:${props => props.fontFamily};
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
  margin: 0 auto; 
  height:70px;
  & > Button {
    margin:10px
  }
`

export const Numbers = styled(Text)`
  margin-top: ${props => props.marginTop};
  font-weight:bold;
  font-size: ${props => props.small ? '30px' : '70px'};
  font-family: ${props => props.fontFamily};
  color: ${props => props.color};

  /* &:after{
    opacity:0.5;
    display:block;
    transform:scale(0.7);
   content:'${props => props.after}';
  }
  &:before{
    opacity:0.5;
    display:block;
    transform:scale(0.7);
   content:'${props => props.before}';
  } */
`

export const FooterContainer = styled.div`
  width:100%;
  height: fit-content;
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

export const ColorItem = styled(GridItem)`
  // display:flex;
  // justify-content:space-between;
  // align-items:center;
  padding:5px;

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
  border-radius:2px;
  height:fit-content;
`
export const CustomAlert = styled(Alert)`
  position:fixed !important;
  left: calc(50% - 150px);
  width: 300px !important;
  border-radius: 4px;
  top: 10px;
  justify-content:center;
  background: rgb(195 244 255 / 90%) !important;
  opacity: ${props => props.$show ? 1 : 0};
  z-index: ${props => props.$show ? 10 : -1};
  /* animation: appear 3s ${props => props.$show ? 'backwards' : 'forwards'}; */
  cursor: pointer;
  transition: opacity 3s, z-index 6s;

  

@keyframes appear{
  0% { opacity:0}
  100% {opacity:1}
}

`
export const DragSign = styled.div`
  position:fixed !important;
  height: 329px;
  top: 100px;
  left: calc(50% - 300px);
  z-index: 1000;
  width: 600px !important;
  background-color: #f5f5dcb5 !important;
  flex-direction:column ;
  animation: appear 1s;
  padding: 10px;
  align-items: center;
  display: flex;
`

export const DragImg = styled.div`
  background-image:url(${draggif});
  height: 100%;
  display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin: 10px ;


`