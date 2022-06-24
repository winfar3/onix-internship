import {
  arrayOf, 
  bool, 
  func, 
  string 
} from 'prop-types';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import Modal from '../../components/Modal/Modal';

function RecipesView({
  comments,
  showModal,
  showModalHandler,
  addComment,
}) {
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

RecipesView.propTypes = {
  comments: arrayOf(string),
  showModal: bool,
  showModalHandler: func,
  addComment: func,
};

RecipesView.defaultProps = {
  comments: [''],
  showModal: false,
  showModalHandler() {},
  addComment() {},
};

export default RecipesView;
