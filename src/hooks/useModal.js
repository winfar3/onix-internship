import { useState } from 'react';

const useModal = () => {
  const [modalPlace, setModalPlace] = useState('');

  const showModalHandler = (place) => {
    if (modalPlace === '') {
      setModalPlace(place);
    } else {
      setModalPlace('');
    }
  };

  return [modalPlace, showModalHandler];
};

export default useModal;
