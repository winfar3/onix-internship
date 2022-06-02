import PropTypes from "prop-types";

import PostCard from "../PostCard/PostCard";

function FeaturedPostsView({ postCardData }) {
  return (
    <div className="featured-posts">
      {postCardData.map((postCardItem) => (
        <PostCard post={postCardItem} key={postCardItem.id} />
      ))}
    </div>
  );
}

FeaturedPostsView.propTypes = {
    postCardData: PropTypes.array,
}

export default FeaturedPostsView;
