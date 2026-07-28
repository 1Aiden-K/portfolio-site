import "./Hero.css";


function Hero() {
    return(
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
    )
}

export default Hero;