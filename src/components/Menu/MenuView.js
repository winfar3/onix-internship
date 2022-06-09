import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

function MenuView({ navData, classNames, linkRoot, setTitle }) {
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
  navData: PropTypes.array,
  classNames: PropTypes.string,
  linkRoot: PropTypes.string,
  setTitle: PropTypes.func,
}

export default MenuView;