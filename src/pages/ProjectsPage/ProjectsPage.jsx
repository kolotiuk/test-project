import React from 'react';
import { useParams } from 'react-router-dom';
import { getProjectsById } from 'data/projectsData';

const ProjectsPage = () => {
  const { id } = useParams();
  const { title } = getProjectsById(id);

  return (
    <div>
      <div className="hero">
        <div className="heroCentered">{title}</div>
      </div>
    </div>
  );
};

export default ProjectsPage;
