import './Main.scss';

import { useState } from 'react';
import PropTypes from 'prop-types';

import MainView from './MainView';
import { postsRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest';
import useScrollTo from '../../hooks/useScrollTo';

function Main({ dataFromServer }) {
  const [postCardData] = useState(dataFromServer);

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

Main.propTypes = {
  dataFromServer: PropTypes.arrayOf(PropTypes.shape),
};

Main.defaultProps = {
  dataFromServer: [],
};

export default withRequest(Main, postsRequestUrl);
