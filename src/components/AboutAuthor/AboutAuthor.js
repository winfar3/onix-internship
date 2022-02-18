import "./AboutAuthor.scss";
import authorProto from "../../assets/images/aboutAuthor/photo.jpg";

export function AboutAuthor() {
    return(
        // <section className="sidebar__about-author about-author">
        //     <h3 className="about-author__title">About the author</h3>
            <article className="about-author__block about-author-block">
                <div className="about-author-block__image">
                    <a href="#"><img src={authorProto} className="about-author-block__img"/></a>
                </div>
                <h4 className="about-author-block__title"><a href="#">Kate Willems</a></h4>
                <p className="about-author-block__subtitle">Food & cooking bloger</p>
                <p className="about-author-block__desc">Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</p>
                <a href="#" className="about-author-block__link">Continue Reading</a>
            </article>
        // </section>
    );
}