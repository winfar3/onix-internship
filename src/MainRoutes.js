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

function MainRoutes() {
  return (
    <Routes>
      <Route
        path="/onix-internship/"
        element={<Layout renderContent={<Hero />}><Main /></Layout>}
      />
      <Route 
        path="/onix-internship/comments" 
        element={<Layout><Recipes /></Layout>} 
      />
      <Route path="/onix-internship/articles" element={<Layout><Articles /></Layout>} />
      <Route path="/onix-internship/articles/:category" element={<Layout><Articles /></Layout>} />
      <Route path="/onix-internship/article/:id" element={<Layout><Article /></Layout>} />
      <Route path="/onix-internship/users" element={<Layout><Users /></Layout>} />
      <Route path="/onix-internship/travels" element={<Layout><Travels /></Layout>} />
      <Route path="/onix-internship/404" element={<Layout><NotFoundPage /></Layout>} />
      <Route
        path="/onix-internship/"
        element={<Navigate to="/onix-internship/home" />}
      />
      <Route path="/" element={<Navigate to="/onix-internship/home" />} />
      <Route path="*" element={<Navigate to="/onix-internship/404" />} />
    </Routes>
  );
}

export default MainRoutes;
