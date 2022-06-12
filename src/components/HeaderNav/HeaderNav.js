import './HeaderNav.scss';

import { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderNavView from './HeaderNavView';

function HeaderNav({ isNeedBurger }) {
  const [menuActive, setMenuActive] = useState(false);

  const menuActiveHandler = () => {
    setMenuActive((oldMenuActive) => !oldMenuActive);
  };

  return (
    <HeaderNavView
      menuActive={menuActive}
      setMenuActive={setMenuActive}
      menuActiveHandler={menuActiveHandler}
      isNeedBurger={isNeedBurger}
    />
  );
}

HeaderNav.propTypes = {
  isNeedBurger: PropTypes.bool,
};

HeaderNav.defaultProps = {
  isNeedBurger: false,
};

export default HeaderNav;
