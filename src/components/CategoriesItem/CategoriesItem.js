import './CategoriesItem.scss';

import PropTypes from 'prop-types';

function CategoriesItem({ category }) {
  const { title } = category;
  const { url } = category;
  const { number } = category;
  const linkRoot = '/onix-internship/';

  return (
    <li className="categoris__item">
      <a href={linkRoot + url} className="categoris__link">
        {title}
      </a>
      <p>
        (
        {
          number
        }
        )
      </p>
    </li>
  );
}

CategoriesItem.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    number: PropTypes.number,
  }).isRequired,
};

export default CategoriesItem;
