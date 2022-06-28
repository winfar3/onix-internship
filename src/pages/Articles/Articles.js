import './Articles.scss';

import { 
  useContext, 
  useState, 
  useEffect 
} from 'react';
import PropTypes from 'prop-types';

import ArticlesView from './ArticlesView';
import { postsRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest';
import ModalContext from '../../context/ModalContext';
import useSortBy from '../../hooks/useSortBy';
import useScrollTo from '../../hooks/useScrollTo';
import useModal from '../../hooks/useModal';

function Articles({ dataFromServer }) {
  const { setCommentedPostPos } = useContext(ModalContext);
  const [postCardData, setPostCardData] = useState([...dataFromServer]);
  const [onActivePost, setOnActivePost] = useState(null);
  const [isSorted, sortBy, sornOnPage] = useSortBy('date', true);
  const [card, scrollTo] = useScrollTo();
  const [showWhen, toggleModal] = useModal();

  const addPost = (post) => {
    setPostCardData([...postCardData, post]);
  };

  const deleteImage = (pos) => {
    setPostCardData(postCardData.map((item, index) => {
      if (index === pos) {
        const { imageUrl, ...otherData } = item;
        return otherData;
      }
      return item;
    }));
  };

  const addComment = (pos, writtenComment) => {
    setCommentedPostPos(pos);
    if (writtenComment === undefined) {
      toggleModal('addPostCommentForm');
    } else {
      const objComment = { comment: writtenComment };
      setPostCardData(postCardData.map((item, index) => {
        if (index === pos) {
          return { ...item, ...objComment };
        }
        return item;
      }));
    }
  };

  const deletePost = (pos) => {
    const temp = [...postCardData];
    temp.splice(pos, 1);

    setPostCardData(temp);
  };

  const handleActivePost = (pos) => {
    let temp = pos;
    if (onActivePost === temp) {
      temp = null;
    }
    setOnActivePost(temp);
  };

  const goToNextPost = () => {
    const temp = onActivePost;
    if (temp === postCardData.length - 1) {
      return null;
    }
    setOnActivePost(temp + 1);
    scrollTo(card, 'center', 'auto');
    return null;
  };

  const goToPrevPost = () => {
    const temp = onActivePost;
    if (temp === 0) {
      return null;
    }
    setOnActivePost(temp - 1);
    scrollTo(card, 'center', 'auto');
    return null;
  };

  /** TODO: possible to combine into one useEffect */
  useEffect(() => {
    const handleArrowDown = (e) => {
      if (e.key === 'ArrowDown') {
        goToNextPost();
      }
    };

    window.addEventListener('keyup', handleArrowDown);

    return () => window.removeEventListener('keyup', handleArrowDown);
  }, [onActivePost]);

  useEffect(() => {
    const handleArrowUp = (e) => {
      if (e.key === 'ArrowUp') {
        goToPrevPost();
      }
    };

    window.addEventListener('keyup', handleArrowUp);

    return () => window.removeEventListener('keyup', handleArrowUp);
  }, [onActivePost]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        handleActivePost();
      }
    };

    window.addEventListener('keyup', handleEscape);

    return () => window.removeEventListener('keyup', handleEscape);
  }, [onActivePost]);

  return (
    <ArticlesView
      showWhen={showWhen}
      toggleModal={toggleModal}
      handleActivePost={handleActivePost}
      addPost={addPost}
      lastOrder={postCardData.length}
      sornOnPage={sornOnPage}
      postCardData={postCardData}
      isSorted={isSorted}
      sortBy={sortBy}
      onActivePost={onActivePost}
      deletePost={deletePost}
      deleteImage={deleteImage}
      addComment={addComment}
      activePostElement={card}
    />
  );
}

Articles.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRequest(Articles, postsRequestUrl);
