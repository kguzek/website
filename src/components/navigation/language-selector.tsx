import type { Locale } from "@/lib/locale";
import { locales } from "@/lib/locale";

interface LanguageSelectorProps {
  locale: Locale;
  pathname: string;
}

export function LanguageSelector({ locale, pathname }: LanguageSelectorProps) {
  const otherLocale = locale === "en" ? "pl" : "en";
  const switchHref = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <div className="flex items-center gap-2">
      <span className="text-primary text-xs font-semibold">Language</span>
      <div className="relative flex">
        <div
          aria-hidden="true"
          className={`bg-accent pointer-events-none absolute top-0 z-[-1] size-8 rounded-md transition-transform duration-300 ${
            locale === "pl" ? "translate-x-8" : "translate-x-0"
          }`}
        />
        {locales.map((language) => (
          <a
            key={language}
            href={language === locale ? "#" : switchHref}
            aria-selected={locale === language}
            className={`flex w-8 items-center justify-center py-2 text-xs font-semibold ${
              locale !== language ? "clickable cursor-pointer" : "cursor-default"
            }`}
          >
            {language.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
}
