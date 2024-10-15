import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [showInstitutionMenu, setShowInstitutionMenu] = useState(false);
    const [showAcademicMenu, setShowAcademicMenu] = useState(false);

    return (
        <header>
            <nav>
                <Link to="/">
                    <img src='/img/logo.svg' alt="Logo del Colegio" width="200" height="50"/>
                </Link>
                <Link to="/">Inicio</Link>
                <div 
                    className={styles.dropdown} 
                    onMouseEnter={() => setShowInstitutionMenu(true)} 
                    onMouseLeave={() => setShowInstitutionMenu(false)}
                >
                    <span>Nuestra Institución</span>
                    {showInstitutionMenu && (
                        <div className={styles.dropdownContent}>
                            <Link to="/mission-vision">Misión y Visión</Link>
                            <Link to="/symbols">Símbolos</Link>
                            <Link to="/principles">Principios Institucionales</Link>
                            <Link to="/student-manual">Manual Estudiantil</Link>
                            <Link to="/study-plan">Plan de Estudio</Link>
                        </div>
                    )}
                </div>
                <div 
                    className={styles.dropdown} 
                    onMouseEnter={() => setShowAcademicMenu(true)} 
                    onMouseLeave={() => setShowAcademicMenu(false)}
                >
                    <span>Gestión Académica</span>
                    {showAcademicMenu && (
                        <div className={styles.dropdownContent}>
                            <Link to="/academic-platform">Plataforma Académica</Link>
                            <Link to="/campuses">Sedes</Link>
                        </div>
                    )}
                </div>
                <Link to="/administrative-management">Gestión Administrativa</Link>
                <Link to="/login">Iniciar Sesión</Link>
            </nav>
        </header>
    );
};

export default Header;