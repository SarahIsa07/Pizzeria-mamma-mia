import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false;

  const totalFormateado = total.toLocaleString('es-ES', {
    currency: 'CLP'
  });

  return (
    <nav>
      <div className="Nav-container">
        <p className="home-title">Pizzería Mamma mía!</p>
        <ul className="menu-style">
          <li><Link to="/"><button className="li-button">🍕Home</button></Link></li>
          <li>
            {
              token ?
                <button className="li-button">🔓Profile</button>
                : <Link to="/login"><button className="li-button">🔐Login</button></Link>
            }
          </li>
          <li>
            {
              token ?
                <button className="li-button">🔒Logout</button>
                : <Link to="/register"><button className="li-button">🔐Register</button></Link>
            }
          </li>
        </ul>
        <button className="button-total"><Link to="/cart">🛒Total: ${totalFormateado}</Link></button>
      </div>
    </nav>
  )
}

export default Navbar