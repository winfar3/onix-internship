import './Article.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loading-icons';

import SendAxiosRequest from '../../database/SendAxiosRequest';
import { postsRequestUrl } from '../../database/requestUrls';
import ArticleView from './ArticleView';

function Article() {
  const params = useParams();
  const [postData, setPostData] = useState({});
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    SendAxiosRequest(`${postsRequestUrl}/${params.id}`)
      .then((data) => {
        setPostData(data);
        setIsPending(false);
      });
  }, [params]);

  if (isPending) {
    return (
      <div className="loader">
        <ThreeDots stroke="#06bcee" fill="#06bcee" />
      </div>
    );
  }
  return (
    <ArticleView
      title={postData.title}
      category={postData.category}
      createdDate={postData.date}
      imageUrl={postData.imageUrl}
      description={postData.description}
    />
  );
}

export default Article;
