import PostCard from "../PostCard/PostCard";

function FeaturedPostsView({ postCardData }) {
  return(
    <div className="featured-posts">
        {postCardData.map(postCardItem =>
            <PostCard post={postCardItem} key={postCardItem.id} />
        )}
    </div>
);
}

export default FeaturedPostsView;