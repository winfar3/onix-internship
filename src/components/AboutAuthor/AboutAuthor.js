import './AboutAuthor.scss';
import authorProto from '../../assets/images/aboutAuthor/photo.jpg';

function AboutAuthor() {
  return (
    <article className="about-author__block about-author-block">
      <div className="about-author-block__image">
        <a href="!#">
          <img src={authorProto} className="about-author-block__img" alt="author" />
        </a>
      </div>
      <h4 className="about-author-block__title">
        <a href="!#">Kate Willems</a>
      </h4>
      <p className="about-author-block__subtitle">Food & cooking bloger</p>
      <p className="about-author-block__desc">
        Hi, I&apos;m Sonia. Cooking is the way I express my creative side to the
        world. Welcome to my Kitchen Corner on…
      </p>
      <a href="!#" className="about-author-block__link">
        Continue Reading
      </a>
    </article>
  );
}

export default AboutAuthor;
