import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const login = async (username, password, userType) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { username, password, userType });
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error; // O manejar el error de otra manera
    }
};

export const resetPassword = async (email) => {
    const response = await axios.post(`${API_URL}/reset-password`, { email });
    return response.data;
};

export const getStudentProgress = async () => {
    // Implementa la lógica para obtener el progreso académico del estudiante
};

export const getPendingTasks = async () => {
    // Implementa la lógica para obtener las tareas pendientes del estudiante
};

export const toggleNotifications = async (status) => {
    // Implementa la lógica para activar/desactivar notificaciones
};

export const getTeacherCourses = async () => {
    // Implementa la lógica para obtener las asignaturas del profesor
};

export const getFeedback = async () => {
    // Implementa la lógica para obtener retroalimentación de estudiantes
};

export const getInstitutionInfo = async () => {
    // Implementa la lógica para obtener información institucional
};

export const saveInstitutionInfo = async (info) => {
    // Implementa la lógica para guardar información institucional
};