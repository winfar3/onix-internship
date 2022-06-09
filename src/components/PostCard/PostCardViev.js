import PostCardButtons from "./PostCardButtons";

import PropTypes, { bool, number, shape, string } from 'prop-types';

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
  imgOnLoad,
  imgOnError,
  dateMonth,
  dateDay,
  dateYear,
  deletePost,
  deleteImage,
  addComment,
  cardSize,
  activePostElement,
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
      ref={activePostElement}
    >
      <div className={imageClassNames}>
        <a href="!#">
          <img 
            src={imgUrl} 
            className={imgClassNames} 
            alt={imgAlt} 
            onLoad={imgOnLoad}
            onError={imgOnError}
          />
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
  imgOnLoad: PropTypes.func,
  imgOnError: PropTypes.func,
  dateMonth: PropTypes.string,
  dateDay: PropTypes.number,
  dateYear: PropTypes.number,
  deletePost: PropTypes.func,
  deleteImage: PropTypes.func,
  addComment: PropTypes.func,
  cardSize: PropTypes.string,
  activePostElement: PropTypes.object,
}

PostCardViev.defaultProps = {
  dragStartHandler() {},
  dragOverHandler()  {},
  dropHandler() {},
}

export default PostCardViev;