import PropTypes from 'prop-types';

import Pagination from '../../components/Pagination/Pagination';
import PostCard from '../../components/PostCard/PostCard';

function MainView({
  currentPosts,
  maxPageNumber,
  postsPerPage,
  mainRef,
  paginate,
  prevPage,
  nextPage,
}) {
  return (
    <main className="main" ref={mainRef}>
      {currentPosts.map((postCardItem, pos) => (
        <PostCard
          post={postCardItem}
          key={postCardItem.id}
          forcedCardSize={pos === 4 && 'big'}
        />
      ))}
      <Pagination
        maxPageNumber={maxPageNumber}
        postsPerPage={postsPerPage}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
}

MainView.propTypes = {
  currentPosts: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  maxPageNumber: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  mainRef: PropTypes.shape().isRequired,
  paginate: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};

export default MainView;
