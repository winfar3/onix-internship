import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import translationsEn from '../i18n/en';
import translationsUa from '../i18n/ua';
import translationsRu from '../i18n/ru';

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

const useLocalization = () => {
  const { t } = useTranslation();

  const changeLang = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return [t, changeLang];
};

export default useLocalization;
