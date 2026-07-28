import { useRef } from "react";

import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

import useFooterNavbarAnimation from "./hooks/navbarScrollAnimation.js";

function App() {
  const footerRef = useRef(null);

  const progress = useFooterNavbarAnimation(footerRef);

  return (
    <div className="site">
      <Navbar progress={progress} />

      <main className="content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer ref={footerRef} />
    </div>
  );
}

export default App;