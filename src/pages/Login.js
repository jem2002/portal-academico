// src/pages/Login.js
import React, { useState } from 'react';
import { login } from '../services/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [message, setMessage] = useState('');
    const [showResetForm, setShowResetForm] = useState(false);
    const [resetEmail, setResetEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password, userType);
            if (response.success) {
                localStorage.setItem('user', JSON.stringify(response.user));
                window.location.href = `/${userType}-dashboard`;
            } else {
                setMessage(response.message);
            }
        } catch (error) {
            setMessage('Error al iniciar sesión.');
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        // Lógica para restablecer la contraseña
        // Aquí deberías llamar a la función correspondiente del API
        console.log(`Restablecer contraseña para: ${resetEmail}`);
    };

    return (
        <div className="container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Usuario:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="user-type">Tipo de Usuario:</label>
                    <select id="user-type" value={userType} onChange={(e) => setUserType(e.target.value)} required>
                        <option value="">Seleccione...</option>
                        <option value="student">Estudiante</option>
                        <option value="teacher">Profesor</option>
                        <option value="admin">Administrativo</option>
                    </select>
                </div>
                <button type="submit">Ingresar</button>
                {message && <p>{message}</p>}
                <p><a href="#" onClick={() => setShowResetForm(!showResetForm)}>¿Olvidó su contraseña?</a></p>
            </form>

            {showResetForm && (
                <form onSubmit={handleResetPassword}>
                    <div className="form-group">
                        <label htmlFor="reset-email">Correo electrónico:</label>
                        <input type="email" id="reset-email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} required />
                    </div>
                    <button type="submit">Restablecer Contraseña</button>
                </form>
            )}
        </div>
    );
};

export default Login;