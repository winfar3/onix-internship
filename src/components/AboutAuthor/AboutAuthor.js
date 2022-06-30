import './AboutAuthor.scss';

import useLocalization from '../../hooks/useLocalization';

import authorProto from '../../assets/images/aboutAuthor/photo.jpg';

function AboutAuthor() {
  const [t] = useLocalization();

  return (
    <article className="about-author__block about-author-block">
      <div className="about-author-block__image">
        <a href="!#">
          <img src={authorProto} className="about-author-block__img" alt="author" />
        </a>
      </div>
      <h4 className="about-author-block__title">
        <a href="!#">{t('AboutAuthor_name')}</a>
      </h4>
      <p className="about-author-block__subtitle">{t('AboutAuthor_subtitle')}</p>
      <p className="about-author-block__desc">{t('AboutAuthor_desc')}</p>
      <a href="!#" className="about-author-block__link">{t('AboutAuthor_link')}</a>
    </article>
  );
}

export default AboutAuthor;
