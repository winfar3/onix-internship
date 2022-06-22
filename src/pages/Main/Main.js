import './Main.scss';

import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import MainView from './MainView';
import { postsRequestUrl } from '../../constants/requestUrls';
import withRequest from '../../hocs/withRequest/withRequest';
import scrollToTop from '../../hooks/scrollToTop';

function Main({ dataFromServer }) {
  const [postCardData] = useState(dataFromServer);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const maxPageNumber = Math.ceil(postCardData.length / postsPerPage);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postCardData.slice(firstPostIndex, lastPostIndex);

  const mainRef = useRef(null);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop(mainRef);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop(mainRef);
    }
  };
  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop(mainRef);
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
