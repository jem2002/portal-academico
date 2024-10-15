import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import AdminDashboard from './components/AdminDashboard';
import './App.css';
import MissionVision from './pages/MissionVision';
import Symbols from './pages/Symbols';
import Principles from './pages/Principles';
import StudenManual from './pages/StudentManual';
import StudyPlan from './pages/StudyPlan';
import AcademicPlatform from './pages/AcademicPlatform';
import Campuses from './pages/Campuses';



function App() {
    return (
        <Router>
            <Header />
            <main> {/* Asegúrate de incluir el contenido principal aquí */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/student-dashboard" element={<StudentDashboard />} />
                    <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="*" element={<NotFound />} />
                    
                    <Route path="/mission-vision" element={<MissionVision />} />
                    <Route path="/symbols" element={<Symbols />} />
                    <Route path="/principles" element={<Principles />} />
                    <Route path="/student-manual" element={<StudenManual />} />
                    <Route path="/study-plan" element={<StudyPlan />} />
                    <Route path="/academic-platform" element={<AcademicPlatform />} />
                    <Route path="/campuses" element={<Campuses />} />
                    
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;