import './Article.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SendAxiosRequest from '../../helpers/SendAxiosRequest';
import { postsRequestUrl } from '../../constants/requestUrls';
import months from '../../constants/months';
import ArticleView from './ArticleView';
import Loader from '../../components/Loader/Loader';

function Article() {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [isPending, setIsPending] = useState(false);
  const dateObject = new Date(postData.date);
  const text = postData.postBody;

  useEffect(() => {
    setIsPending(true);
    SendAxiosRequest(`${postsRequestUrl}/${params.id}`)
      .then((data) => {
        setPostData(data);
        setIsPending(false);
      })
      .catch(() => setIsPending(false));
  }, [params]);

  if (isPending) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  if (Object.keys(postData).length === 0) {
    return <p className="fz-2">Sorry, cant find post</p>;
  }
  return (
    <ArticleView
      title={postData.title}
      category={postData.category}
      dateMonth={months[dateObject.getMonth()]}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      imageUrl={postData.imageUrl}
      author={postData.author}
      description={postData.description}
      fullText={text}
    />
  );
}

export default Article;
