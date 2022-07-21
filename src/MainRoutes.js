import { Navigate, Route, Routes } from 'react-router-dom';

import Main from './pages/Main/Main';
import Recipes from './pages/Recipes/Recipes';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import Users from './pages/Users/Users';
import Travels from './pages/Travels/Travels';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/onix-internship/"
        element={<Main />}
      />
      <Route 
        path="/onix-internship/comments" 
        element={<Recipes />} 
      />
      <Route path="/onix-internship/articles" element={<Articles />} />
      <Route path="/onix-internship/articles/:category" element={<Articles />} />
      <Route path="/onix-internship/article/:id" element={<Article />} />
      <Route path="/onix-internship/users" element={<Users />} />
      <Route path="/onix-internship/travels" element={<Travels />} />
      <Route path="/onix-internship/404" element={<NotFoundPage />} />
      <Route
        path="/onix-internship/home"
        element={<Navigate to="/onix-internship/" />}
      />
      <Route path="/" element={<Navigate to="/onix-internship/" />} />
      <Route path="*" element={<Navigate to="/onix-internship/404" />} />
    </Routes>
  );
}

export default MainRoutes;
