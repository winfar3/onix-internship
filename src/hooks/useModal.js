import { useCallback, useState } from 'react';

const useModal = () => {
  const [showWhen, setShowWhen] = useState('');

  const toggleModal = useCallback((place) => {
    if (showWhen === '') {
      setShowWhen(place);
    } else {
      setShowWhen('');
    }
  }, [showWhen]);

  return [showWhen, toggleModal];
};

export default useModal;
