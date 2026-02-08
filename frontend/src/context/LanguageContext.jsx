import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../i18n/translations';

const LanguageContext = createContext();

const SUPPORTED_LANGUAGES = ['en', 'tr', 'cz'];
const DEFAULT_LANGUAGE = 'en';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('surtey-lang');
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      return saved;
    }
    // Try to detect browser language
    const browserLang = navigator.language?.split('-')[0];
    if (browserLang === 'cs') return 'cz'; // Czech
    if (SUPPORTED_LANGUAGES.includes(browserLang)) return browserLang;
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem('surtey-lang', language);
    document.documentElement.lang = language === 'cz' ? 'cs' : language;
  }, [language]);

  const t = translations[language] || translations[DEFAULT_LANGUAGE];

  const changeLanguage = (lang) => {
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    }
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    t,
    languages: SUPPORTED_LANGUAGES,
    languageNames: t.languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
