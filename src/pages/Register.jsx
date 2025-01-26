import { useState } from 'react';
import '../components/Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmpass] = useState('');

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [successMessage, setSuccessMessage] =useState(false)
    

    const validarInput = (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim() || !confirmpass.trim()) {
            setError(true)
            setErrorMessage('Todos los campos son obligatorios')
            return;
        }
        if (password.length < 6 ) {
            setError(true)
            setErrorMessage('La contraseña debe contener al menos 6 caracteres')
            return;
        }
        if (password !== confirmpass){
            setError(true)
            setErrorMessage('Las contraseñas deben ser iguales')
            return;
        }
        setSuccessMessage(true)
        setError(false)
        setErrorMessage('')
        setEmail('');
        setPassword('');
        setConfirmpass('');

    };


    return (
        <>
            <form className="form-style" onSubmit={validarInput}>
                <h2>Registro</h2>
                {error ? <p className='error-message'>{errorMessage}</p> : null}
                {successMessage ? <p className='success-message'>Usuario registrado con éxito</p> : null}

                <div className='form-container'>
                    <div className='form-input'>
                    <input 
                    type='email' 
                    name="email"
                    className="input-style"
                    placeholder='✉️ Email'
                    onChange={(e) => (
                        setEmail(e.target.value)
                    )} value={email}/>
                    </div>

                    <div className='form-input'>
                        <input 
                        type='password'
                        name="password"
                        className="input-style"
                        placeholder='🔑 Contraseña'
                        onChange={(e) => (
                            setPassword(e.target.value)
                        )}  value={password}/>
                    </div>

                    <div className='form-input'>
                        <input 
                        type='password'
                        name="confirmPass"
                        className="input-style"
                        placeholder='🔍 Confirmar contraseña'
                        onChange={(e) => (
                            setConfirmpass(e.target.value)
                        )} value={confirmpass}/>
                    </div>
                    
                    <button className="button-style" type="submit">Enviar</button>
                    </div>
            </form>
        </>
    )
}

export default Register