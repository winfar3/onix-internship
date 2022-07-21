import './Main.scss';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';

import MainView from './MainView';
import { baseUrl, postsRequestUrl } from '../../constants/requestUrls';
import Loader from '../../components/Loader/Loader';
import useScrollTo from '../../hooks/useScrollTo';
import useLocalization from '../../hooks/useLocalization';
import fillingStorageAction from '../../store/articles/actions';

function Main() {
  const [t] = useLocalization();
  const dispatch = useDispatch();
  const dataFromRedux = useSelector(({ articles }) => articles.articles);
  const [isPending, setIsPending] = useState(false);

  const request = () => {
    dispatch(fillingStorageAction(`${baseUrl}${postsRequestUrl}`, setIsPending));
  };

  useEffect(() => {
    if (dataFromRedux === undefined || dataFromRedux.length === 0) {
      setIsPending(true);
      request();
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const maxPageNumber = Math.ceil(dataFromRedux.length / postsPerPage);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataFromRedux.slice(firstPostIndex, lastPostIndex);

  const [mainRef, scrollTo] = useScrollTo();

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollTo(mainRef);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollTo(mainRef);
    }
  };
  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      setCurrentPage((prev) => prev + 1);
      scrollTo(mainRef);
    }
  };

  if (isPending) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  if (dataFromRedux.length === 0) {
    return <p className="fz-2">{t('postErr')}</p>;
  }
  return (
    <MainView
      currentPosts={currentPosts}
      maxPageNumber={maxPageNumber}
      postsPerPage={postsPerPage}
      mainRef={mainRef}
      paginate={paginate}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
}

export default Main;
