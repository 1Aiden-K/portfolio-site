import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";

    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  );
}