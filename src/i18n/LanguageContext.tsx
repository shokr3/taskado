import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "./types";
import { t as translate } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem("taskado-language") === "en" ? "en" : "hr";
    } catch {
      return "hr";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("taskado-language", language);
    } catch {
      /* Storage is optional. */
    }
  }, [language]);

  const t = (key: string) => translate(key, language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
