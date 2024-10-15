import React, { useEffect, useState } from 'react';
import { getTeacherCourses, getFeedback } from '../services/api';

const TeacherDashboard = () => {
    const [courses, setCourses] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const teacherCourses = await getTeacherCourses();
            const feedbackList = await getFeedback();
            setCourses(teacherCourses);
            setFeedbacks(feedbackList);
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <h1>Panel del Profesor</h1>
            <section className="courses">
                <h2>Mis Asignaturas</h2>
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            {course.name}
                            {/* Aquí puedes agregar un botón para subir material */}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="feedback">
                <h2>Retroalimentación de Estudiantes</h2>
                <ul>
                    {feedbacks.map((feedback) => (
                        <li key={feedback.id}>
                            {feedback.comment} - {feedback.studentName}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default TeacherDashboard;