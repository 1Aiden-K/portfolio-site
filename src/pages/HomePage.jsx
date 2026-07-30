import Hero from "../components/HomePage/Hero";
import About from "../components/HomePage/About";
import Skills from "../components/HomePage/Skills";
import Contact from "../components/HomePage/HomeContact";
import ProjectPreview from "../components/HomePage/ProjectPreview"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <ProjectPreview />
      <Contact />
    </>
  );
}