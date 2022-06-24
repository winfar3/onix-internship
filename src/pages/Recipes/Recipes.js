import './Recipes.scss';

import { useContext } from 'react';

import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import Modal from '../../components/Modal/Modal';
import ModalContext from '../../context/ModalContext';
import useLocalStorage from '../../hooks/useLocalStorage';

function Recipes() {
  const { showModal, showModalHandler } = useContext(ModalContext);
  const [comments, setComments] = useLocalStorage([], 'comments');

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="recipes">
      <h2 className="recipes__title">Hello world!</h2>
      <ul className="recipes__list">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {comments.map((item, index) => (<li key={index} className="recipes__item">{item}</li>))}
      </ul>
      {showModal && (<Modal><AddCommentForm addComment={addComment} /></Modal>)}
      <button
        onClick={() => showModalHandler()}
        type="button"
        className="button recipes__btn"
      >
        Add comment
      </button>
    </div>
  );
}

export default Recipes;
