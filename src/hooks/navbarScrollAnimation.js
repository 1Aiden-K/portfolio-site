import { useEffect, useState } from "react";

export default function useFooterNavbarAnimation(footerRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;

      const rect = footerRef.current.getBoundingClientRect();

      const visible = Math.max(0, window.innerHeight - rect.top);
      const p = Math.min(visible / rect.height, 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  return progress;
}