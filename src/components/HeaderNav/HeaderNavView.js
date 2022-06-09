import classNames from "classnames";
import PropTypes from "prop-types";
import Menu from "../Menu/Menu.js";

function HeaderNavView({ menuActive, menuActiveHandler, isNeedBurger }) {
  return (
    <>
      {isNeedBurger && (
        <div
          className={classNames("header-nav__burger", {
            "header-nav__burger_active": menuActive,
          })}
          onClick={() => menuActiveHandler()}
        >
          <span></span>
        </div>
      )}
      <Menu active={menuActive} />
    </>
  );
}

HeaderNavView.propTypes = {
  menuActive: PropTypes.bool,
  menuActiveHandler: PropTypes.func,
  isNeedBurger: PropTypes.bool,
}

export default HeaderNavView;
