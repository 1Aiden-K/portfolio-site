import { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import ThemeToggle from "./ThemeToggle";

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer ref={ref}>
      <p>© 2026 Aiden C Khanna. All rights reserved.</p>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/other-work">Other Work</NavLink>
        <ThemeToggle />
      </div>
    </footer>
  );
});

export default Footer;