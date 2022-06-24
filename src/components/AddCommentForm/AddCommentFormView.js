import { func, string } from 'prop-types';

function AddCommentFormView({ 
  createComment,
  commentText,
  handleCommentText, 
}) {
  return (
    <form action="" onSubmit={createComment}>
      <div className="postForm__item">
        <textarea 
          type="text"
          name="comment"
          placeholder="Your comment"
          autoComplete="off"
          cols={60}
          rows={10}
          value={commentText}
          onChange={handleCommentText}
          className="postForm__input"
        />
      </div>
      <div>
        <button type="submit" className="button">Add</button>
      </div>
    </form>
  );
}

AddCommentFormView.propTypes = {
  createComment: func.isRequired,
  commentText: string.isRequired,
  handleCommentText: func.isRequired,
};

export default AddCommentFormView;
