import PropTypes from 'prop-types';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Sidebar from '../components/Sidebar/Sidebar';
import InstagramGallery from '../components/InstagramGallery/InstagramGallery';
import Footer from '../components/Footer/Footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <div className="content-wrapper">
          {children}
          <Sidebar />
        </div>
      </div>
      <InstagramGallery />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
