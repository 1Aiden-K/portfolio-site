import "./App.css";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "A web app that analyzes resumes and gives improvement suggestions using natural language processing.",
    tech: ["React", "Node.js", "OpenAI API"],
    link: "#",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A responsive productivity dashboard for tracking tasks, deadlines, and project progress.",
    tech: ["React", "Firebase", "CSS"],
    link: "#",
  },
  {
    title: "E-Commerce Store",
    description:
      "A modern online store with product filtering, cart management, and checkout flow.",
    tech: ["React", "Stripe", "Vite"],
    link: "#",
  },
];

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <h2 className="logo">YourName</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">Frontend Developer</p>
          <h1>
            Hi, I’m <span>Your Name</span>.
            <br />
            I build clean, modern web experiences.
          </h1>
          <p className="hero-text">
            I create responsive websites and applications using React,
            JavaScript, and modern web technologies.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a web developer focused on building user-friendly digital
          products. I enjoy solving problems, designing clean interfaces, and
          turning ideas into polished websites.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a href={project.link}>View Project →</a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>Responsive Design</span>
          <span>UI/UX</span>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>
          Interested in working together? Send me a message or connect with me
          online.
        </p>
        <div className="contact-links">
          <a href="mailto:your.email@example.com">Email</a>
          <a href="https://github.com/yourusername" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <p>© 2026 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;