// import PropTypes from 'prop-types';

function AddCommentFormView() {
  return (
    <form action="">
      <div className="postForm__item">
        <textarea 
          type="text"
          name="comment"
          placeholder="Your comment"
          autoComplete="off"
          cols={60}
          rows={10}
          className="postForm__input"
        />
      </div>
      <div>
        <button type="submit" className="button">Add</button>
      </div>
    </form>
  );
}

// AddCommentFormView.propTypes = {
  
// }

export default AddCommentFormView;
