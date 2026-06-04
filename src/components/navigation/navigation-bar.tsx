"use client";

import { useEffect, useRef, useState } from "react";
import { Languages } from "lucide-react";

import type { Locale } from "@/lib/locale";
import { useScroll } from "@/lib/hooks/scroll";
import { cn } from "@/lib/utils";

import { Logo } from "../image/logo";
import { LanguageSelector } from "./language-selector";

export function NavigationBar({
  pathname,
  locale,
}: {
  pathname: string;
  locale: Locale;
}) {
  const { scrollY } = useScroll();
  const [selectedLocale, setSelectedLocale] = useState(locale);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isLanguageMenuMounted, setIsLanguageMenuMounted] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const languageButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setSelectedLocale(locale);
  }, [locale]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isLanguageMenuMounted) return;

    function handlePointerDown(event: PointerEvent) {
      if (languageMenuRef.current?.contains(event.target as Node)) return;
      closeLanguageMenu();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      closeLanguageMenu(true);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLanguageMenuMounted]);

  function openLanguageMenu() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setSelectedLocale(locale);
    setIsLanguageMenuMounted(true);
    requestAnimationFrame(() => setIsLanguageMenuOpen(true));
  }

  function closeLanguageMenu(returnFocus = false) {
    setIsLanguageMenuOpen(false);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setIsLanguageMenuMounted(false);
      if (returnFocus) languageButtonRef.current?.focus();
    }, 200);
  }

  function toggleLanguageMenu() {
    if (isLanguageMenuOpen) {
      closeLanguageMenu();
      return;
    }
    openLanguageMenu();
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
      <a href={`/${locale}`} className="font-bold whitespace-nowrap sm:text-3xl">
        Konrad Guzek
      </a>
      <div className="ml-auto flex items-center self-stretch">
        <div ref={languageMenuRef} className="relative flex items-center lg:hidden">
          <button
            ref={languageButtonRef}
            type="button"
            aria-label="Select language"
            aria-haspopup="menu"
            aria-expanded={isLanguageMenuOpen}
            aria-controls="mobile-language-menu"
            onClick={toggleLanguageMenu}
            className="border-background-soft bg-background-strong/45 text-primary-strong hover:bg-background-strong/70 focus:bg-background-strong/70 flex items-center gap-2 rounded-md border border-solid px-3 py-2 text-xs font-semibold transition-colors outline-none"
          >
            <Languages className="size-4" aria-hidden="true" />
            {selectedLocale.toUpperCase()}
          </button>
          {isLanguageMenuMounted && (
            <div
              id="mobile-language-menu"
              role="menu"
              aria-label="Language"
              className={cn(
                "border-background-soft bg-background-strong/70 absolute top-full right-0 z-20 mt-2 rounded-lg border border-solid p-2 shadow-lg backdrop-blur-2xl transition-all duration-200 ease-out",
                isLanguageMenuOpen
                  ? "visible translate-y-0 scale-100 opacity-100"
                  : "invisible -translate-y-1 scale-95 opacity-0",
              )}
            >
              <LanguageSelector
                locale={locale}
                pathname={pathname}
                layout="vertical"
                itemRole="menuitemradio"
                onSelect={() => window.setTimeout(() => closeLanguageMenu(), 300)}
              />
            </div>
          )}
        </div>
        <ul
          id="menu"
          role="menubar"
          aria-label="navigation menu"
          className="hidden items-center gap-6 lg:flex"
        >
          <li className="flex justify-center">
            <LanguageSelector locale={locale} pathname={pathname} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
