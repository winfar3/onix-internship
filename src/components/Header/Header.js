import './Header.scss';

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderNav from '../HeaderNav/HeaderNav';

function Header({ mainRef }) {
  return (
    <header ref={mainRef} className="header">
      <div className="header__wrapper">
        <NavLink className="header__logo uppercase" to="/onix-internship/">
          fashion
        </NavLink>
        <HeaderNav isNeedBurger />
      </div>
    </header>
  );
}

Header.propTypes = {
  mainRef: PropTypes.shape(),
};

Header.defaultProps = {
  mainRef: null,
};

export default Header;
