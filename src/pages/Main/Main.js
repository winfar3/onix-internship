import './Main.scss';

import { useState } from 'react';

import MainView from './MainView';
import { baseUrl, postsRequestUrl } from '../../constants/requestUrls';
import Loader from '../../components/Loader/Loader';
import useScrollTo from '../../hooks/useScrollTo';
import useRequest from '../../hooks/useRequest';
import useLocalization from '../../hooks/useLocalization';

function Main() {
  const [t] = useLocalization();
  const [postCardData, isPending] = useRequest(`${baseUrl}${postsRequestUrl}`);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const maxPageNumber = Math.ceil(postCardData.length / postsPerPage);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postCardData.slice(firstPostIndex, lastPostIndex);

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
  if (postCardData.length === 0) {
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
