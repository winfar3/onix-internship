import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useParams } from 'react-router-dom';

import useScrollTo from '../hooks/useScrollTo';
import withRequest from '../hocs/withRequest';
import LayoutView from './LayoutView';

function Layout({ children, renderContent }) {
  /** When we go to articles with a certain category, a new component is created instead 
  of a child with a different api request. In theory, when opening one article, it should 
  show incorrect data, but everything is rendered correctly. 
  I haven't figured out yet why this works. */
  const params = useParams();
  const paramKey = Object.keys(params)[0];
  const paramValue = Object.values(params)[0];
  const Element = withRequest(
    children.type, 
    `https://61fc04453f1e34001792c787.mockapi.io/posts?${paramKey}=${paramValue}`
  );
  
  const [mainRef, scrollTo] = useScrollTo();
  useEffect(() => {
    scrollTo(mainRef);
  }, [useLocation().pathname]);
  
  return (
    <LayoutView 
      child={Object.keys(params).length === 0 ? children : <Element />}
      renderContent={renderContent}
      mainRef={mainRef}
    />
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
