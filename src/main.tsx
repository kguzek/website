import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { hydrateRoot } from "react-dom/client";

import { App } from "./app";
import { RouterContext } from "./lib/router";

import "./pages/pages.css";
import "./styles.css";

function isLocaleSwitchNav(from: string, to: string): boolean {
  const fromParts = from.replace(/^\/+/g, "").split("/").filter(Boolean);
  const toParts = to.replace(/^\/+/g, "").split("/").filter(Boolean);
  if (fromParts.length < 1 || toParts.length < 1) return false;
  if (fromParts[0] === toParts[0]) return false;
  return fromParts.slice(1).join("/") === toParts.slice(1).join("/");
}

function Root() {
  const [path, setPath] = useState(window.location.pathname);
  const navigate = useCallback((to: string, options?: { scroll?: boolean }) => {
    if (options?.scroll !== false) {
      const current = window.location.pathname;
      sessionStorage.setItem(`scroll:${current}`, window.scrollY.toString());
    }
    window.history.pushState({}, "", to);
    setPath(to);
  }, []);

  // Restore scroll position after route changes
  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll:${path}`);
    if (saved !== null) {
      const y = parseInt(saved, 10);
      requestAnimationFrame(() => window.scrollTo({ top: y }));
      sessionStorage.removeItem(`scroll:${path}`);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [path]);

  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      setPath(p);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:"))
        return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();

      const noScroll = isLocaleSwitchNav(window.location.pathname, href);

      if (document.startViewTransition) {
        document.startViewTransition(() => {
          flushSync(() => navigate(href, { scroll: !noScroll }));
        });
      } else {
        navigate(href, { scroll: !noScroll });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navigate]);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      <App path={path} />
    </RouterContext.Provider>
  );
}

hydrateRoot(document.getElementById("root")!, <Root />);
