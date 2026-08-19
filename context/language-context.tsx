"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
} from "react";

export type Language = "PT" | "EN" | "ES";

type LanguageContextType = {
  language: Language;
  changeLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  useEffect(() => {
    localStorage.setItem("rioinside-language", initialLanguage);
  }, [initialLanguage]);

  function changeLanguage(newLanguage: Language) {
    localStorage.setItem("rioinside-language", newLanguage);
  }

  return (
    <LanguageContext.Provider
      value={{ language: initialLanguage, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage precisa estar dentro de LanguageProvider"
    );
  }

  return context;
}
