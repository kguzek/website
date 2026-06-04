import { useEffect, useState } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  function handleScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY };
}
