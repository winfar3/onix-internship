import './Article.scss';

import { useParams } from 'react-router-dom';

import { baseUrl, postsRequestUrl } from '../../constants/requestUrls';
import months from '../../constants/months';
import ArticleView from './ArticleView';
import Loader from '../../components/Loader/Loader';
import useLocalization from '../../hooks/useLocalization';
import useRequest from '../../hooks/useRequest';

// TODO: fix page render count. There are 4 requests with all possible result options
function Article() {
  const [t] = useLocalization();
  const params = useParams();
  const [postData, isPending] = useRequest(`${baseUrl}${postsRequestUrl}/${params.id}`);
  const dateObject = new Date(postData.date);
  const text = postData.postBody;

  if (isPending) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  if (Object.keys(postData).length === 0) {
    return <p className="fz-2">{t('postErr')}</p>;
  }
  return (
    <ArticleView
      title={postData.title}
      category={postData.category}
      dateMonth={t(months[dateObject.getMonth()])}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      imageUrl={postData.imageUrl}
      author={postData.author}
      description={postData.description}
      fullText={text}
      by={t('by')}
      textCategory={t('Category')}
      textPosted={t('Posted')}
    />
  );
}

export default Article;
