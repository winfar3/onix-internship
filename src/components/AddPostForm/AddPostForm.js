import "./AddPostForm.scss";

import { useState, useEffect } from "react";
import PropTypes from "prop-types"

import image1 from "../../assets/images/postcard/01.png";
import AddPostFormView from "./AddPostFormView";

// TODO: choose the right id and order for a new post

function AddPostForm({ lastId, lastOrder, addPost, handleShowAddForm }) {
  const [postCategory, setPostCategory] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postFirstName, setPostFirstName] = useState("");
  const [postLastName, setPostLastName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  
  const handlePostCategoryChange = (e) => {
    setPostCategory(e.target.value);
  };

  const handlePostTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const handlePostFirstNameChange = (e) => {
    setPostFirstName(e.target.value);
  };

  const handlePostLastNameChange = (e) => {
    setPostLastName(e.target.value);
  };

  const handlePostDescriptionChange = (e) => {
    setPostDescription(e.target.value);
  };

  const createPost = (e) => {
    e.preventDefault();
    const post = {
      id: lastId + 1,
      order: lastOrder + 1,
      cardSize: "medium",
      imageUrl: image1,
      isPositionTop: false,
      category: postCategory,
      title: postTitle,
      date: "2020-06-01", 
      author: {
        firstName: postFirstName,
        lastName: postLastName
      },
      description: postDescription
    };

    addPost(post);
    handleShowAddForm();
  }

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === "Enter") {
        createPost(e);
      }
    };

    window.addEventListener("keyup", handleEnter);

    return () => window.removeEventListener("keyup", handleEnter);
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleShowAddForm();
      }
    }

    window.addEventListener("keyup", handleEscape);

    return () => window.removeEventListener("keyup", handleEscape);
  });

  return (
    <AddPostFormView 
      createPost={createPost}
      postCategory={postCategory}
      handlePostCategoryChange={handlePostCategoryChange}
      postTitle={postTitle}
      handlePostTitleChange={handlePostTitleChange}
      postFirstName={postFirstName}
      handlePostFirstNameChange={handlePostFirstNameChange}
      postLastName={postLastName}
      handlePostLastNameChange={handlePostLastNameChange}
      postDescription={postDescription}
      handlePostDescriptionChange={handlePostDescriptionChange}
      handleShowAddForm={handleShowAddForm}
    />
  );
}

AddPostForm.propTypes = {
  lastId: PropTypes.string, 
  lastOrder: PropTypes.number, 
  addPost: PropTypes.func, 
  handleShowAddForm: PropTypes.func,
}

export default AddPostForm;