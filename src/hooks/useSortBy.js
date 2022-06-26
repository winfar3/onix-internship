import { useState } from 'react';

const useSortBy = (initialField, initialDirection) => {
  const [isSorted, setIsSorted] = useState(initialDirection);
  const [sortBy, setSortBy] = useState(initialField);

  const sortOnPage = (value) => {
    setIsSorted((sorted) => (!sorted));
    setSortBy(value);
  };

  return [isSorted, sortBy, sortOnPage];
};

export default useSortBy;
