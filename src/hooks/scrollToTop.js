const scrollToTop = (mainRef) => {
  mainRef.current.scrollIntoView({
    behavior: 'smooth',
  });
};

export default scrollToTop;
