import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
    return(
        <section className="hero">
          <div>
            <p className="eyebrow">Classical and Quantum Computing</p>
            <h1>
              <span>portfolio</span>Website
            </h1>
            <p className="hero-text">
              ECE + Phsyics @ Duke
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn primary">
                View Projects
              </Link>

              <Link to="/contact" className="btn secondary">
                &nbsp;&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;
              </Link>
            </div>
          </div>
        </section>
    )
}

export default Hero;