import PropTypes from 'prop-types';
import Button from '../Button/Button';

function AddPostFormView({
  createPost,
  postCategory,
  handlePostCategoryChange,
  postTitle,
  handlePostTitleChange,
  postFirstName,
  handlePostFirstNameChange,
  postLastName,
  handlePostLastNameChange,
  postDescription,
  handlePostDescriptionChange,
}) {
  return (
    <form action="" className="postForm" onSubmit={createPost}>
      <div className="postForm__item">
        <input
          type="text"
          name="category"
          placeholder="category"
          autoComplete="off"
          value={postCategory}
          onChange={handlePostCategoryChange}
          className="postForm__input"
        />
      </div>
      <div className="postForm__item">
        <input
          type="text"
          name="title"
          placeholder="title"
          autoComplete="off"
          value={postTitle}
          onChange={handlePostTitleChange}
          className="postForm__input"
        />
      </div>
      <div className="postForm__item">
        <input
          type="text"
          name="firstName"
          placeholder="author first name"
          autoComplete="off"
          value={postFirstName}
          onChange={handlePostFirstNameChange}
          className="postForm__input"
        />
      </div>
      <div className="postForm__item">
        <input
          type="text"
          name="lastName"
          placeholder="author last name"
          autoComplete="off"
          value={postLastName}
          onChange={handlePostLastNameChange}
          className="postForm__input"
        />
      </div>
      <div className="postForm__item">
        <textarea
          name="description"
          placeholder="description"
          autoComplete="off"
          value={postDescription}
          onChange={handlePostDescriptionChange}
          className="postForm__input"
        />
      </div>
      <div className="postForm__item postForm__buttons">
        <Button 
          isSending
          styles="button button_add"
          content="Add"
        />
      </div>
    </form>
  );
}

AddPostFormView.propTypes = {
  createPost: PropTypes.func.isRequired,
  postCategory: PropTypes.string.isRequired,
  handlePostCategoryChange: PropTypes.func.isRequired,
  postTitle: PropTypes.string.isRequired,
  handlePostTitleChange: PropTypes.func.isRequired,
  postFirstName: PropTypes.string.isRequired,
  handlePostFirstNameChange: PropTypes.func.isRequired,
  postLastName: PropTypes.string.isRequired,
  handlePostLastNameChange: PropTypes.func.isRequired,
  postDescription: PropTypes.string.isRequired,
  handlePostDescriptionChange: PropTypes.func.isRequired,
};

export default AddPostFormView;
