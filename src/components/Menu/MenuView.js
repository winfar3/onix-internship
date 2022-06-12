import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuView({ 
  navData, classNames, linkRoot, setTitle 
}) {
  return (
    <nav className="header__nav header-nav">
      <ul
        className={classNames}
      >
        {navData.map((item) => (
          <li key={item} className="header-nav__item">
            <NavLink
              to={linkRoot + item}
              onClick={() => setTitle(item)}
              className="header-nav__link capitalize"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

MenuView.propTypes = {
  navData: PropTypes.arrayOf(PropTypes.string).isRequired,
  classNames: PropTypes.string.isRequired,
  linkRoot: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export default MenuView;
