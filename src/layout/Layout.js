import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Sidebar from '../components/Sidebar/Sidebar';
import InstagramGallery from '../components/InstagramGallery/InstagramGallery';
import Footer from '../components/Footer/Footer';

function Layout() {
  const isHomepage = useLocation().pathname === '/onix-internship/';
  // TODO: take out a repeating function
  const mainRef = useRef(null);
  useEffect(() => {
    mainRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, [useLocation().pathname]);
  return (
    <>
      <Header mainRef={mainRef} />
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
