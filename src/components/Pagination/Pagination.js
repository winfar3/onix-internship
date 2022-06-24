import './Pagination.scss';

import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Pagination({ 
  maxPageNumber, prevPage, paginate, nextPage 
}) {
  const pageNumbers = [...new Array(maxPageNumber)].map((item, pos) => pos + 1);

  return (
    <div className="pagination">
      <Button 
        logic={prevPage}
        styles="pagination__item pagination__item_prev uppercase"
        content="older post"
      />
      {pageNumbers.map((number) => (
        <Button 
          key={number}
          logic={() => paginate(number)}
          styles="pagination__item uppercase"
          content={number}
        />
      ))}
      <Button 
        logic={nextPage}
        styles="pagination__item pagination__item_next uppercase"
        content="next post"
      />
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
