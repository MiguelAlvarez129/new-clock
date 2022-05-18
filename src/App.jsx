import './App.css'
import NavBar from './components/navbar/NavBar'
import {BrowserRouter as Router} from 'react-router-dom'
import Container from './components/container/Container'
import Footer from './components/footer/Footer'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
const App = () => {

  return (
  <Provider store={store}>
    <Router>
      <NavBar/>
      <Container/>
      <Footer/>
    </Router>
  </Provider>
  
  ) 
}

export default App
