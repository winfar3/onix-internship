import { useTranslation } from 'react-i18next';

import '../i18n';

// TODO: fix automatic language change on page refresh
const useLocalization = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return [t, changeLang];
};

export default useLocalization;
