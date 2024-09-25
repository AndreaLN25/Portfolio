// src/components/ProjectDetailsModal.jsx
import React from 'react';

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-description">{project.details}</p>
        <p className="modal-tech">Technologies: {project.tech}</p>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
