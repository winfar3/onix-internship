import { useRef } from 'react';

const useScrollTo = () => {
  const element = useRef(null);

  const scrollTo = (toElement, position = 'start', transition = 'smooth') => {
    toElement.current.scrollIntoView({
      block: position,
      behavior: transition,
    });
  };

  return [element, scrollTo];
};

export default useScrollTo;
