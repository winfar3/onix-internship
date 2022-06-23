import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import InstagramGallery from '../components/InstagramGallery/InstagramGallery';
import Footer from '../components/Footer/Footer';
import scrollToTop from '../helpers/scrollToTop';

function Layout({ children, renderContent }) {
  const mainRef = useRef(null);
  useEffect(() => {
    scrollToTop(mainRef);
  }, [useLocation().pathname]);
  
  return (
    <>
      <Header mainRef={mainRef} />
      {renderContent}
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
  renderContent: PropTypes.element,
};

Layout.defaultProps = {
  renderContent: null,
};

export default Layout;
