import './Articles.scss';

import { 
  useContext, 
  useState, 
  useEffect, 
} from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';

import ArticlesView from './ArticlesView';
import { baseUrl, postsRequestUrl } from '../../constants/requestUrls';
import ModalContext from '../../context/ModalContext';
import Loader from '../../components/Loader/Loader';
import useSortBy from '../../hooks/useSortBy';
import useScrollTo from '../../hooks/useScrollTo';
import useModal from '../../hooks/useModal';
import useLocalization from '../../hooks/useLocalization';
import Layout from '../../layout/Layout';
import fillingStorageAction from '../../store/articles/actions';

function Articles() {
  const params = useParams();
  const paramKey = Object.keys(params)[0];
  const paramValue = Object.values(params)[0];
  let requestUrl;
  if (Object.keys(params).length === 0) {
    requestUrl = `${baseUrl}${postsRequestUrl}`;
  } else {
    requestUrl = `${baseUrl}${postsRequestUrl}?${paramKey}=${paramValue}`;
  }
  const [t] = useLocalization();
  const dispatch = useDispatch();
  const dataFromRedux = useSelector(({ articles }) => articles.articles);
  const { setCommentedPostPos } = useContext(ModalContext);
  const [postCardData, setPostCardData] = useState([]);
  const [onActivePost, setOnActivePost] = useState(null);
  const [isSorted, sortBy, sornOnPage] = useSortBy('date', true);
  const [card, scrollTo] = useScrollTo();
  const [showWhen, toggleModal] = useModal();
  const [isPending, setIsPending] = useState(false);

  const request = () => {
    dispatch(fillingStorageAction(requestUrl, setIsPending));
  };

  useEffect(() => {
    if (dataFromRedux === undefined || dataFromRedux.length === 0) {
      setIsPending(true);
      request();
    }
  }, []);

  // TODO: send a new request to api when params change
  useEffect(() => {
    setPostCardData([...dataFromRedux]);
  }, [dataFromRedux, params]);

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

  if (isPending) {
    return (
      <Layout>
        <div className="loader">
          <Loader />
        </div>
      </Layout>
    );
  }
  if (dataFromRedux.length === 0) {
    return <p className="fz-2">{t('postErr')}</p>;
  }
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
      buttonDate={t('button_sortDate')}
      buttonId={t('button_sordId')}
      buttonPost={t('button_addPost')}
    />
  );
}

export default Articles;
