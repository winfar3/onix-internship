import "./Hero.scss";
import heroBg from "../../assets/images/hero/hero-bg.jpg";

export function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__wrapper">
                    <h1 className="hero__title"><a href="#">One of Saturn’s largest rings may be newer than anyone</a></h1>
                    <div className="hero__info hero-info">
                        <p className="hero-info__date">June 6, 2019</p>
                        <a href="#" className="hero-info__author"><span>By</span> Rickie Baroch</a>
                        <a href="#" className="hero-info__comments">4 comments</a>
                    </div>
                    <div className="hero__image">
                        <img 
                            src={heroBg}
                            className="hero__img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}