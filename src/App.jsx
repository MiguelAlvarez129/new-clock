import './App.css'
import React,{useEffect,useRef, useState} from 'react'
import NavBar from './components/navbar/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Container from './components/container/Container'
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import { useToast, Box, Alert, AlertIcon, AlertTitle, AlertDescription,} from '@chakra-ui/react'
import { CustomAlert } from './shared/styles'

const App = () => {
  const [show,setShow] = useState(false)
  const [id,setId] = useState(false)
  const ref = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(callback,{threshold:0.9})
    observer.observe(ref.current)
    
  }, []);
  
  const callback = (entries, observer) =>{
    const [ entry ] = entries;
    if (!entry.isIntersecting){ 
      setShow(true)
      const id = setTimeout(() => {
        setShow(false)
        setId(false)
      }, 3000);
      setId(id)
    } else {
      if(id){
        clearTimeout(id)
        console.log('cleared!',id)
      }
      setShow(false)
      setId(false)
    }
    
  }
    
  return (
  <Provider store={store}>

    <CustomAlert status="info"  $show={show}>
      <AlertTitle>
        Click here to center the screen
      </AlertTitle>
    </CustomAlert>
    
    <Router>
      <NavBar/>
      <Container refValue={ref}/>
      <Footer/>
    </Router>
  </Provider>
  
  ) 
}

export default App
