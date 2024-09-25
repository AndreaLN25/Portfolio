import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';
import bcn42Img from '../assets/bcn42.jpg';
import ItAcademyImg from '../assets/ItAcademy.jpg';
import vedrunagraciaImg from '../assets/vedrunagracia.jpg';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      imgSrc: ItAcademyImg,
      title: 'Dice Game API',
      details: 'Final Project: Development of a Dice Game API using Laravel. Key functionality implementation using Laravel. Role and permission management with Spatie. Secure authentication with Passport and OAuth2. Automated and integration testing with PHPUnit. Extensive testing with Postman.',
      tech: 'Laravel, OAuth2, Passport, PHPUnit'
    },
    {
      imgSrc: ItAcademyImg,
      title: 'Profiles Project',
      details: 'Built a backend for a profiles project using Laravel, including a well-documented REST API and Docker containers.',
      tech: 'Laravel, Docker, MySQL, PHPUnit'
    },
    {
      imgSrc: bcn42Img,
      title: '42Barcelona',
      details: 'Currently undergoing training in a Software Engineering course at 42 Barcelona.',
      tech: 'C, C++, C#'
    },
    {
      imgSrc: vedrunagraciaImg,
      title: 'Vedruna Gracia',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tech: 'Lorem ipsum blablabla'
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <p className="projects-intro">
        Here are some of the projects I've worked on, showcasing my skills and expertise in Full Stack Development.
      </p>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card" onClick={() => handleProjectClick(project)}>
            <ProjectCard imgSrc={project.imgSrc} description={project.title} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectDetailsModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
}

export default Projects;
