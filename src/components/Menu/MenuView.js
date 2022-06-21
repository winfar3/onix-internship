import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuView({ 
  navData, classNames, linkRoot, setTitle, menuActiveHandler, themeToggle
}) {
  /** Allows to call a function menuActiveHandler if the site is open on a tablet or phone 
   * Without this, the menu also opens in desktop mode
   */
  // TODO: Find the best solution
  const mobileDisplay = window.outerWidth < 768;
  return (
    <nav className="header__nav header-nav">
      <ul
        className={classNames}
      >
        {navData.map((item) => (
          <li key={item} className="header-nav__item">
            <NavLink
              to={linkRoot + item}
              onClick={mobileDisplay ? () => { setTitle(item); menuActiveHandler(); } : () => setTitle(item)}
              className="header-nav__link capitalize"
            >
              {item}
            </NavLink>
          </li>
        ))}
        <li className="header-nav__item">
          <button 
            type="button" 
            onClick={themeToggle} 
            className="header-nav__link"
          >
            Change theme
          </button>
        </li>
      </ul>
    </nav>
  );
}

MenuView.propTypes = {
  navData: PropTypes.arrayOf(PropTypes.string).isRequired,
  classNames: PropTypes.string.isRequired,
  linkRoot: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  menuActiveHandler: PropTypes.func,
  themeToggle: PropTypes.func.isRequired,
};

MenuView.defaultProps = {
  menuActiveHandler() {},
};

export default MenuView;
