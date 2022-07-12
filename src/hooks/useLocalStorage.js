import { useState, useEffect } from 'react';

const useLocalStorage = (initialValue, key) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      try {
        return JSON.parse(storage);
      } catch {
        return storage;
      }
    }

    return initialValue;
  };
  
  const [value, setValue] = useState(getValue);

  /** removed stringify because the browser language detector worked incorrectly 
   * when the language was saved in a string */
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  
  return [value, setValue];
};

export default useLocalStorage;
