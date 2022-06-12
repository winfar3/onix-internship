import './Header.scss';

import { NavLink } from 'react-router-dom';

import HeaderNav from '../HeaderNav/HeaderNav';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <NavLink className="header__logo uppercase" to="/">
          fashion
        </NavLink>
        <HeaderNav isNeedBurger />
      </div>
    </header>
  );
}

export default Header;
