import './Articles.scss';

import { 
  useContext, 
  useRef, 
  useState, 
  useEffect 
} from 'react';
import PropTypes from 'prop-types';

import ArticlesView from './ArticlesView';
import { postsRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest';
import ModalContext from '../../context/ModalContext';

function Articles({ dataFromServer }) {
  const activePostElement = useRef(null);
  const { showModal, showModalHandler } = useContext(ModalContext);
  const [postCardData, setPostCardData] = useState([...dataFromServer]);
  const [onActivePost, setOnActivePost] = useState(null);
  const [isSorted, setIsSorted] = useState(false);
  const [sortBy, setSortBy] = useState('date');

  const byField = (field) => {
    if (isSorted) {
      return (a, b) => (a[field] > b[field] ? -1 : 1);
    } 
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  };

  const sortByDate = () => {
    setIsSorted((sorted) => (!sorted));
    setSortBy('date');
  };

  const sortById = () => {
    setIsSorted((sorted) => (!sorted));
    setSortBy('id');
  };

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

  const addComment = (pos, comment) => {
    setPostCardData(postCardData.map((item, index) => {
      if (index === pos) {
        return { ...item, ...comment };
      }
      return item;
    }));
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

  const scrollToCard = () => {
    const card = activePostElement.current;
    if (card === null) {
      return null;
    }
    card.scrollIntoView({
      block: 'center',
    });
    return null;
  };

  const goToNextPost = () => {
    const temp = onActivePost;
    if (temp === postCardData.length - 1) {
      return null;
    }
    setOnActivePost(temp + 1);
    scrollToCard();
    return null;
  };

  const goToPrevPost = () => {
    const temp = onActivePost;
    if (temp === 0) {
      return null;
    }
    setOnActivePost(temp - 1);
    scrollToCard();
    return null;
  };

  /** TODO: possible to combine into one useEffect 
   * Вопрос: нужно ли здесь условие при котором useEffect срабатывает не при каждом рендере
  */
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
      showModal={showModal}
      showModalHandler={showModalHandler}
      handleActivePost={handleActivePost}
      addPost={addPost}
      lastOrder={postCardData.length}
      sortByDate={sortByDate}
      sortById={sortById}
      postCardData={postCardData}
      byField={byField}
      sortBy={sortBy}
      onActivePost={onActivePost}
      deletePost={deletePost}
      deleteImage={deleteImage}
      addComment={addComment}
      activePostElement={activePostElement}
    />
  );
}

Articles.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRequest(Articles, postsRequestUrl);
