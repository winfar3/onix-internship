import './App.scss';

import { useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';
import Recipes from './pages/Recipes/Recipes';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import Users from './pages/Users/Users';
import Travels from './pages/Travels/Travels';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Layout from './layout/Layout';
import Context from './context/Context';

function App() {
  const [isDark, setIsDark] = useState(false);
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);
  return (
    <Context.Provider value={value}>
      <div className="App">
        <Routes>
          <Route path="/onix-internship/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route
              path="home"
              element={<Navigate to="/onix-internship/" />}
            />
            <Route path="recipes" element={<Recipes />} />
            <Route path="articles" element={<Articles />} />
            <Route path="article/:id" element={<Article />} />
            <Route path="users" element={<Users />} />
            <Route path="travels" element={<Travels />} />
            <Route path="404" element={<NotFoundPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/onix-internship/" />} />
          <Route path="*" element={<Navigate to="/onix-internship/404" />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
