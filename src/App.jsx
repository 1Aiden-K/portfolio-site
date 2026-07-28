import { useRef } from "react";

import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

import navbarScrollHiding from "./hooks/navbarScrollHiding.js";
import useNavbarPaddingScroll from "./hooks/navbarPaddingScroll";


function App() {
  //for header animations
  const footerRef = useRef(null);

  const progress = navbarScrollHiding(footerRef);

  useNavbarPaddingScroll({
    maxPadding: 24,
    scrollDistance: 100,
  });

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