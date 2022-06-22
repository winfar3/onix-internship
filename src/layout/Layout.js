import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Sidebar from '../components/Sidebar/Sidebar';
import InstagramGallery from '../components/InstagramGallery/InstagramGallery';
import Footer from '../components/Footer/Footer';

function Layout() {
  const isHomepage = useLocation().pathname === '/onix-internship/';
  return (
    <>
      <Header />
      {isHomepage && <Hero />}
      <div className="container">
        <div className="content-wrapper">
          <Outlet />
          <Sidebar />
        </div>
      </div>
      <InstagramGallery />
      <Footer />
    </>
  );
}

export default Layout;
