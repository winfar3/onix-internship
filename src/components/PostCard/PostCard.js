import "./PostCard.scss";

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

  const imgOnLoad = () => {
    console.log(`Image for post ${post.id} loaded`);
  }

  const imgOnError = () => {
    console.log(`ERROR. Image for post ${post.id} not loaded`);
  }

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
      imgOnLoad={imgOnLoad}
      imgOnError={imgOnError}
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