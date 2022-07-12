import useLocalization from '../../hooks/useLocalization';
import Layout from '../../layout/Layout';

function NotFoundPage() {
  const [t] = useLocalization();

  return (
    <Layout>
      <main className="main">
        <h2 className="page__title">{t('pageNotFound')}</h2>
      </main>
    </Layout>
  ); 
}

export default NotFoundPage;
