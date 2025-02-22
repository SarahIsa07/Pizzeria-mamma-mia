import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/context/UserContext';




const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [successMessage, setSuccessMessage] = useState(false)

    const navigate = useNavigate();

    const { login } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            setError(true)
            setErrorMessage('Todos los campos son obligatorios')
            return;
        }
        if (password.length < 6) {
            setError(true)
            setErrorMessage('La contraseña debe contener al menos 6 caracteres')
            return;
        }
        setSuccessMessage(true)
        setError(false)
        setErrorMessage('')
        setEmail('');
        setPassword('');
        login(email, password);

    }


    
    return (
        <>
            <form className="form-style" onSubmit={handleSubmit}>
                <h2>Login</h2>
                {error ? <p className='error-message'>{errorMessage}</p> : null}
                {successMessage ? <p className='success-message'>¡Hola, bienvenido!</p> : null}

                <div className='form-container'>
                    <div className='form-input'>
                        <input
                            type='email'
                            name="email"
                            className="input-style"
                            placeholder='✉️ Email'
                            value={email}
                            onChange={(e) => 
                                setEmail(e.target.value)
                            } />
                    </div>

                    <div className='form-input'>
                        <input
                            type='password'
                            name="password"
                            className="input-style"
                            placeholder='🔑 Contraseña'
                            value={password}
                            onChange={(e) => 
                                setPassword(e.target.value)
                            } />
                    </div>
                    <button className="button-style" type="submit">Enviar</button>
                </div>
            </ form>
        </>
    )
}

export default Login