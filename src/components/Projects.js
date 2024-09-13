import React from 'react';
import './Project.css'; // Import the CSS file

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A detailed description of Project One with more information.",
    link: "https://example.com/project-one",
    technologies: ["React", "Node.js"],
    image: "https://corporate-assets.lucid.co/chart/09255df0-f147-42b4-805e-163ad3001feb.png?v=1707845547429",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A detailed description of Project Two with more information.",
    link: "https://example.com/project-two",
    technologies: ["Angular", "Node.js"],
    image: "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg",
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="technologies">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
