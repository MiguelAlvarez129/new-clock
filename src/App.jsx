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
  return (
  <Provider store={store}>
    <Router>
      <NavBar/>
      <Container  />
      <Footer/>
    </Router>
  </Provider>
  
  ) 
}

export default App
