import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer ref={ref}>
      <p>© 2026 Your Name. All rights reserved.</p>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/projects">Resume</NavLink>
        <NavLink to="/projects">Experience</NavLink>
      </div>
    </footer>
  );
});

export default Footer;