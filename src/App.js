import './App.scss';

import { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';
import Recipes from './pages/Recipes/Recipes';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import Users from './pages/Users/Users';
import Travels from './pages/Travels/Travels';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Hero from './components/Hero/Hero';
import Layout from './layout/Layout';
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
          <Routes>
            <Route
              path="/onix-internship/"
              element={<Layout renderContent={<Hero />}><Main /></Layout>}
            />
            <Route
              path="/onix-internship/home"
              element={<Navigate to="/onix-internship/" />}
            />
            <Route 
              path="/onix-internship/comments" 
              element={<Layout><Recipes /></Layout>} 
            />
            <Route path="/onix-internship/articles" element={<Layout><Articles /></Layout>} />
            <Route path="/onix-internship/article/:id" element={<Layout><Article /></Layout>} />
            <Route path="/onix-internship/users" element={<Layout><Users /></Layout>} />
            <Route path="/onix-internship/travels" element={<Layout><Travels /></Layout>} />
            <Route path="/onix-internship/404" element={<Layout><NotFoundPage /></Layout>} />
            <Route path="/" element={<Navigate to="/onix-internship/" />} />
            <Route path="*" element={<Navigate to="/onix-internship/404" />} />
          </Routes>
        </div>
      </ModalContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
