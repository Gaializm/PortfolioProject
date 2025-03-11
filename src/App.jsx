import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectProvider } from './contexts/ProjectContext'; 
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
    return (
        <ProjectProvider> 
            <Router>
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<HomePage />} />

                    {/* Project Detail Page */}
                    <Route path="/projects/:projectId" element={<ProjectDetailPage />} />

                    {/* 404 Page */}
                    <Route path="/*" element={<NotFound />} />

                </Routes>
            </Router>
        </ProjectProvider>
    );
};

export default App;