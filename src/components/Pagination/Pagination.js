import './Pagination.scss';

export function Pagination(props) {
  const pageNumbers = [...new Array(props.maxPageNumber)].map((item, pos) => pos + 1);

  return (
    <div className="pagination">
      <button 
        className="pagination__item pagination__item_prev uppercase"
        onClick={props.prevPage}
      >
        older post
      </button>
      {
        pageNumbers.map(number => (
          <button 
            className="pagination__item uppercase" 
            key={number}
            onClick={() => props.paginate(number)}
          >
            {number}
          </button>
        ))
      }
      <button 
        className="pagination__item pagination__item_next uppercase"
        onClick={props.nextPage}
      >
        next post
      </button>
    </div>
  );
}