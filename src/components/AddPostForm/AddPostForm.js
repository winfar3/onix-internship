import "./AddPostForm.scss";

import { useState, useEffect } from "react";

import { Button } from "../Button/Button";

import image1 from "../../assets/images/postcard/01.png";

export function AddPostForm(props) {
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
      id: props.lastId + 1,
      order: props.lastOrder + 1,
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

    props.addPost(post);
    props.handleShowAddForm();
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
        props.handleShowAddForm();
      }
    }

    window.addEventListener("keyup", handleEscape);

    return () => window.removeEventListener("keyup", handleEscape);
  });

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
            logic={props.handleShowAddForm}
            content={"Close"}
            styles={"button button_add"}
          />
        </div>
      </form>
      <div className="overlay"></div>
    </>
  );
}
