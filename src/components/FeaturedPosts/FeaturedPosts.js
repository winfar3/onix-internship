import "./FeaturedPosts.scss";

import { useEffect, useState } from "react";

import FeaturedPostsView from "./FeaturedPostsView";
import SendAxiosRequest from "../../database/SendAxiosRequest";

export function FeaturedPosts() {
  const [featuredPostsArray, setFeaturedPostsArray] = useState([]);

  useEffect(() => {
    SendAxiosRequest()
			.then((data) => {
      	setFeaturedPostsArray(data.slice(-3));
    	})
			.catch((err) => console.log(err))
  }, []);

  return <FeaturedPostsView postCardData={featuredPostsArray} />;
}
