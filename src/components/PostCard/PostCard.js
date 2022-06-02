import "./PostCard.scss";

import { useEffect } from "react";
import classNames from "classnames";


import PostCardViev from "./PostCardViev";

function PostCard(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const cardSize = props.forcedCardSize
    ? props.forcedCardSize
    : props.post.cardSize;
  const dateObject = new Date(props.post.date);

  /* COMMENT
   * Это пример с learn.javascript, но я не уверен, что в моем случае нужно создавать элемент image.
   * Есть ли другой способ проверить загружено ли изображение и нужно ли использовать другой способ?
   **/
  let image = document.createElement("img");
  image.src = props.post.imageUrl;
  /* --- */

  /* COMMENT
   * React Hook useEffect has missing dependencies: 'image' and 'props.post.id'.
   * Either include them or remove the dependency array
   * Видел эту ошибку, но не понял как ее убрать, ведь мне нужна именно проверка меняется ли image.src
   **/
  useEffect(() => {
    image.onload = () => {
      console.log(`Image for post ${props.post.id} loaded`);
    };
    image.onerror = () => {
      console.log(`ERROR. Image for post ${props.post.id} not loaded`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.src]);

  return (
    <PostCardViev 
      post={props.post}
      handleActivePost={props.handleActivePost}
      draggable={props.draggable}
      dragStartHandler={props.dragStartHandler}
      dragOverHandler={props.dragOverHandler}
      dropHandler={props.dropHandler}
      articleclassNames={classNames(
        "postcard",
        `postcard_${cardSize}`,
        { postcard_active: props.onActivePost },
        { postcard_draggable: props.draggable }
      )}
      imageClassNames={`postcard__image postcard__image_${cardSize}`}
      imgUrl={props.post.imageUrl}
      imgClassNames={classNames("postcard__img", {
              postcard__img_top: props.post.isPositionTop,
            })}
      imgAlt={"preview"}
      dateMonth={months[dateObject.getMonth()]}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      deletePost={props.deletePost}
      deleteImage={props.deleteImage}
      addComment={props.addComment}
      cardSize={cardSize}
    />
  );
}

export default PostCard;