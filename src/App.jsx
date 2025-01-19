import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './components/Cart'
import Pizza from './components/Pizza'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      {/*<Login /> */}
      {/* <Register /> */}
      {/*<Home />*/}
      {/*<Cart />*/}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
