import React, { useEffect, useState } from 'react';
import { getStudentProgress, getPendingTasks, toggleNotifications } from '../services/api';

const StudentDashboard = () => {
    const [progress, setProgress] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const studentProgress = await getStudentProgress();
            const tasks = await getPendingTasks();
            setProgress(studentProgress);
            setPendingTasks(tasks);
        };
        fetchData();
    }, []);

    const handleToggleNotifications = async () => {
        const newStatus = !notificationsEnabled;
        await toggleNotifications(newStatus);
        setNotificationsEnabled(newStatus);
    };

    return (
        <div className="dashboard">
            <h1>Panel del Estudiante</h1>
            <section className="progress">
                <h2>Progreso Académico</h2>
                <ul>
                    {progress.map((item) => (
                        <li key={item.id}>{item.subject}: {item.grade}</li>
                    ))}
                </ul>
            </section>
            <section className="tasks">
                <h2>Tareas Pendientes</h2>
                <ul>
                    {pendingTasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            </section>
            <section className="notifications">
                <h2>Notificaciones</h2>
                <label>
                    <input
                        type="checkbox"
                        checked={notificationsEnabled}
                        onChange={handleToggleNotifications}
                    />
                    Activar Notificaciones
                </label>
            </section>
        </div>
    );
};

export default StudentDashboard;