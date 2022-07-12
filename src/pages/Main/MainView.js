import PropTypes from 'prop-types';

import Pagination from '../../components/Pagination/Pagination';
import PostCard from '../../components/PostCard/PostCard';
import Hero from '../../components/Hero/Hero';
import Layout from '../../layout/Layout';

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
    <Layout renderContent={<Hero />}>
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
    </Layout>
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
