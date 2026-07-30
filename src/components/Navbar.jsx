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
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/projects">Experience</NavLink>
        <NavLink to="/projects">Other Work</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;