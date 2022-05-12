import { Button } from "../Button/Button";
import "./PostCard.scss";

export function PostCard({id, cardSize, imageUrl, isPositionTop, category, title, date, author, description, deletePost, deleteImage, addComment, comment}) {
    
    return (
        <article className={"postcard postcard_" + cardSize} >
            <div className="postcard__image">
                <a href="!#">
                    <img 
                        src={imageUrl} 
                        className={isPositionTop ? "postcard__img postcard__img_top" : "postcard__img"} 
                        alt="preview"
                    />
                </a>
            </div>
            <a href="!#" className="postcard__category uppercase">{category}</a>
            <h2 className="postcard__title"><a href="!#">{title}</a></h2>
            <div className="postcard__info">
                <p className="postcard__date">{date.month} {date.day}, {date.year}</p>
                <a href="!#" className="postcard__author"><span>By</span> {author.firstName} {author.lastName}</a>
            </div>
            <div className="postcard__buttons">
                <Button 
                    logic={deletePost}
                    content={"Delete post"}
                    styles={"button button_delete"}
                />
                <Button 
                    logic={deleteImage}
                    content={"Delete image"}
                    styles={"button button_delete"}
                />
                <Button 
                    logic={addComment}
                    content={"Add comment"}
                    styles={"button button_delete"}
                />
            </div>
            {cardSize === "big" && <p className="postcard__desc">{description}</p>}
            {comment && <p className="postcard__desc">{comment}</p>}
        </article>
    );
}