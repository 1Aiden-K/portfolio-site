import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar({ progress }) {
  return (
    <nav
      className="navbar"
      style={{
        transform: `translateY(-${progress * 100}%)`,
      }}
    >
      <h2 className="logo">
        <Link to="/">YourName</Link>
      </h2>

      <div className="nav-links">
        <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</NavLink>
        <NavLink to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Projects</NavLink>
        <NavLink to="/experience" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Experience</NavLink>
        <NavLink to="/other-work" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Other Work</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;