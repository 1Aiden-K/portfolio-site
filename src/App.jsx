import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

import navbarScrollHiding from "./hooks/navbarScrollHiding";
import useNavbarPaddingScroll from "./hooks/navbarPaddingScroll";

function App() {
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>

      <Footer ref={footerRef} />
    </div>
  );
}

export default App;