import { element, shape } from 'prop-types';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import InstagramGallery from '../components/InstagramGallery/InstagramGallery';
import Footer from '../components/Footer/Footer';

function LayoutView({
  child,
  renderContent,
  mainRef,
}) {
  return (
    <>
      <Header mainRef={mainRef} />
      {renderContent}
      <div className="container">
        <div className="content-wrapper">
          {child}
          <Sidebar />
        </div>
      </div>
      <InstagramGallery />
      <Footer />
    </>
  );
}

LayoutView.propTypes = {
  child: element.isRequired,
  renderContent: element,
  mainRef: shape(),
};

LayoutView.defaultProps = {
  renderContent: null,
  mainRef: null,
};

export default LayoutView;
