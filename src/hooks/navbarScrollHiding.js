import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useNavbarScrollHiding(footerRef) {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();

      const visible = Math.max(0, window.innerHeight - rect.top);
      const p = Math.min(visible / rect.height, 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);

    // Run on mount and whenever the route changes
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef, location.pathname]);

  return progress;
}