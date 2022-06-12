import './AddPostForm.scss';

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import image1 from '../../assets/images/postcard/01.png';
import AddPostFormView from './AddPostFormView';

// TODO: choose the right id and order for a new post

function AddPostForm({
  lastOrder, addPost, handleShowAddForm 
}) {
  const [postCategory, setPostCategory] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [postFirstName, setPostFirstName] = useState('');
  const [postLastName, setPostLastName] = useState('');
  const [postDescription, setPostDescription] = useState('');
  
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

  const newDate = new Date();
  const newId = JSON.stringify(newDate);
  const currentDate = newId.slice(1, 11);

  const createPost = (e) => {
    e.preventDefault();
    const post = {
      id: newId,
      order: lastOrder + 1,
      cardSize: 'medium',
      imageUrl: image1,
      isPositionTop: false,
      category: postCategory,
      title: postTitle,
      date: currentDate, 
      author: {
        firstName: postFirstName,
        lastName: postLastName
      },
      description: postDescription
    };

    addPost(post);
    handleShowAddForm();
  };

  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        createPost(e);
      }
    };

    window.addEventListener('keyup', handleEnter);

    return () => window.removeEventListener('keyup', handleEnter);
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleShowAddForm();
      }
    };

    window.addEventListener('keyup', handleEscape);

    return () => window.removeEventListener('keyup', handleEscape);
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
  lastOrder: PropTypes.number.isRequired, 
  addPost: PropTypes.func.isRequired, 
  handleShowAddForm: PropTypes.func.isRequired,
};

export default AddPostForm;
