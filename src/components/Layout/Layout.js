import PropTypes from 'prop-types'

import { Header } from "../Header/Header.js";
import { Hero } from "../Hero/Hero.js";
import { Sidebar } from "../Sidebar/Sidebar.js";
import { InstagramGallery } from "../InstagramGallery/InstagramGallery.js";
import { Footer } from "../Footer/Footer.js";

function Layout({ children }) {
  return(
    <>
      <Header />
      <Hero />
      <div className="container">
        <div className="content-wrapper">
          {children}
        <Sidebar />
        </div>
      </div>
      <InstagramGallery/>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout