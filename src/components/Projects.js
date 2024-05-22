import React from 'react';
import '../assets/styles/Projects.css';
import projet1 from "../assets/images/card.png"
import projet2 from "../assets/images/reactportfolio.jpeg"

const projects = [
  {
    title: 'Carte de visite',
    description: 'Carte de visite au format site web avec html5 et css3. Exercice réalisé pour l\'entretien du test technique chez Simplon. ',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/sophianABN/card',
    demo: 'https://fastidious-youtiao-200bc2.netlify.app/',
    image: projet1
  },

  {
    title: 'Portfolio',
    description: 'Mon portfolio d\'étudiant developpeur web fullstack codé en react native avec css3.',
    technologies: ['React', 'CSS'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com',
    image: projet2
  },
  // autres projets 
  {
    title: 'Portfolio',
    description: 'Mon portfolio d\'étudiant developpeur web fullstack codé en react native avec css3.',
    technologies: ['React', 'CSS'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com',
    image: projet2
  },
  {
    title: 'Portfolio',
    description: 'Mon portfolio d\'étudiant developpeur web fullstack codé en react native avec css3.',
    technologies: ['React', 'CSS'],
    github: 'https://github.com/username/project1',
    demo: 'https://project1-demo.com',
    image: projet2
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Mes Projets</h2>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className='project-img'>
            <img src={project.image} alt={project.title} className="project-image" />
          </div>
          <div className='project-text'>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="project-tech-item">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} className="project-link">GitHub</a>
              <a href={project.demo} className="project-link">Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
