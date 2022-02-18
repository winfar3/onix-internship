import "./PostCard.scss";

export function PostCard({id, cardSize, imageUrl, isPositionTop, category, title, date, author, description}) {
    return (
        <article className={"postcard postcard_" + cardSize} >
            <div className="postcard__image">
                <a href="#"><img src={imageUrl} className={isPositionTop ? "postcard__img postcard__img_top" : "postcard__img"} /></a>
            </div>
            <a href="#" className="postcard__category uppercase">{category}</a>
            <h2 className="postcard__title"><a href="#">{title}</a></h2>
            <div className="postcard__info">
                <p className="postcard__date">{date}</p>
                <a href="#" className="postcard__author"><span>By</span> {author}</a>
            </div>
            {cardSize === "big" && <p className="postcard__desc">{description}</p>}
        </article>
    );
}