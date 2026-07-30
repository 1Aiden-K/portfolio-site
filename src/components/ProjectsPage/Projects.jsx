import { Link } from "react-router-dom";

import projects from "../../data/projectList.jsx";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <h1 className="pageTitle">Projects</h1>
      <h1 className="subTitle">Full list of projects</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <a
            className="project-card"
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="projectTitle">{project.title}</h3>
            <h4>{project.date}</h4>

            <p>{project.description}</p>
            <p>{project.details}</p>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <span className="project-link">Github link</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;