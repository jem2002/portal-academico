import React, { useEffect, useState } from 'react';
import { getInstitutionInfo, saveInstitutionInfo } from '../services/api';

const AdminDashboard = () => {
    const [institutionInfo, setInstitutionInfo] = useState({
        mission: '',
        vision: '',
        values: '',
        // Agrega más campos según sea necesario.
    });

    useEffect(() => {
        const fetchData = async () => {
            const info = await getInstitutionInfo();
            setInstitutionInfo(info);
        };
        fetchData();
    }, []);

    const handleChange = (e) => {
        setInstitutionInfo({ ...institutionInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveInstitutionInfo(institutionInfo);
        alert('Información guardada exitosamente');
    };

    return (
        <div className="dashboard">
            <h1>Panel de Administración</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Misión:</label>
                    <textarea name="mission" value={institutionInfo.mission} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Visión:</label>
                    <textarea name="vision" value={institutionInfo.vision} onChange={handleChange} />
                </div>
                {/* Agrega más campos según sea necesario */}
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
};

export default AdminDashboard;