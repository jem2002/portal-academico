import React, { useState } from 'react';
import { login } from '../services/api';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(username, password, userType);
            // Manejar el almacenamiento del usuario y redirección aquí.
        } catch (error) {
            setMessage('Error al iniciar sesión.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
            <select value={userType} onChange={(e) => setUserType(e.target.value)} required>
                <option value="">Seleccione...</option>
                <option value="student">Estudiante</option>
                <option value="teacher">Profesor</option>
                <option value="admin">Administrativo</option>
            </select>
            <button type="submit">Ingresar</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default LoginForm;