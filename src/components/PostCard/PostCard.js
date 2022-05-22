import { Button } from "../Button/Button";
import "./PostCard.scss";
import PostCardDateView from "./PostCardDateView";
import PostCardImageView from "./PostCardImageView";

export function PostCard(props) {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const dateObject = new Date(props.post.date);
    
    return (
        <article onClick={props.handleActivePost} className={"postcard postcard_" + props.post.cardSize} >
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
            <div className="postcard__buttons">
                {
                    props.deletePost ? 
                    <Button 
                        logic={props.deletePost}
                        content={"Delete post"}
                        styles={"button button_delete"}
                    />
                    : null
                }
                {
                    props.deleteImage ?
                    <Button 
                        logic={props.deleteImage}
                        content={"Delete image"}
                        styles={"button button_delete"}
                    />
                    : null
                }
                {
                    props.addComment ? 
                    <Button 
                        logic={props.addComment}
                        content={"Add comment"}
                        styles={"button button_delete"}
                    />
                    : null
                }
            </div>
            {props.post.cardSize === "big" && <p className="postcard__desc">{props.post.description}</p>}
            {props.comment && <p className="postcard__desc">{props.comment}</p>}
        </article>
    );
}