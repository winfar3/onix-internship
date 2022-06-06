import PropTypes from "prop-types";
import { Pagination } from "../../components/Pagination/Pagination";
import PostCard from "../../components/PostCard/PostCard";

function MainView({ 
  currentPosts,
  maxPageNumber,
  postsPerPage,
  paginate,
  prevPage,
  nextPage
}) {
  return (
    <main className="main">
      {currentPosts.map((postCardItem) => (
        <PostCard post={postCardItem} key={postCardItem.id} />
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
  currentPosts: PropTypes.array,
  maxPageNumber: PropTypes.number,
  postsPerPage: PropTypes.number,
  paginate: PropTypes.func,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
};

export default MainView;
