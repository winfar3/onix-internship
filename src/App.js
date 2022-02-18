import "./App.scss";

import { Header } from "./components/Header/Header.js";
import { Hero } from "./components/Hero/Hero.js";
import { Main } from "./components/Main/Main.js";
import { Sidebar } from "./components/Sidebar/Sidebar.js";
import { InstagramGallery } from "./components/InstagramGallery/InstagramGallery.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="container">
        <div className="content-wrapper">
          <Main />
          <Sidebar />
        </div>
      </div>
      <InstagramGallery/>
      <Footer />
    </div>
  );
}

export default App;
