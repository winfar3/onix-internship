import './FeaturedPosts.scss';

import { useEffect, useState } from 'react';

import FeaturedPostsView from './FeaturedPostsView';
import SendAxiosRequest from '../../hooks/SendAxiosRequest';

function FeaturedPosts() {
  const requstUrl = 'https://61fc04453f1e34001792c787.mockapi.io/posts';
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
