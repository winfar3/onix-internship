import "./PostCard.scss";
import PostCardButtons from "./PostCardButtons";

import PostCardDateView from "./PostCardDateView";
import PostCardImageView from "./PostCardImageView";

export function PostCard(props) {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const cardSize = props.forcedCardSize ? props.forcedCardSize : props.post.cardSize;
    const dateObject = new Date(props.post.date);
    
    return (
        <article onClick={props.handleActivePost} className={"postcard postcard_" + cardSize} >
            <div className="postcard__image">
                <a href="!#">
                    <PostCardImageView 
                        imageUrl={props.post.imageUrl}
                        classNames={props.post.isPositionTop ? "postcard__img postcard__img_top" : "postcard__img"}
                        alt={"preview"}
                    />
                </a>
            </div>
            <a href="!#" className="postcard__category uppercase">{props.post.category}</a>
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