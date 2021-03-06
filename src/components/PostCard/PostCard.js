import './PostCard.scss';

import { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PostCardViev from './PostCardViev';
import months from '../../constants/months';
import ModalContext from '../../context/ModalContext';
import useLocalization from '../../hooks/useLocalization';

function PostCard({
  post,
  forcedCardSize,
  handleActivePost,
  onActivePost,
  deletePost,
  deleteImage,
  addComment,
  activePostElement,
}) {
  const [t] = useLocalization();
  const cardSize = forcedCardSize || post.cardSize;
  const dateObject = new Date(post.date);

  // TODO: remove after solving warnings eslint
  const imgOnLoad = () => {
    console.log(`Image for post ${post.id} loaded`); // eslint-disable-line no-console
  };

  const imgOnError = () => {
    console.log(`ERROR. Image for post ${post.id} not loaded`); // eslint-disable-line no-console
  };

  const { showModal, showModalHandler } = useContext(ModalContext);

  return (
    <PostCardViev 
      post={post}
      by={t('by')}
      handleActivePost={handleActivePost}
      articleClassNames={classNames(
        'postcard',
        `postcard_${cardSize}`,
        { postcard_active: onActivePost }
      )}
      imageClassNames={`postcard__image postcard__image_${cardSize}`}
      imgUrl={post.imageUrl}
      imgClassNames={classNames('postcard__img', {
        postcard__img_top: post.isPositionTop,
      })}
      imgAlt="preview"
      imgOnLoad={imgOnLoad}
      imgOnError={imgOnError}
      dateMonth={t(months[dateObject.getMonth()])}
      dateDay={dateObject.getDate()}
      dateYear={dateObject.getFullYear()}
      deletePost={deletePost}
      deleteImage={deleteImage}
      addComment={addComment}
      cardSize={cardSize}
      activePostElement={activePostElement}
      showModal={showModal}
      showModalHandler={showModalHandler}
    />
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    cardSize: PropTypes.string,
    imageUrl: PropTypes.string,
    isPositionTop: PropTypes.bool,
    date: PropTypes.string, 
  }).isRequired,
  forcedCardSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  handleActivePost: PropTypes.func,
  onActivePost: PropTypes.bool,
  deletePost: PropTypes.func,
  deleteImage: PropTypes.func,
  addComment: PropTypes.func,
  activePostElement: PropTypes.shape(),
};

PostCard.defaultProps = {
  handleActivePost: null,
  deletePost: null,
  deleteImage: null,
  addComment: null,
  onActivePost: false,
  activePostElement: null,
};

export default PostCard;
