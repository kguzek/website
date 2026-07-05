import { redirect } from "react-router";

export type Locale = "en" | "pl";

export const locales: Locale[] = ["en", "pl"];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "locale";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPreferredLocale(): Locale {
  const match = document.cookie.match(
    new RegExp(`(?:^|;\\s*)${LOCALE_COOKIE}\\s*=\\s*([^;]*)`),
  );
  if (match) {
    const cookieVal = match[1];
    if (isValidLocale(cookieVal)) return cookieVal;
  }

  const languages = navigator.languages ?? [navigator.language];
  for (const lang of languages) {
    const code = lang.split("-")[0];
    if (isValidLocale(code)) return code;
  }

  return defaultLocale;
}

export function redirectToLocalizedUrl() {
  const locale = getPreferredLocale();
  const { pathname, search, hash } = window.location;
  return redirect(`/${locale}${pathname}${search}${hash}`);
}
