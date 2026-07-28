import "./Navbar.css";

function Navbar({ progress }) {
  return (
    <nav
      className="navbar"
      style={{
        transform: `translateY(-${progress * 100}%)`,
      }}
    >
      <h2 className="logo">YourName</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;