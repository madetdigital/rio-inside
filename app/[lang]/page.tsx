import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/home-page";
import {
  isLanguageRoute,
  languageFromRoute,
  supportedLanguages,
} from "@/lib/i18n";

type Props = { params: Promise<{ lang: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguageRoute(lang)) notFound();

  return {
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "pt-BR": "/pt",
        en: "/en",
        es: "/es",
        "x-default": "/pt",
      },
    },
  };
}

export default async function LanguagePage({ params }: Props) {
  const { lang } = await params;
  if (!isLanguageRoute(lang)) notFound();

  return <HomePage language={languageFromRoute(lang)} />;
}
