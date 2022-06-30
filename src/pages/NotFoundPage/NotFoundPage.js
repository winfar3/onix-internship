import useLocalization from '../../hooks/useLocalization';

function NotFoundPage() {
  const [t] = useLocalization();

  return <h2 className="page__title">{t('pageNotFound')}</h2>;
}

export default NotFoundPage;
