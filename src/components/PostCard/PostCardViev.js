import PostCardButtons from "./PostCardButtons";

import PropTypes, { bool, number, shape, string } from 'prop-types';

/** COMMENT
 * Постарался выделить stateLess компонет. Но не уверен, что все правильно понял и сделал.
 * Поправь меня пожалуйста.
 * 
 * + есть фрагменты, которые должны вставляться только при определенных условиях.
 * Нужно ли их тоже выносить из этого файла или оставить их здесь нормально?
 */

function PostCardViev({
  post,
  handleActivePost,
  draggable,
  dragStartHandler,
  dragOverHandler,
  dropHandler,
  articleclassNames,
  imageClassNames,
  imgUrl,
  imgClassNames,
  imgAlt,
  dateMonth,
  dateDay,
  dateYear,
  deletePost,
  deleteImage,
  addComment,
  cardSize,
}) {
  return (
    <article
      // TODO: do not make the post active when clicking on the buttons
      onClick={handleActivePost}
      draggable={draggable}
      onDragStart={(e) => dragStartHandler(e, post)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, post)}
      className={articleclassNames}
    >
      <div className={imageClassNames}>
        <a href="!#">
          <img src={imgUrl} className={imgClassNames} alt={imgAlt} />
        </a>
      </div>
      {cardSize !== "listSize" && (
        <a href="!#" className="postcard__category uppercase">
          {post.category}
        </a>
      )}
      <h2 className="postcard__title">
        <a href="!#">{post.title}</a>
      </h2>
      <div className="postcard__info">
        <p className="postcard__date">{`${dateMonth} ${dateDay}, ${dateYear}`}</p>
        <a href="!#" className="postcard__author">
          <span>By</span> {`${post.author.firstName} ${post.author.lastName}`}
        </a>
      </div>
      {cardSize === "big" && (
        <p className="postcard__desc">{post.description}</p>
      )}
      {post.comment && <p className="postcard__desc">{post.comment}</p>}
      <PostCardButtons
        deletePost={deletePost}
        deleteImage={deleteImage}
        addComment={addComment}
      />
    </article>
  );
}

PostCardViev.propTypes = {
  post: PropTypes.shape({
    id: number,
    order: number,
    cardSize: string,
    imageUrl: string,
    isPositionTop: bool,
    category: string,
    title: string,
    date: string, 
    author: shape({
      firstName: string,
      lastName: string,
    }),
    description: string,
  }).isRequired,
  handleActivePost: PropTypes.func,
  draggable: PropTypes.bool,
  dragStartHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  articleclassNames: PropTypes.string,
  imageClassNames: PropTypes.string,
  imgUrl: PropTypes.string,
  imgClassNames: PropTypes.string,
  imgAlt: PropTypes.string,
  dateMonth: PropTypes.string,
  dateDay: PropTypes.number,
  dateYear: PropTypes.number,
  deletePost: PropTypes.func,
  deleteImage: PropTypes.func,
  addComment: PropTypes.func,
  cardSize: PropTypes.string,
}

PostCardViev.defaultProps = {
  dragStartHandler() {},
  dragOverHandler()  {},
  dropHandler() {},
}

export default PostCardViev;