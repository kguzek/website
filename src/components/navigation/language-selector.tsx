import type { Locale } from "@/lib/locale";
import { locales } from "@/lib/locale";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  locale: Locale;
  pathname: string;
  activeLocale?: Locale;
  layout?: "horizontal" | "vertical";
  itemRole?: "menuitemradio";
  onSelect?: (language: Locale) => void;
}

export function LanguageSelector({
  locale,
  pathname,
  activeLocale,
  layout = "horizontal",
  itemRole,
  onSelect,
}: LanguageSelectorProps) {
  const selectedLocale = activeLocale ?? locale;
  const isVertical = layout === "vertical";
  const transitionScope = isVertical ? "mobile" : "desktop";

  function getHref(language: Locale) {
    if (language === locale) return pathname;
    if (pathname.startsWith(`/${locale}`)) {
      return pathname.replace(`/${locale}`, `/${language}`);
    }
    return `/${language}${pathname === "/" ? "" : pathname}`;
  }

  function selectLanguage(language: Locale) {
    onSelect?.(language);
  }

  return (
    <div className={cn("flex gap-2", isVertical ? "flex-col" : "items-center")}>
      <span className={cn("text-primary text-xs font-semibold", isVertical && "sr-only")}>
        Language
      </span>
      <div className={cn("relative flex", isVertical && "flex-col gap-1")}>
        {locales.map((language) => (
          <a
            key={language}
            href={getHref(language)}
            role={itemRole}
            aria-selected={selectedLocale === language}
            aria-checked={itemRole ? selectedLocale === language : undefined}
            onClick={() => selectLanguage(language)}
            className={cn(
              "relative flex items-center justify-center overflow-hidden rounded-md text-xs font-semibold",
              isVertical ? "h-9 w-20" : "w-8 py-2",
              selectedLocale !== language ? "clickable cursor-pointer" : "cursor-default",
            )}
          >
            {selectedLocale === language && (
              <span
                aria-hidden="true"
                className="language-selector-indicator bg-accent pointer-events-none absolute inset-0 z-0 rounded-md"
              />
            )}
            <span
              className="language-selector-label relative z-10"
              style={{
                viewTransitionName: `language-selector-label-${transitionScope}-${language}`,
              }}
            >
              {language.toUpperCase()}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
