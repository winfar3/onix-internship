import { Button } from "../Button/Button";

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
  handleShowAddForm,
}) {
  return (
    <>
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
          <button type="submit" className="button button_add">
            Add
          </button>
          <Button
            logic={handleShowAddForm}
            content={"Close"}
            styles={"button button_add"}
          />
        </div>
      </form>
      <div className="overlay"></div>
    </>
  );
}

export default AddPostFormView;
