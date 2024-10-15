import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/Header.module.css';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/"><img src='/img/logo.svg' alt="Logo del Colegio" width="200" height="50"/></Link>
                <Link to="/">Inicio</Link>
                <Link to="/">Nuestra Institución</Link>
                <Link to="/">Gestión académica</Link>
                <Link to="/">Gestión administrativa</Link>
                <Link to="/login">Iniciar Sesión</Link>
            </nav>
        </header>
    );
};

export default Header;