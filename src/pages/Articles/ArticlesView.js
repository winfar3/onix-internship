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
  showModalHandler,
  place,
}) {
  return (
    <main className="main">
      {place === 'addPostForm' && (
        <Modal>
          <AddPostForm
            showModalHandler={showModalHandler}
            addPost={addPost}
            lastOrder={lastOrder}
          />
        </Modal>
      )}
      {place === 'addPostComment' && (
        <Modal>
          <AddCommentForm addComment={addComment} />
        </Modal>
      )}

      <div className="buttonsWrap">
        <Button
          logic={() => sornOnPage('date')}
          content="Sort by date"
          styles="button button_article"
        />
        <Button
          logic={() => sornOnPage('id')}
          content="Sort by id"
          styles="button button_article"
        />
        <Button
          logic={() => showModalHandler('addPostForm')}
          content="Add post"
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
          showModalHandler={showModalHandler}
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
  showModalHandler: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
};

ArticlesView.defaultProps = {
  onActivePost: null,
};

export default ArticlesView;
