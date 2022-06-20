import PropTypes from 'prop-types';

import PostCard from '../PostCard/PostCard';

function FeaturedPostsView({ postCardData }) {
  return (
    <div className="featured-posts">
      {postCardData.map((postCardItem) => (
        <PostCard post={postCardItem} key={postCardItem.id} forcedCardSize="small" />
      ))}
    </div>
  );
}

FeaturedPostsView.propTypes = {
  postCardData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ).isRequired,
};

export default FeaturedPostsView;
