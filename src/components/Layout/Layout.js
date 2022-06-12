import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Sidebar } from '../Sidebar/Sidebar';
import { InstagramGallery } from '../InstagramGallery/InstagramGallery';
import { Footer } from '../Footer/Footer';

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
