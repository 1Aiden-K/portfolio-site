import projects from "../../data/projectList.js";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section">
      <h1 className="pageTitle">Projects</h1>
      <h1 className="subTitle">List of notable projects</h1>

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

            <div className="project-tech">
              <span className="project-tech-bracket">[</span>

              <div className="project-tech-list">
                {project.tech.map((tech, index) => (
                  <span className="project-tech-item" key={tech}>
                    {tech}
                    {index < project.tech.length - 1 && (
                      <span className="project-tech-comma">,</span>
                    )}
                  </span>
                ))}
              </div>

              <span className="project-tech-bracket">]</span>
            </div>

            <span className="project-link">Github link</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;