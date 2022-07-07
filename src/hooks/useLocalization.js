import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import '../i18n';

// TODO: fix automatic language change on page refresh
const useLocalization = () => {
  const { t } = useTranslation();

  const changeLang = (event) => {
    i18next.changeLanguage(event.target.value);
  };

  return [t, changeLang];
};

export default useLocalization;
