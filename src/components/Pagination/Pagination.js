import './Pagination.scss';

import { useState } from 'react';

export function Pagination(props) {
  const maxPosts = 2;
  const [maxPages] = useState(Math.ceil(props.postsAmount / maxPosts));

  return (
    <div className="pagination">
      <p className="pagination__item pagination__item_prev uppercase">older post</p>
      <button className="pagination__item uppercase">1</button>
      {/* <button className="pagination__item uppercase">2</button> */}
      {/* <button className="pagination__item uppercase">3</button> */}
      {/* <p className="pagination__item uppercase">...</p> */}
      <button className="pagination__item uppercase">{maxPages}</button>
      <button className="pagination__item pagination__item_next uppercase">
        next post
      </button>
    </div>
  );
}