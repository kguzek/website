import { useEffect, useState } from "react";

export function useIsPageScrolled(threshold: number) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollThreshold = Math.max(0, threshold);

    setIsScrolled(window.scrollY > scrollThreshold);

    if (typeof IntersectionObserver === "undefined") {
      function handleScroll() {
        setIsScrolled(window.scrollY > scrollThreshold);
      }

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = `position:absolute;top:0;left:0;width:1px;height:${scrollThreshold}px;pointer-events:none;`;
    document.body.prepend(sentinel);

    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    });
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [threshold]);

  return isScrolled;
}
