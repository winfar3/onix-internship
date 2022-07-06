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

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  
  return [value, setValue];
};

export default useLocalStorage;
