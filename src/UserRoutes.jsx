import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import ProjectsPage from 'pages/ProjectsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:id" element={<ProjectsPage />} />
    </Routes>
  );
};

export default UserRoutes;
