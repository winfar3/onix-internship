import './App.scss';

import { 
  useEffect, 
  useMemo, 
  useState, 
} from 'react';

import MainRoutes from './MainRoutes';
import ThemeContext from './context/ThemeContext';
import useLocalStorage from './hooks/useLocalStorage';
import ModalContext from './context/ModalContext';

/** TODO: decompose code 
 * Combine routes with menu.
*/
function App() {
  const [theme, setTheme] = useLocalStorage(false, 'theme');
  const [isDark, setIsDark] = useState(theme);
  useEffect(() => {
    setTheme(isDark);
  }, [isDark]);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  
  const [commentedPostPos, setCommentedPostPos] = useState();
  const modalValue = useMemo(() => ({ 
    commentedPostPos, 
    setCommentedPostPos 
  }), [commentedPostPos]);

  return (
    <ThemeContext.Provider value={value}>
      <ModalContext.Provider value={modalValue}>
        <div className="App">
          <MainRoutes />
        </div>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
