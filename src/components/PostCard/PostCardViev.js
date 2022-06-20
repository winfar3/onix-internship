import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PostCardButtons from './PostCardButtons';

function PostCardViev({
  post,
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
      draggable={draggable}
      onDragStart={(e) => dragStartHandler(e, post)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, post)}
      className={articleclassNames}
      ref={activePostElement}
    >
      <div className={imageClassNames}>
        <Link to={`/onix-internship/article/${post.id}`}>
          <img 
            src={imgUrl} 
            className={imgClassNames} 
            alt={imgAlt} 
            onLoad={imgOnLoad}
            onError={imgOnError}
          />
        </Link>
      </div>
      {cardSize !== 'listSize' && (
        <a href="!#" className="postcard__category uppercase">
          {post.category}
        </a>
      )}
      <h2 className="postcard__title">
        <Link to={`/onix-internship/article/${post.id}`}>{post.title}</Link>
      </h2>
      <div className="postcard__info">
        <p className="postcard__date">{`${dateMonth} ${dateDay}, ${dateYear}`}</p>
        <a href="!#" className="postcard__author">
          <span>By</span> 
          {' '}
          {`${post.author.firstName} ${post.author.lastName}`}
        </a>
      </div>
      {cardSize === 'big' && (
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
    id: PropTypes.string,
    cardSize: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    description: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
  draggable: PropTypes.bool.isRequired,
  dragStartHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  articleclassNames: PropTypes.string.isRequired,
  imageClassNames: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  imgClassNames: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgOnLoad: PropTypes.func.isRequired,
  imgOnError: PropTypes.func.isRequired,
  dateMonth: PropTypes.string.isRequired,
  dateDay: PropTypes.number.isRequired,
  dateYear: PropTypes.number.isRequired,
  deletePost: PropTypes.func,
  deleteImage: PropTypes.func,
  addComment: PropTypes.func,
  cardSize: PropTypes.string.isRequired,
  activePostElement: PropTypes.shape(),
};

PostCardViev.defaultProps = {
  dragStartHandler() {},
  dragOverHandler() {},
  dropHandler() {},
  activePostElement: {},
  imgUrl: '',
  deletePost: null,
  deleteImage: null,
  addComment: null,
};

export default PostCardViev;
