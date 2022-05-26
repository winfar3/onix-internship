import { useEffect } from "react";
import "./PostCard.scss";
import PostCardButtons from "./PostCardButtons";

import PostCardDateView from "./PostCardDateView";
import PostCardImageView from "./PostCardImageView";

export function PostCard(props) {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const cardSize = props.forcedCardSize ? props.forcedCardSize : props.post.cardSize;
    const onActivePost = props.onActivePost ? "postcard_active" : "";
    const isDraggable = props.draggable ? "postcard_draggable" : "";
    const dateObject = new Date(props.post.date);
    
    /* COMMENT
    * Это пример с learn.javascript, но я не уверен, что в моем случае нужно создавать элемент image.
    * Есть ли другой способ проверить загружено ли изображение и нужно ли использовать другой способ?
    **/
    let image = document.createElement('img');
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
        }
        image.onerror = () => {
            console.log(`ERROR. Image for post ${props.post.id} not loaded`)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image.src]);

    return (
        <article 
            onClick={props.handleActivePost} 
            draggable={props.draggable}
            onDragStart={(e) => props.dragStartHandler(e, props.post)}
            onDragOver={(e) => props.dragOverHandler(e)}
            onDrop={(e) => props.dropHandler(e, props.post)}
            className={`postcard postcard_${cardSize} ${onActivePost} ${isDraggable}`} 
        >
            <div className={`postcard__image postcard__image_${cardSize}`}>
                <a href="!#">
                    <PostCardImageView 
                        imageUrl={props.post.imageUrl}
                        classNames={props.post.isPositionTop ? "postcard__img postcard__img_top" : "postcard__img"}
                        alt={"preview"}
                    />
                </a>
            </div>
            { cardSize !== "listSize" &&
                <a href="!#" className="postcard__category uppercase">{props.post.category}</a>
            }
            <h2 className="postcard__title"><a href="!#">{props.post.title}</a></h2>
            <div className="postcard__info">
                <PostCardDateView 
                    year={dateObject.getFullYear()}
                    month={months[dateObject.getMonth()]}
                    day={dateObject.getDate()}
                />
                <a href="!#" className="postcard__author"><span>By</span> {props.post.author.firstName} {props.post.author.lastName}</a>
            </div>
            {cardSize === "big" && <p className="postcard__desc">{props.post.description}</p>}
            {props.comment && <p className="postcard__desc">{props.comment}</p>}
            <PostCardButtons 
                deletePost={props.deletePost}
                deleteImage={props.deleteImage}
                addComment={props.addComment}
            />
        </article>
    );
}