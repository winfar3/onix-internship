import "./Pagination.scss";

import PropTypes from "prop-types";

function Pagination({ maxPageNumber, prevPage, paginate, nextPage }) {
  const pageNumbers = [...new Array(maxPageNumber)].map((item, pos) => pos + 1);

  return (
    <div className="pagination">
      <button
        className="pagination__item pagination__item_prev uppercase"
        onClick={prevPage}
      >
        older post
      </button>
      {pageNumbers.map((number) => (
        <button
          className="pagination__item uppercase"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="pagination__item pagination__item_next uppercase"
        onClick={nextPage}
      >
        next post
      </button>
    </div>
  );
}

Pagination.propTypes = {
  maxPageNumber: PropTypes.number, 
  prevPage: PropTypes.func, 
  paginate: PropTypes.func, 
  nextPage: PropTypes.func,
}

export default Pagination;