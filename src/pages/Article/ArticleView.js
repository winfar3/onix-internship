import PropTypes from 'prop-types';

function ArticleView({ 
  title, category, createdDate, imageUrl, description 
}) {
  return (
    <article className="article">
      <h2 className="article__title">{title}</h2>
      <ul className="article__info article-info">
        <li className="article-info__item">By Name Name</li>
        <li className="article-info__item">
          Category: 
          {category}
        </li>
        <li className="article-info__item">
          Posted: 
          {createdDate}
        </li>
      </ul>
      <div className="article__image">
        <img src={imageUrl} alt="article main" />
      </div>
      <p className="article__description">{description}</p>
    </article>
  );
}

ArticleView.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ArticleView;
