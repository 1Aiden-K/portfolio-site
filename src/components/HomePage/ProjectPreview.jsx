import { Link} from "react-router-dom";

import projects from "../../data/projectList.jsx";
import "./ProjectPreview.css";

function ProjectPreview() {
  return (
    <section id="projects" className="section">
      <section className="spread">
        <h2>Projects</h2>
        <Link to="/projects"><u>See all</u></Link>
      </section>

      <div className="project-grid">
        {projects.slice(0, 3).map((project) => (
          <a
            className="project-card"
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <h4>{project.date}</h4>

            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <span className="project-link">View Project →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectPreview;