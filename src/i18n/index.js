import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationsEn from './en';
import translationsUa from './ua';
import translationsRu from './ru';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      ua: { translation: translationsUa },
      ru: { translation: translationsRu },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
