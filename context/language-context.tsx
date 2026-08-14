"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Language = "PT" | "EN" | "ES";

type LanguageContextType = {
  language: Language;
  changeLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("PT");

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "rioinside-language"
    ) as Language | null;

    if (
      savedLanguage === "PT" ||
      savedLanguage === "EN" ||
      savedLanguage === "ES"
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  function changeLanguage(newLanguage: Language) {
    setLanguage(newLanguage);
    localStorage.setItem("rioinside-language", newLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
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