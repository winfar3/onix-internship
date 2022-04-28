import "./App.scss";

import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Main } from "./components/Main/Main.js";
import { Sidebar } from "./components/Sidebar/Sidebar.js";
import { InstagramGallery } from "./components/InstagramGallery/InstagramGallery.js";
import { Footer } from "./components/Footer/Footer.js";
import Recipes from "./components/Recipes/Recipes";
import Article from "./components/Article/Article";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <div className="content-wrapper">
          <Routes>
            <Route 
              path="/onix-internship/home"
              element={
                <Navigate to="/onix-internship/" />
              }
            />
            <Route 
              path="/onix-internship/recipes"
              element={
                <Recipes />
              }
            />
            <Route 
              path="/onix-internship/article"
              element={
                <Article />
              }
            />
            <Route 
              path="/onix-internship/404"
              element={
                <NotFoundPage />
              }
            />
            <Route 
              path="/onix-internship/"
              element={
                <Main />
              }
            />
            <Route 
              path="/"
              element={
                <Navigate to="/onix-internship/" />
              }
            />
            <Route 
              path="*"
              element={ 
                <Navigate to="/onix-internship/404" /> 
              }
            />
          </Routes>
          <Sidebar />
        </div>
      </div>
      <InstagramGallery/>
      <Footer />
    </div>
  );
}

export default App;
