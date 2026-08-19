import type { Language } from "@/context/language-context";

export const supportedLanguages = ["pt", "en", "es"] as const;
export type LanguageRoute = (typeof supportedLanguages)[number];

export function isLanguageRoute(value: string): value is LanguageRoute {
  return supportedLanguages.includes(value as LanguageRoute);
}

export function languageFromRoute(route: LanguageRoute): Language {
  return route.toUpperCase() as Language;
}
