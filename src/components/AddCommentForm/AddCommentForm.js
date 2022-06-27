import { useContext, useEffect, useState } from 'react';
import { func } from 'prop-types';

import AddCommentFormView from './AddCommentFormView';
import ModalContext from '../../context/ModalContext';

function AddCommentForm({ addComment }) {
  const [commentText, setCommentText] = useState('');
  const { showModalHandler, commentedPostPos } = useContext(ModalContext);

  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  };

  const createComment = (e) => {
    e.preventDefault();
    const comment = commentText;
    if (comment.length > 0) {
      addComment(commentedPostPos, comment);
    }
    showModalHandler();
  };

  // TODO: Separate a repeating function
  useEffect(() => {
    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        createComment(e);
      }
    };

    window.addEventListener('keyup', handleEnter);

    return () => window.removeEventListener('keyup', handleEnter);
  });

  return (
    <AddCommentFormView 
      createComment={createComment}
      commentText={commentText}
      handleCommentText={handleCommentText}
    />
  );
}

AddCommentForm.propTypes = {
  addComment: func,
};

AddCommentForm.defaultProps = {
  addComment() {},
};

export default AddCommentForm;
