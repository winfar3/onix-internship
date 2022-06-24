import './Recipes.scss';

import { useContext } from 'react';

import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import Modal from '../../components/Modal/Modal';
import ModalContext from '../../context/ModalContext';

function Recipes() {
  const { showModal, showModalHandler } = useContext(ModalContext);
  return (
    <div className="recipes">
      <h2 className="recipes__title">Hello world!</h2>
      <h3 className="recipes__clock">
        It&apos;s&nbsp;
        &nbsp;now.
      </h3>
      {showModal && (<Modal><AddCommentForm /></Modal>)}
      <button
        onClick={() => showModalHandler()}
        type="button"
        className="button"
      >
        Modal
      </button>
    </div>
  );
}

export default Recipes;
