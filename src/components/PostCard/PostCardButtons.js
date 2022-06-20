import PropTypes from 'prop-types';

import Button from '../Button/Button';

function PostCardButtons({
  deletePost, deleteImage, addComment, handleActivePost
}) {
  return (
    <div className="postcard__buttons">
      {deletePost && (
        <Button
          logic={deletePost}
          content="Delete post"
          styles="button button_delete"
        />
      )}
      {deleteImage && (
        <Button
          logic={deleteImage}
          content="Delete image"
          styles="button button_delete"
        />
      )}
      {addComment && (
        <Button
          logic={addComment}
          content="Add comment"
          styles="button button_delete"
        />
      )}
      {handleActivePost && (
        <Button
          logic={handleActivePost}
          content="Select post"
          styles="button button_delete"
        />
      )}
    </div>
  );
}

PostCardButtons.propTypes = {
  deletePost: PropTypes.func, 
  deleteImage: PropTypes.func, 
  addComment: PropTypes.func,
  handleActivePost: PropTypes.func,
};

PostCardButtons.defaultProps = {
  deletePost: null,
  deleteImage: null,
  addComment: null,
  handleActivePost: null,
};

export default PostCardButtons;
