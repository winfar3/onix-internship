import "./Main.scss";

import { useState, useEffect, useRef } from "react";

import MainView from "./MainView";
import SendAxiosRequest from "../../database/SendAxiosRequest";
import { postsRequestUrl } from "../../database/requestUrls";

export function Main() {
  const [postCardData, setPostCardData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const maxPageNumber = Math.ceil(postCardData.length / postsPerPage);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postCardData.slice(firstPostIndex, lastPostIndex);

  const [elementMain, setElementMain] = useState();
  const mainRef = useRef(null);
  useEffect(() => {
    setElementMain(mainRef.current);
  }, [elementMain]);

  useEffect(() => {
    SendAxiosRequest(postsRequestUrl)
      .then((data) => {
        setPostCardData(data)
      })
      .catch((err) => console.log(err))
  }, [])
  
  const scrollToTop = () => {
    elementMain.scrollIntoView({
      behavior: "smooth",
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };
  const nextPage = () => {
    if (currentPage < maxPageNumber) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
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
