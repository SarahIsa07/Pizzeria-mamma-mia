import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../components/context/UserContext';




const Login = () => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [successMessage, setSuccessMessage] = useState(false)

    const { login } = useContext(UserContext);
    
    const navigate = useNavigate();

    const validarInput = (e) => {
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
        login();
        navigate(`/profile`)
    };

    return (
        <>
            <form className="form-style" onSubmit={validarInput}>
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
                            onChange={(e) => (
                                setEmail(e.target.value)
                            )} value={email} />
                    </div>

                    <div className='form-input'>
                        <input
                            type='password'
                            name="password"
                            className="input-style"
                            placeholder='🔑 Contraseña'
                            onChange={(e) => (
                                setPassword(e.target.value)
                            )} value={password} />
                    </div>
                    <button className="button-style" type="submit">Enviar</button>
                </div>
            </ form>
        </>
    )
}

export default Login