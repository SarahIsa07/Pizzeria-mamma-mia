import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './components/NotFound';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/pizza" element={<Pizza />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
