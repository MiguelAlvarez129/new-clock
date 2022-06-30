import './App.css'
import React,{useEffect,useRef, useState} from 'react'
import NavBar from './components/navbar/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Container from './components/container/Container'
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { AlertTitle } from '@chakra-ui/react'
import { CustomAlert } from './shared/styles'

const App = () => {
  const [show,setShow] = useState(false)
  // const [id,setId] = useState(false)
  // const ref = useRef(null)
  // const id = useRef(0)
  // useEffect(() => {
  //   const observer = new IntersectionObserver(callback,{threshold:0.9})
  //   console.log(ref,observer )
  //   observer.observe(ref.current)
    
  // }, []);
  
  // const callback = (entries, observer) =>{
  //   const [ entry ] = entries;
  //   if (!entry.isIntersecting){ 
  //     setShow(true)
  //     id.current = setTimeout(() => {
  //       setShow(false)
  //     }, 3000);
  //   } else {
  //     if (id.current){
  //       clearTimeout(id.current)
  //     }
  //     setShow(false)
  //     // setId(false)
  //   }
  // }
    
  // const scrollToCenter = () =>{
  //   ref.current.scrollIntoView()
  // }

  return (
  <Provider store={store}>

    {/* <CustomAlert status="info"  onClick={scrollToCenter} $show={show}>
      <AlertTitle>
        Click here to center the screen
      </AlertTitle>
    </CustomAlert> */}
    
    <Router>
      <NavBar/>
      <Container  />
      <Footer/>
    </Router>
  </Provider>
  
  ) 
}

export default App
