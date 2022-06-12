import './Pagination.scss';

import PropTypes from 'prop-types';

function Pagination({ 
  maxPageNumber, prevPage, paginate, nextPage 
}) {
  const pageNumbers = [...new Array(maxPageNumber)].map((item, pos) => pos + 1);

  return (
    <div className="pagination">
      <button
        type="button"
        onClick={prevPage}
        className="pagination__item pagination__item_prev uppercase"
      >
        older post
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          type="button"
          onClick={() => paginate(number)}
          className="pagination__item uppercase"
        >
          {number}
        </button>
      ))}
      <button
        type="button"
        onClick={nextPage}
        className="pagination__item pagination__item_next uppercase"
      >
        next post
      </button>
    </div>
  );
}

Pagination.propTypes = {
  maxPageNumber: PropTypes.number.isRequired,
  prevPage: PropTypes.func.isRequired,
  paginate: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default Pagination;
