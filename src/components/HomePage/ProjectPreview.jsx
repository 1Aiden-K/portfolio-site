import { Link } from "react-router-dom";

import projects from "../../data/projectList.js";
import "./ProjectPreview.css";

function ProjectPreview() {
  return (
    <section id="projects" className="section">
      <section className="spread">
        <h2>Projects</h2>
        <Link to="/projects">
          <u>See all</u>
        </Link>
      </section>

      <div className="project-grid">
        {projects.slice(0, 3).map((project) => {
          const projectLinks =
            Array.isArray(project.links) && project.links.length > 0
              ? project.links
              : [{ label: "View Project →", url: project.link }].filter(
                  (link) => link.url,
                );

          return (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <h4>{project.date}</h4>

              <p>{project.description}</p>

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

              <div className="project-links">
                {projectLinks.map(({ label, url }) => (
                  <a
                    className="project-link"
                    key={`${project.title}-${label}`}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectPreview;