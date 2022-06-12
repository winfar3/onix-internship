import './PostCard.scss';

import { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import PostCardViev from './PostCardViev';

function PostCard({
  post,
  forcedCardSize,
  handleActivePost,
  draggable,
  dragStartHandler,
  dragOverHandler,
  dropHandler,
  onActivePost,
  deletePost,
  deleteImage,
  addComment,
  activePostElement,
}) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const cardSize = forcedCardSize || post.cardSize;
  const dateObject = new Date(post.date);

  const postRef = useRef(activePostElement);

  // TODO: remove after solving warnings eslint
  const imgOnLoad = () => {
    console.log(`Image for post ${post.id} loaded`); // eslint-disable-line no-console
  };

  const imgOnError = () => {
    console.log(`ERROR. Image for post ${post.id} not loaded`); // eslint-disable-line no-console
  };

  return (
    <PostCardViev 
      post={post}
      handleActivePost={handleActivePost}
      draggable={draggable}
      dragStartHandler={dragStartHandler}
      dragOverHandler={dragOverHandler}
      dropHandler={dropHandler}
      articleclassNames={classNames(
        'postcard',
        `postcard_${cardSize}`,
        { postcard_active: onActivePost },
        { postcard_draggable: draggable }
      )}
      imageClassNames={`postcard__image postcard__image_${cardSize}`}
      imgUrl={post.imageUrl}
      imgClassNames={classNames('postcard__img', {
        postcard__img_top: post.isPositionTop,
      })}
      imgAlt="preview"
      imgOnLoad={imgOnLoad}
      imgOnError={imgOnError}
      dateMonth={months[dateObject.getMonth()]}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      deletePost={deletePost}
      deleteImage={deleteImage}
      addComment={addComment}
      cardSize={cardSize}
      activePostElement={postRef}
    />
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    order: PropTypes.number,
    cardSize: PropTypes.string,
    imageUrl: PropTypes.string,
    isPositionTop: PropTypes.bool,
    category: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string, 
    author: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    description: PropTypes.string,
  }).isRequired,
  forcedCardSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  handleActivePost: PropTypes.func,
  draggable: PropTypes.bool,
  dragStartHandler: PropTypes.func,
  dragOverHandler: PropTypes.func,
  dropHandler: PropTypes.func,
  onActivePost: PropTypes.bool,
  deletePost: PropTypes.func,
  deleteImage: PropTypes.func,
  addComment: PropTypes.func,
  activePostElement: PropTypes.shape(),
};

PostCard.defaultProps = {
  handleActivePost() {},
  deletePost: null,
  deleteImage: null,
  addComment: null,
  draggable: false,
  dragStartHandler() {},
  dragOverHandler() {},
  dropHandler() {},
  onActivePost: false,
  activePostElement: {},
};

export default PostCard;
