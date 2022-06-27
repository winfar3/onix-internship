import { useCallback, useRef } from 'react';

const useScrollTo = () => {
  const element = useRef(null);

  const scrollTo = useCallback((toElement, position = 'start', transition = 'smooth') => {
    toElement.current.scrollIntoView({
      block: position,
      behavior: transition,
    });
  }, [element]);

  return [element, scrollTo];
};

export default useScrollTo;
