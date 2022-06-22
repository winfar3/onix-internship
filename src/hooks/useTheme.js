import { useContext } from 'react';

import Context from '../context/Context';

const useTheme = () => {
  const value = useContext(Context);
  return value;
};

export default useTheme;
