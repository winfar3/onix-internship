import "./PostCard.scss";

import { useEffect } from "react";
import classNames from "classnames";

import PostCardViev from "./PostCardViev";

export function PostCard(props) {
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
    />
    // <article
    //   // TODO: do not make the post active when clicking on the buttons
    //   onClick={props.handleActivePost}
    //   draggable={props.draggable}
    //   onDragStart={(e) => props.dragStartHandler(e, props.post)}
    //   onDragOver={(e) => props.dragOverHandler(e)}
    //   onDrop={(e) => props.dropHandler(e, props.post)}
    //   className={classNames(
    //     "postcard",
    //     `postcard_${cardSize}`,
    //     { postcard_active: props.onActivePost },
    //     { postcard_draggable: props.draggable }
    //   )}
    // >
    //   <div className={`postcard__image postcard__image_${cardSize}`}>
    //     <a href="!#">
    //       <PostCardImageView
    //         imageUrl={props.post.imageUrl}
    //         classNames={classNames("postcard__img", {
    //           postcard__img_top: props.post.isPositionTop,
    //         })}
    //         alt={"preview"}
    //       />
    //     </a>
    //   </div>
    //   {cardSize !== "listSize" && (
    //     <a href="!#" className="postcard__category uppercase">
    //       {props.post.category}
    //     </a>
    //   )}
    //   <h2 className="postcard__title">
    //     <a href="!#">{props.post.title}</a>
    //   </h2>
    //   <div className="postcard__info">
    //     <PostCardDateView
    //       year={dateObject.getFullYear()}
    //       month={months[dateObject.getMonth()]}
    //       day={dateObject.getDate()}
    //     />
    //     <a href="!#" className="postcard__author">
    //       <span>By</span> {props.post.author.firstName}{" "}
    //       {props.post.author.lastName}
    //     </a>
    //   </div>
    //   {cardSize === "big" && (
    //     <p className="postcard__desc">{props.post.description}</p>
    //   )}
    //   {props.post.comment && (
    //     <p className="postcard__desc">{props.post.comment}</p>
    //   )}
    //   <PostCardButtons
    //     deletePost={props.deletePost}
    //     deleteImage={props.deleteImage}
    //     addComment={props.addComment}
    //   />
    // </article>
  );
}
