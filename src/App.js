import "./App.scss";

import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Sidebar } from "./components/Sidebar/Sidebar.js";
import { InstagramGallery } from "./components/InstagramGallery/InstagramGallery.js";
import { Footer } from "./components/Footer/Footer.js";

import { Main } from "./pages/Main/Main.js";
import Recipes from "./pages/Recipes/Recipes";
import Articles from "./pages/Articles/Articles";
import Users from "./pages/Users/Users.js";
import Characters from "./pages/Characters/Characters";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

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
              path="/onix-internship/articles"
              element={
                <Articles />
              }
            />
            <Route 
              path="/onix-internship/users"
              element={
                <Users />
              }
            />
            <Route 
              path="/onix-internship/characters"
              element={
                <Characters />
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
