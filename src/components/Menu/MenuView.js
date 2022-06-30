import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import DarkModeToggle from 'react-dark-mode-toggle';

function MenuView({ 
  navData, 
  classNames, 
  linkRoot, 
  setTitle, 
  menuActiveHandler, 
  themeToggle, 
  isDark,
  changeLang,
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
          <li key={item.url} className="header-nav__item">
            <NavLink
              to={linkRoot + item.url}
              onClick={
                mobileDisplay ? () => { setTitle(item.title); menuActiveHandler(); } : () => setTitle(item.title)
              }
              className="header-nav__link capitalize"
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        <select name="language" onChange={changeLang}>
          <option value="en">English</option>
          <option value="ua">Ukraine</option>
          <option value="ru">Russian</option>
        </select>
        <DarkModeToggle 
          onChange={themeToggle} 
          checked={isDark}
          size={60}
        />
      </ul>
    </nav>
  );
}

MenuView.propTypes = {
  navData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  classNames: PropTypes.string.isRequired,
  linkRoot: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  menuActiveHandler: PropTypes.func,
  themeToggle: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
  changeLang: PropTypes.func.isRequired,
};

MenuView.defaultProps = {
  menuActiveHandler() {},
};

export default MenuView;
