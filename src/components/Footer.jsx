import { forwardRef } from "react";
import "./Footer.css";

const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer ref={ref}>
      <p>© 2026 Your Name. All rights reserved.</p>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
});

export default Footer;