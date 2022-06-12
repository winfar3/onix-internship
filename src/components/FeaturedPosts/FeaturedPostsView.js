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
      order: PropTypes.number,
      cardSize: PropTypes.string,
      imageUrl: PropTypes.string,
      isPositionTop: PropTypes.bool,
      category: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string, 
      author: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
      }),
      description: PropTypes.string,
    })
  ).isRequired,
};

export default FeaturedPostsView;
