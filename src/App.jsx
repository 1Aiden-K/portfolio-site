import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main className="content">
        <Hero />

        <About />
        
        <Projects />

        <Skills />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;