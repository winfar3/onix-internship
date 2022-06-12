import PropTypes from 'prop-types';

import AddPostForm from '../../components/AddPostForm/AddPostForm';
import Button from '../../components/Button/Button';
import PostCard from '../../components/PostCard/PostCard';

function ArticlesView({
  showAddForm,
  handleShowAddForm,
  addPost,
  lastId,
  lastOrder,
  sortByDate,
  sortById,
  postCardData,
  byField,
  sortBy,
  dragStartHandler,
  dragOverHandler,
  dropHandler,
  onActivePost,
  deletePost,
  deleteImage,
  addComment,
  handleActivePost,
  activePostElement,
}) {
  return (
    <main className="main">
      {showAddForm && (
        <AddPostForm
          handleShowAddForm={handleShowAddForm}
          addPost={addPost}
          lastId={lastId}
          lastOrder={lastOrder}
        />
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
          logic={handleShowAddForm}
          content="Add post"
          styles="button button_article"
        />
      </div>
      {postCardData.sort(byField(sortBy)).map((postCardItem, pos) => (
        <PostCard
          post={postCardItem}
          key={postCardItem.id}
          forcedCardSize="listSize"
          draggable
          dragStartHandler={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
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
  showAddForm: PropTypes.bool.isRequired,
  handleShowAddForm: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
  lastId: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  lastOrder: PropTypes.number.isRequired,
  sortByDate: PropTypes.func.isRequired,
  sortById: PropTypes.func.isRequired,
  postCardData: PropTypes.arrayOf(PropTypes.shape).isRequired,
  byField: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
  onActivePost: PropTypes.number.isRequired,
  deletePost: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  handleActivePost: PropTypes.func.isRequired,
  activePostElement: PropTypes.element.isRequired,
};

export default ArticlesView;
