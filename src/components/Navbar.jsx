import React from 'react'
import './Navbar.css'

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
          <li><button className="li-button">🍕Home</button></li>
          <li>
            {
              token ?
                <button className="li-button">🔓Profile</button>
                : <button className="li-button">🔐Login</button>
            }
          </li>
          <li>
            {
              token ? 
              <button className="li-button">🔒Logout</button>
              : <button className="li-button">🔐Register</button>
            }
          </li>
        </ul>
        <button className="button-total">🛒Total: ${totalFormateado}</button>
      </div>
    </nav>
  )
}

export default Navbar