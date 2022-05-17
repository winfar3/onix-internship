import { Button } from "../Button/Button";
import "./PostCard.scss";
import PostCardDateView from "./PostCardDateView";
import PostCardImageView from "./PostCardImageView";

export function PostCard({id, cardSize, imageUrl, isPositionTop, category, title, date, author, description, deletePost, deleteImage, addComment, comment}) {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const dateObject = new Date(date);
    
    return (
        <article className={"postcard postcard_" + cardSize} >
            <div className="postcard__image">
                <a href="!#">
                    <PostCardImageView 
                        imageUrl={imageUrl}
                        classNames={isPositionTop ? "postcard__img postcard__img_top" : "postcard__img"}
                        alt={"preview"}
                    />
                </a>
            </div>
            <a href="!#" className="postcard__category uppercase">{category}</a>
            <h2 className="postcard__title"><a href="!#">{title}</a></h2>
            <div className="postcard__info">
                <PostCardDateView 
                    year={dateObject.getFullYear()}
                    month={months[dateObject.getMonth()]}
                    day={dateObject.getDate()}
                />
                <a href="!#" className="postcard__author"><span>By</span> {author.firstName} {author.lastName}</a>
            </div>
            <div className="postcard__buttons">
                {
                    deletePost ? 
                    <Button 
                        logic={deletePost}
                        content={"Delete post"}
                        styles={"button button_delete"}
                    />
                    : null
                }
                {
                    deleteImage ?
                    <Button 
                        logic={deleteImage}
                        content={"Delete image"}
                        styles={"button button_delete"}
                    />
                    : null
                }
                {
                    addComment ? 
                    <Button 
                        logic={addComment}
                        content={"Add comment"}
                        styles={"button button_delete"}
                    />
                    : null
                }
            </div>
            {cardSize === "big" && <p className="postcard__desc">{description}</p>}
            {comment && <p className="postcard__desc">{comment}</p>}
        </article>
    );
}