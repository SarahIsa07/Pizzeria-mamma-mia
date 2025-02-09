import React, { useContext } from 'react'
import './Navbar.css'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { UserContext } from './context/UserContext';



const Navbar = () => {

  const navigate = useNavigate();

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  const { countCart, setCountCart } = useContext(CartContext);

  const { token, logout } = useContext(UserContext);

  const buttonLogout = () => {
    logout();
    navigate(`/login`)
  }

  let total = 0;

  countCart.map(pizza => {
    if (pizza.count > 0) {
      total += (pizza.count * pizza.price)
    }
  })



  const totalFormateado = total.toLocaleString('es-ES', {
    currency: 'CLP'


  });

  return (
    <nav>
      <div className="Nav-container">
        <p className="home-title">Pizzería Mamma mía!</p>
        <ul className="menu-style">
          <li><button className="li-button"><NavLink className={setActiveClass} to="/">🍕Home</NavLink></button></li>
          <li>
            {
              token ?
                <button className="li-button">🔓Profile</button>
                : <button className="li-button"><NavLink className={setActiveClass} to="/login">🔐Login</NavLink></button>
            }
          </li>
          <li>
            {
              token ?
                <button className="li-button" onClick={buttonLogout}>🔒Logout</button>
                : <button className="li-button"><NavLink className={setActiveClass} to="/register">🔐Register</NavLink></button>
            }
          </li>
        </ul>
        <button className="button-total"><NavLink className={setActiveClass} to="/cart">🛒Total: ${totalFormateado}</NavLink></button>
      </div>
    </nav>
  )
}

export default Navbar