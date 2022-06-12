import classNames from 'classnames';
import PropTypes from 'prop-types';
import Menu from '../Menu/Menu';

function HeaderNavView({ menuActive, menuActiveHandler, isNeedBurger }) {
  return (
    <>
      {isNeedBurger && (
        <div
          onClick={() => menuActiveHandler()}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
          className={classNames('header-nav__burger', {
            'header-nav__burger_active': menuActive,
          })}
        >
          <span />
        </div>
      )}
      <Menu active={menuActive} />
    </>
  );
}

HeaderNavView.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  menuActiveHandler: PropTypes.func.isRequired,
  isNeedBurger: PropTypes.bool.isRequired,
};

export default HeaderNavView;
