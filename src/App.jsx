import './App.css';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './components/NotFound';
import CartProvider from './components/context/CartContext';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { UserContext } from './components/context/UserContext';



function App() {


  const { token } = useContext(UserContext);

  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token === null ? <Login /> : <Navigate to="/profile" />} />
          <Route path="/register" element={token === null ? <Register /> : <Navigate to="/" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizza />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
