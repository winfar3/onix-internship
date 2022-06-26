import { useRef } from 'react';

const useScrollTo = () => {
  const element = useRef(null);

  const scrollTo = (toElement, position = 'start') => {
    toElement.current.scrollIntoView({
      block: position,
      behavior: 'smooth',
    });
  };

  return [element, scrollTo];
};

export default useScrollTo;
