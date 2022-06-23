import './Article.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThreeDots } from 'react-loading-icons';

import SendAxiosRequest from '../../helpers/SendAxiosRequest';
import { postsRequestUrl } from '../../constants/requestUrls';
import months from '../../constants/months';
import ArticleView from './ArticleView';

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
