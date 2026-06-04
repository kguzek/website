"use client";

import { useRef } from "react";

import { useScroll } from "@/lib/hooks/scroll";
import { cn } from "@/lib/utils";

import { Logo } from "../image/logo";
import { LanguageSelector } from "./language-selector";

export function NavigationBar({
  pathname,
  locale,
}: {
  pathname: string;
  locale: "en" | "pl";
}) {
  const { scrollY } = useScroll();
  const hamburgerRef = useRef<HTMLInputElement>(null);

  function closeMenu() {
    if (hamburgerRef.current == null) return;
    hamburgerRef.current.checked = false;
  }

  return (
    <nav
      className={cn(
        "navigation-bar fixed top-0 z-10 flex h-(--navbar-height) w-screen items-center gap-4 border-0 border-b border-solid border-transparent bg-transparent px-4 [transition:all_300ms_ease,border-color_1s_ease] sm:px-10 lg:gap-6",
        {
          "border-background-soft bg-background-strong/70 backdrop-blur-2xl": scrollY > 0,
        },
      )}
    >
      <Logo size={80} />
      <a
        href={`/${locale}`}
        onClick={closeMenu}
        className="font-bold whitespace-nowrap sm:text-3xl"
      >
        Konrad Guzek
      </a>
      <div className="ml-auto flex items-center self-stretch">
        <label
          aria-controls="menu"
          className="peer z-30 flex cursor-pointer flex-col justify-center p-4 lg:hidden"
        >
          <input
            type="checkbox"
            id="hamburger"
            className="peer hidden"
            ref={hamburgerRef}
            aria-controls="menu"
            aria-expanded="false"
            onChange={(event_) =>
              event_.target.setAttribute(
                "aria-expanded",
                event_.target.checked.toString(),
              )
            }
          />
          <div className="bg-primary mb-1.5 w-6 transform rounded-full pt-0.5 transition-transform duration-300 peer-checked:translate-y-2 peer-checked:-rotate-45" />
          <div className="bg-primary mb-1.5 w-6 rounded-full pt-0.5 opacity-100 transition-opacity peer-checked:opacity-0" />
          <div className="bg-primary w-6 transform rounded-full pt-0.5 transition-transform duration-300 peer-checked:-translate-y-2 peer-checked:rotate-45" />
        </label>
        <label
          htmlFor="hamburger"
          aria-controls="menu"
          className="bg-background-strong/25 pointer-events-none fixed top-0 left-0 z-10 h-screen w-screen opacity-0 backdrop-blur-sm transition-opacity duration-300 peer-has-checked:pointer-events-auto peer-has-checked:opacity-100 lg:hidden"
        />
        <ul
          id="menu"
          role="menubar"
          aria-label="navigation menu"
          className="border-background-soft bg-gradient-main/50 shadow-background-strong invisible absolute top-0 right-0 z-20 w-full origin-top translate-y-[-100%] items-center gap-6 rounded-b-lg border-0 border-b py-4 opacity-0 shadow-lg backdrop-blur-2xl transition-all duration-300 select-none peer-has-checked:visible peer-has-checked:translate-y-0 peer-has-checked:scale-100 peer-has-checked:opacity-100 sm:top-3 sm:right-10 sm:w-[50%] sm:origin-top-right sm:translate-y-0 sm:scale-[25%] sm:rounded-lg sm:border sm:border-solid lg:visible lg:static lg:flex lg:w-full lg:scale-100 lg:transform-none lg:border-none lg:bg-transparent lg:pt-0 lg:pb-0 lg:opacity-100 lg:shadow-none lg:backdrop-blur-none"
        >
          <li className="flex justify-center py-2">
            <LanguageSelector locale={locale} pathname={pathname} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
