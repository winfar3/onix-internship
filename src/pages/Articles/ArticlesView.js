import PropTypes from 'prop-types';
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';

import AddPostForm from '../../components/AddPostForm/AddPostForm';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import PostCard from '../../components/PostCard/PostCard';
import byField from '../../helpers/byField';

function ArticlesView({
  addPost,
  lastOrder,
  sornOnPage,
  postCardData,
  isSorted,
  sortBy,
  onActivePost,
  deletePost,
  deleteImage,
  addComment,
  handleActivePost,
  activePostElement,
  toggleModal,
  showWhen,
  buttonDate,
  buttonId,
  buttonPost,
}) {
  return (
    <main className="main">
      {showWhen === 'addPostForm' && (
        <Modal toggleModal={toggleModal}>
          <AddPostForm
            toggleModal={toggleModal}
            addPost={addPost}
            lastOrder={lastOrder}
          />
        </Modal>
      )}
      {showWhen === 'addPostCommentForm' && (
        <Modal toggleModal={toggleModal}>
          <AddCommentForm addComment={addComment} toggleModal={toggleModal} />
        </Modal>
      )}

      <div className="buttonsWrap">
        <Button
          logic={() => sornOnPage('date')}
          content={buttonDate}
          styles="button button_article"
        />
        <Button
          logic={() => sornOnPage('id')}
          content={buttonId}
          styles="button button_article"
        />
        <Button
          logic={() => toggleModal('addPostForm')}
          content={buttonPost}
          styles="button button_article"
        />
      </div>
      {postCardData.sort(byField(sortBy, isSorted)).map((postCardItem, pos) => (
        <PostCard
          post={postCardItem}
          key={postCardItem.id}
          forcedCardSize="listSize"
          onActivePost={onActivePost === pos}
          deletePost={() => deletePost(pos)}
          deleteImage={() => deleteImage(pos)}
          addComment={() => addComment(pos)}
          handleActivePost={() => handleActivePost(pos)}
          activePostElement={onActivePost === pos ? activePostElement : null}
          toggleModal={toggleModal}
        />
      ))}
    </main>
  );
}

ArticlesView.propTypes = {
  addPost: PropTypes.func.isRequired,
  lastOrder: PropTypes.number.isRequired,
  sornOnPage: PropTypes.func.isRequired,
  postCardData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  isSorted: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  onActivePost: PropTypes.number,
  deletePost: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  handleActivePost: PropTypes.func.isRequired,
  activePostElement: PropTypes.shape().isRequired,
  toggleModal: PropTypes.func.isRequired,
  showWhen: PropTypes.string.isRequired,
  buttonDate: PropTypes.string.isRequired,
  buttonId: PropTypes.string.isRequired,
  buttonPost: PropTypes.string.isRequired,
};

ArticlesView.defaultProps = {
  onActivePost: null,
};

export default ArticlesView;
