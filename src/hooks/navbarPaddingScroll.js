import { useEffect } from "react";

export default function useNavbarPaddingScroll({
  maxPadding = 24,
  scrollDistance = 100,
} = {}) {
  useEffect(() => {
    let ticking = false;

    const updatePadding = () => {
      const progress = Math.min(window.scrollY / scrollDistance, 1);
      const padding = maxPadding * (1 - progress);

      document.documentElement.style.setProperty(
        "--navbar-padding",
        `${padding}px`
      );

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updatePadding);
        ticking = true;
      }
    };

    // Set initial value
    updatePadding();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.documentElement.style.removeProperty("--navbar-padding");
    };
  }, [maxPadding, scrollDistance]);
}