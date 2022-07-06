import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import translationsEn from './en';
import translationsUa from './ua';
import translationsRu from './ru';

const options = {
  order: ['localStorage', 'navigator'],
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      en: { translation: translationsEn },
      ua: { translation: translationsUa },
      ru: { translation: translationsRu },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ua', 'ru'],
    interpolation: { escapeValue: false },
  });
