import "./Main.scss";

import { useState, useEffect } from "react";

import MainView from "./MainView";
import SendAxiosRequest from "../../database/SendAxiosRequest";

export function Main() {
  const [postCardData, setPostCardData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(7);
  const maxPageNumber = Math.ceil(postCardData.length / postsPerPage);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postCardData.slice(firstPostIndex, lastPostIndex);

  const [elementMain, setElementMain] = useState();
  useEffect(() => {
    setElementMain(document.querySelector(".main"));
  }, [elementMain]);

  useEffect(() => {
    SendAxiosRequest()
      .then((data) => setPostCardData(data))
      .catch((err) => console.log(err))
  }, [])
  
  const scrollToTop = () => {
    elementMain.scrollIntoView({
      behavior: "smooth",
    });
  };

	/** COMMENT
   * Пытался сделать прокрутку к началу списка постов при пагинации.
   * Но через useEffect прокрутка происходила так же при загрузке страницы.
   * Остановился на варианте сделать просто функцию.
   * Вопрос: нужно ли здесь использовать useEffect вообще?
   * Если да, то как убрать прокрутку при загрузке страницы и оставить только на переход между страницами?
   */
  // useEffect(() => {
  //     const elementMain = document.querySelector('.main');

  //     elementMain.scrollIntoView({
  //         behavior: 'smooth'
  //     });
  // }, [currentPage]);

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
      paginate={paginate}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
}
