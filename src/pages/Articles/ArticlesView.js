import PropTypes from 'prop-types';

import AddPostForm from '../../components/AddPostForm/AddPostForm';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import PostCard from '../../components/PostCard/PostCard';

function ArticlesView({
  addPost,
  lastOrder,
  sortByDate,
  sortById,
  postCardData,
  byField,
  sortBy,
  onActivePost,
  deletePost,
  deleteImage,
  addComment,
  handleActivePost,
  activePostElement,
  showModalHandler,
  showModal,
}) {
  return (
    <main className="main">
      {showModal && (
        <Modal>
          <AddPostForm
            showModalHandler={showModalHandler}
            addPost={addPost}
            lastOrder={lastOrder}
          />
        </Modal>
      )}

      <div className="buttonsWrap">
        <Button
          logic={sortByDate}
          content="Sort by date"
          styles="button button_article"
        />
        <Button
          logic={sortById}
          content="Sort by id"
          styles="button button_article"
        />
        <Button
          logic={showModalHandler}
          content="Add post"
          styles="button button_article"
        />
      </div>
      {postCardData.sort(byField(sortBy)).map((postCardItem, pos) => (
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
        />
      ))}
    </main>
  );
}

ArticlesView.propTypes = {
  addPost: PropTypes.func.isRequired,
  lastOrder: PropTypes.number.isRequired,
  sortByDate: PropTypes.func.isRequired,
  sortById: PropTypes.func.isRequired,
  postCardData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  byField: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onActivePost: PropTypes.number,
  deletePost: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  handleActivePost: PropTypes.func.isRequired,
  activePostElement: PropTypes.shape().isRequired,
  showModalHandler: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

ArticlesView.defaultProps = {
  onActivePost: null,
};

export default ArticlesView;
