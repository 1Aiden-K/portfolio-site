import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import ThemeToggle from "./ThemeToggle";

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer ref={ref}>
      <p>© 2026 Your Name. All rights reserved.</p>

      <div className="nav-links">
        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</NavLink>
        <NavLink to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Projects</NavLink>
        <NavLink to="/experience" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Experience</NavLink>
        <NavLink to="/other-work" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Other Work</NavLink>
        <ThemeToggle />
      </div>
    </footer>
  );
});

export default Footer;