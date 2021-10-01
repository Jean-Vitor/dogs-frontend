import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ENUS from './locales/en/en-us.json';
import PTBR from './locales/pt/ptbr.json';

const resources = {
  'pt-BR': PTBR,
  'en-US': ENUS,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    },
    fallbackLng: 'pt-BR',
    languages: ['pt-BR', 'en-us'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
