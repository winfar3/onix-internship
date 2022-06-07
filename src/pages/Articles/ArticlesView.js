import PropTypes from "prop-types";
import { AddPostForm } from "../../components/AddPostForm/AddPostForm";
import { Button } from "../../components/Button/Button";
import PostCard from "../../components/PostCard/PostCard";

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
}) {
  return (
    <main className="main">
      {showAddForm ? (
        <AddPostForm
          handleShowAddForm={handleShowAddForm}
          addPost={addPost}
          lastId={lastId}
          lastOrder={lastOrder}
        />
      ) : null}

      <div className="buttonsWrap">
        <Button
          logic={sortByDate}
          content={"Sort by date"}
          styles={"button button_article"}
        />
        <Button
          logic={sortById}
          content={"Sort by id"}
          styles={"button button_article"}
        />
        <Button
          logic={handleShowAddForm}
          content={"Add post"}
          styles={"button button_article"}
        />
      </div>
      {postCardData.sort(byField(sortBy)).map((postCardItem, pos) => (
        <PostCard
          post={postCardItem}
          key={postCardItem.id}
          forcedCardSize={"listSize"}
          draggable={true}
          dragStartHandler={dragStartHandler}
          dragOverHandler={dragOverHandler}
          dropHandler={dropHandler}
          onActivePost={onActivePost === pos}
          deletePost={() => deletePost(pos)}
          deleteImage={() => deleteImage(pos)}
          addComment={() => addComment(pos)}
          handleActivePost={() => handleActivePost(pos)}
        />
      ))}
    </main>
  );
}

ArticlesView.propTypes = {
  showAddForm: PropTypes.bool,
  handleShowAddForm: PropTypes.func,
  addPost: PropTypes.func,
  lastId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.bool,
  ]),
  lastOrder: PropTypes.number,
  sortByDate: PropTypes.func,
  sortById: PropTypes.func,
  postCardData: PropTypes.array,
  byField: PropTypes.func,
  sortBy: PropTypes.string,
  dragStartHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  onActivePost: PropTypes.number,
  deletePost: PropTypes.func,
  deleteImage: PropTypes.func,
  addComment: PropTypes.func,
  handleActivePost: PropTypes.func,
};

export default ArticlesView;
