import React from 'react'
import { Link } from 'react-router-dom'
import '../components/NotFound.css'

const NotFound = () => {
    return (
        <div className='container-NotFound'>
            <h2>Te desviaste a una ruta que no existe"/</h2>
            <button className='button-volver'><Link to="/">Vuelve a la ruta real aquí</Link></button>
        </div>
    )
}

export default NotFound