import './FeaturedPosts.scss';

import { useEffect, useState } from 'react';

import FeaturedPostsView from './FeaturedPostsView';
import SendAxiosRequest from '../../helpers/SendAxiosRequest';
import { baseUrl, postsRequestUrl } from '../../constants/requestUrls';

// TODO: fix 'Can't perform a React state update on an unmounted component'
function FeaturedPosts() {
  const requstUrl = `${baseUrl}${postsRequestUrl}`;
  const [featuredPostsArray, setFeaturedPostsArray] = useState([]);

  useEffect(() => {
    SendAxiosRequest(requstUrl)
      .then((data) => {
        setFeaturedPostsArray(data.slice(-3));
      });
  }, []);

  return <FeaturedPostsView postCardData={featuredPostsArray} />;
}

export default FeaturedPosts;
