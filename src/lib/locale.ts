export type Locale = "en" | "pl";

export const locales: Locale[] = ["en", "pl"];
export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
