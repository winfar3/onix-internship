import "./PostCard.scss";

import { useEffect } from "react";
import classNames from "classnames";

import PostCardViev from "./PostCardViev";

function PostCard({
  post,
  forcedCardSize,
  handleActivePost,
  draggable,
  dragStartHandler,
  dragOverHandler,
  dropHandler,
  onActivePost,
  deletePost,
  deleteImage,
  addComment
}) {
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
  const cardSize = forcedCardSize
    ? forcedCardSize
    : post.cardSize;
  const dateObject = new Date(post.date);

  /* COMMENT
   * Это пример с learn.javascript, но я не уверен, что в моем случае нужно создавать элемент image.
   * Есть ли другой способ проверить загружено ли изображение и нужно ли использовать другой способ?
   **/
  let image = document.createElement("img");
  image.src = post.imageUrl;
  /* --- */

  /* COMMENT
   * React Hook useEffect has missing dependencies: 'image' and 'post.id'.
   * Either include them or remove the dependency array
   * Видел эту ошибку, но не понял как ее убрать, ведь мне нужна именно проверка меняется ли image.src
   **/
  useEffect(() => {
    image.onload = () => {
      console.log(`Image for post ${post.id} loaded`);
    };
    image.onerror = () => {
      console.log(`ERROR. Image for post ${post.id} not loaded`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.src]);

  return (
    <PostCardViev 
      post={post}
      handleActivePost={handleActivePost}
      draggable={draggable}
      dragStartHandler={dragStartHandler}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
      articleclassNames={classNames(
        "postcard",
        `postcard_${cardSize}`,
        { postcard_active: onActivePost },
        { postcard_draggable: draggable }
      )}
      imageClassNames={`postcard__image postcard__image_${cardSize}`}
      imgUrl={post.imageUrl}
      imgClassNames={classNames("postcard__img", {
              postcard__img_top: post.isPositionTop,
            })}
      imgAlt={"preview"}
      dateMonth={months[dateObject.getMonth()]}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      deletePost={deletePost}
      deleteImage={deleteImage}
      addComment={addComment}
      cardSize={cardSize}
    />
  );
}

export default PostCard;