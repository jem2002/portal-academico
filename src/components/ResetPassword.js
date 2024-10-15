import React, { useState } from 'react';
import { resetPassword } from '../services/api';

const ResetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        try {
            const response = await resetPassword(email);
            setMessage('Se ha enviado un correo con instrucciones.');
        } catch (error) {
            setMessage('Error al enviar el correo.');
        }
    };

    return (
        <form onSubmit={handleReset}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" required />
            <button type="submit">Restablecer Contraseña</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default ResetPasswordForm;