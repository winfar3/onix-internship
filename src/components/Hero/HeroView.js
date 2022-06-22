import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function HeroView({
  id,
  title,
  dateMonth,
  dateDay,
  dateYear,
  author,
  imageUrl,
}) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__title">
            <Link to={`/onix-internship/article/${id}`}>
              {title}
            </Link>
          </h1>
          <div className="hero__info hero-info">
            <p className="hero-info__date">{`${dateMonth} ${dateDay}, ${dateYear}`}</p>
            <a href="!#" className="hero-info__author">
              <span>By &nbsp;</span> 
              {`${author.firstName} ${author.lastName}`}
            </a>
            <a href="!#" className="hero-info__comments">
              4 comments
            </a>
          </div>
          <div className="hero__image">
            <img
              src={imageUrl}
              alt="backgraund for grand post"
              className="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

HeroView.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateMonth: PropTypes.string.isRequired,
  dateDay: PropTypes.number.isRequired,
  dateYear: PropTypes.number.isRequired,
  author: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default HeroView;
