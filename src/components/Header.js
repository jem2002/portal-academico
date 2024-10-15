import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Portal Académico</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/login">Iniciar Sesión</Link>
            </nav>
        </header>
    );
};

export default Header;