import './Article.scss'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import SendAxiosRequest from "../../database/SendAxiosRequest"
import {postsRequestUrl} from "../../database/requestUrls"
import ArticleView from "./ArticleView";

function Article() {
  const params = useParams();
  const [postData, setPostData] = useState({})
  
  useEffect(() => {
    SendAxiosRequest(`${postsRequestUrl}/${params.id}`)
      .then((data) => setPostData(data))
      .catch((err) => console.log(err))
  }, [params])

  return(
    <ArticleView 
      title={postData.title}
      category={postData.category}
      createdDate={postData.date}
      imageUrl={postData.imageUrl}
      description={postData.description}
    />
  )
}

export default Article