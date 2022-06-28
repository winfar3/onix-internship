import {
  arrayOf, 
  func, 
  string 
} from 'prop-types';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';

function RecipesView({
  comments,
  showWhen,
  toggleModal,
  addComment,
}) {
  return (
    <div className="recipes">
      <h2 className="recipes__title">Hello world!</h2>
      <ul className="recipes__list">
        {/* Disabled the rule because comments are added in an order that doesn't change later. */}
        {/* eslint-disable-next-line react/no-array-index-key */}
        {comments.map((item, index) => (<li key={index} className="recipes__item">{item}</li>))}
      </ul>
      {showWhen === 'addCommentForm' && (
        <Modal 
          toggleModal={toggleModal}
        >
          <AddCommentForm addComment={addComment} toggleModal={toggleModal} />
        </Modal>
      )}
      <Button 
        logic={() => toggleModal('addCommentForm')}
        styles="button recipes__btn"
        content="Add comment"
      />
    </div>
  );
}

RecipesView.propTypes = {
  comments: arrayOf(string),
  showWhen: string,
  toggleModal: func,
  addComment: func,
};

RecipesView.defaultProps = {
  comments: [''],
  showWhen: '',
  toggleModal() {},
  addComment() {},
};

export default RecipesView;
