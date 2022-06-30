import PropTypes from 'prop-types';

function ArticleView({ 
  title, 
  category, 
  dateMonth,
  dateDay,
  dateYear,
  imageUrl, 
  author,
  description,
  fullText,
  by,
  textCategory,
  textPosted,
}) {
  return (
    <article className="article">
      <h2 className="article__title">{title}</h2>
      <ul className="article__info article-info">
        <li className="article-info__item">
          <span>{by}</span>
          &nbsp; 
          {`${author.firstName} ${author.lastName}`}
        </li>
        <li className="article-info__item capitalize">
          <span>{`${textCategory}:`}</span>
          &nbsp;
          {category}
        </li>
        <li className="article-info__item">
          <span>{`${textPosted}:`}</span>
          &nbsp;
          {`${dateMonth} ${dateDay}, ${dateYear}`}
        </li>
      </ul>
      <div className="article__image">
        <img src={imageUrl} alt="article main" />
      </div>
      <p className="article__description">{description}</p>
      <div className="article__text">
        {/* TODO find the best way to store and display the full text of an article */}
        {/* disabled the rule because the array consists of strings and has no unique keys. 
        And the map is only needed to style the text in paragraphs. */}
        {/* eslint-disable-next-line react/no-array-index-key */}
        {fullText.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </article>
  );
}

ArticleView.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  dateMonth: PropTypes.string,
  dateDay: PropTypes.number,
  dateYear: PropTypes.number,
  imageUrl: PropTypes.string,
  author: PropTypes.shape(),
  description: PropTypes.string,
  fullText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  by: PropTypes.string,
  textCategory: PropTypes.string,
  textPosted: PropTypes.string,
};

ArticleView.defaultProps = {
  title: '',
  category: '',
  dateMonth: '',
  dateDay: null,
  dateYear: null,
  imageUrl: '',
  author: {},
  description: '',
  fullText: ['Sorry not write yet'],
  by: '',
  textCategory: '',
  textPosted: '',
};

export default ArticleView;
